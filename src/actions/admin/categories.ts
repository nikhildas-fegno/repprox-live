"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

const CategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().optional(),
});

async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
}

export type CategoryState = { error?: string; fieldErrors?: Record<string, string[]> };

export async function createCategoryAction(_prev: CategoryState, formData: FormData): Promise<CategoryState> {
  await requireAuth();
  const result = CategorySchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.category.create({ data: { ...result.data, description: result.data.description || null } });
  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}

export async function updateCategoryAction(id: string, _prev: CategoryState, formData: FormData): Promise<CategoryState> {
  await requireAuth();
  const result = CategorySchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.category.update({ where: { id }, data: { ...result.data, description: result.data.description || null } });
  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}

export async function deleteCategoryAction(id: string) {
  await requireAuth();
  await db.category.delete({ where: { id } });
  revalidatePath("/admin/categories");
}
