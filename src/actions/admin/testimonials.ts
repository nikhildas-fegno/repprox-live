"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

const TestimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  designation: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  tagline: z.string().optional(),
  industry: z.string().optional(),
  review: z.string().min(1, "Review is required"),
  photoUrl: z.string().optional(),
  active: z.string().optional().transform((v) => v === "true"),
});

async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
}

export type TestimonialState = { error?: string; fieldErrors?: Record<string, string[]> };

export async function createTestimonialAction(_prev: TestimonialState, formData: FormData): Promise<TestimonialState> {
  await requireAuth();
  const result = TestimonialSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.testimonial.create({ data: { ...result.data, photoUrl: result.data.photoUrl || null } });
  revalidatePath("/admin/testimonials");
  redirect("/admin/testimonials");
}

export async function updateTestimonialAction(id: string, _prev: TestimonialState, formData: FormData): Promise<TestimonialState> {
  await requireAuth();
  const result = TestimonialSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.testimonial.update({ where: { id }, data: { ...result.data, photoUrl: result.data.photoUrl || null } });
  revalidatePath("/admin/testimonials");
  redirect("/admin/testimonials");
}

export async function deleteTestimonialAction(id: string) {
  await requireAuth();
  await db.testimonial.delete({ where: { id } });
  revalidatePath("/admin/testimonials");
}
