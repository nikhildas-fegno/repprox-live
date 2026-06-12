"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

const TagSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
});

async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
}

export type TagState = { error?: string; fieldErrors?: Record<string, string[]> };

export async function createTagAction(_prev: TagState, formData: FormData): Promise<TagState> {
  await requireAuth();
  const result = TagSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.tag.create({ data: result.data });
  revalidatePath("/admin/tags");
  redirect("/admin/tags");
}

export async function updateTagAction(id: string, _prev: TagState, formData: FormData): Promise<TagState> {
  await requireAuth();
  const result = TagSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.tag.update({ where: { id }, data: result.data });
  revalidatePath("/admin/tags");
  redirect("/admin/tags");
}

export async function deleteTagAction(id: string) {
  await requireAuth();
  await db.tag.delete({ where: { id } });
  revalidatePath("/admin/tags");
}
