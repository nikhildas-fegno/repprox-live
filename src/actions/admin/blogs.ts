"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

const BlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens — no spaces"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().optional(),
  author: z.string().min(1, "Author is required"),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  featured: z.string().optional().transform((v) => v === "true"),
  categoryId: z.string().optional(),
  imageUrl: z.string().optional(),
  imageAlt: z.string().optional(),
});

async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return session;
}

export type BlogState = { error?: string; fieldErrors?: Record<string, string[]> };

export async function createBlogAction(_prev: BlogState, formData: FormData): Promise<BlogState> {
  await requireAuth();
  const relatedIds = formData.getAll("relatedIds") as string[];
  const result = BlogSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };

  const { categoryId, ...data } = result.data;
  const blog = await db.blog.create({
    data: {
      ...data,
      excerpt: data.excerpt || null,
      imageUrl: data.imageUrl || null,
      imageAlt: data.imageAlt || null,
      categoryId: categoryId || null,
      publishedAt: data.status === "PUBLISHED" ? new Date() : null,
    },
  });

  if (relatedIds.length > 0) {
    await db.relatedBlog.createMany({
      data: relatedIds.map((relatedBlogId) => ({ blogId: blog.id, relatedBlogId })),
      skipDuplicates: true,
    });
  }

  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function updateBlogAction(id: string, _prev: BlogState, formData: FormData): Promise<BlogState> {
  await requireAuth();
  const relatedIds = formData.getAll("relatedIds") as string[];
  const result = BlogSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };

  const { categoryId, ...data } = result.data;
  const existing = await db.blog.findUnique({ where: { id } });
  await db.blog.update({
    where: { id },
    data: {
      ...data,
      excerpt: data.excerpt || null,
      imageUrl: data.imageUrl || null,
      imageAlt: data.imageAlt || null,
      categoryId: categoryId || null,
      publishedAt:
        data.status === "PUBLISHED" && !existing?.publishedAt ? new Date() : existing?.publishedAt ?? null,
    },
  });

  // Replace related blogs
  await db.relatedBlog.deleteMany({ where: { blogId: id } });
  if (relatedIds.length > 0) {
    await db.relatedBlog.createMany({
      data: relatedIds.map((relatedBlogId) => ({ blogId: id, relatedBlogId })),
      skipDuplicates: true,
    });
  }

  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function deleteBlogAction(id: string) {
  await requireAuth();
  await db.blog.delete({ where: { id } });
  revalidatePath("/admin/blogs");
}
