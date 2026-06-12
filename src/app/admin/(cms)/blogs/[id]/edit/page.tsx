import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import BlogForm from "../../blog-form";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [blog, categories, allBlogs] = await Promise.all([
    db.blog.findUnique({ where: { id }, include: { relatedFrom: true } }),
    db.category.findMany({ orderBy: { name: "asc" } }),
    db.blog.findMany({ select: { id: true, title: true }, orderBy: { title: "asc" } }),
  ]);
  if (!blog) notFound();
  const relatedIds = blog.relatedFrom.map((r) => r.relatedBlogId);
  return (
    <div className="w-full">
      <PageHeader title="Edit Blog" />
      <BlogForm categories={categories} blog={blog} allBlogs={allBlogs} relatedIds={relatedIds} />
    </div>
  );
}
