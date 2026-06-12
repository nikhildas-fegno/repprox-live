"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

const FaqSchema = z.object({
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
  pages: z.string().optional(),
  order: z.coerce.number().default(0),
  active: z.string().optional().transform((v) => v === "true"),
});

async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
}

export type FaqState = { error?: string; fieldErrors?: Record<string, string[]> };

export async function createFaqAction(_prev: FaqState, formData: FormData): Promise<FaqState> {
  await requireAuth();
  const result = FaqSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.faq.create({ data: { ...result.data, pages: result.data.pages || null } });
  revalidatePath("/admin/faqs");
  redirect("/admin/faqs");
}

export async function updateFaqAction(id: string, _prev: FaqState, formData: FormData): Promise<FaqState> {
  await requireAuth();
  const result = FaqSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.faq.update({ where: { id }, data: { ...result.data, pages: result.data.pages || null } });
  revalidatePath("/admin/faqs");
  redirect("/admin/faqs");
}

export async function deleteFaqAction(id: string) {
  await requireAuth();
  await db.faq.delete({ where: { id } });
  revalidatePath("/admin/faqs");
}
