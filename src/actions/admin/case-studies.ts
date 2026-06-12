"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

const CaseStudySchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens — no spaces"),
  clientName: z.string().min(1, "Client name is required"),
  industry: z.string().min(1, "Industry is required"),
  content: z.string().min(1, "Content is required"),
  imageUrl: z.string().optional(),
  featured: z.string().optional().transform((v) => v === "true"),
});

async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
}

export type CaseStudyState = { error?: string; fieldErrors?: Record<string, string[]> };

export async function createCaseStudyAction(_prev: CaseStudyState, formData: FormData): Promise<CaseStudyState> {
  await requireAuth();
  const relatedIds = formData.getAll("relatedIds") as string[];
  const result = CaseStudySchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };

  const item = await db.caseStudy.create({ data: { ...result.data, imageUrl: result.data.imageUrl || null } });

  if (relatedIds.length > 0) {
    await db.relatedCaseStudy.createMany({
      data: relatedIds.map((relatedCaseStudyId) => ({ caseStudyId: item.id, relatedCaseStudyId })),
      skipDuplicates: true,
    });
  }

  revalidatePath("/admin/case-studies");
  redirect("/admin/case-studies");
}

export async function updateCaseStudyAction(id: string, _prev: CaseStudyState, formData: FormData): Promise<CaseStudyState> {
  await requireAuth();
  const relatedIds = formData.getAll("relatedIds") as string[];
  const result = CaseStudySchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };

  await db.caseStudy.update({ where: { id }, data: { ...result.data, imageUrl: result.data.imageUrl || null } });

  await db.relatedCaseStudy.deleteMany({ where: { caseStudyId: id } });
  if (relatedIds.length > 0) {
    await db.relatedCaseStudy.createMany({
      data: relatedIds.map((relatedCaseStudyId) => ({ caseStudyId: id, relatedCaseStudyId })),
      skipDuplicates: true,
    });
  }

  revalidatePath("/admin/case-studies");
  redirect("/admin/case-studies");
}

export async function deleteCaseStudyAction(id: string) {
  await requireAuth();
  await db.caseStudy.delete({ where: { id } });
  revalidatePath("/admin/case-studies");
}
