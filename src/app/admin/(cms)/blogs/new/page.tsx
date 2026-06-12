import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import BlogForm from "../blog-form";

export default async function NewBlogPage() {
  const [categories, allBlogs] = await Promise.all([
    db.category.findMany({ orderBy: { name: "asc" } }),
    db.blog.findMany({ select: { id: true, title: true }, orderBy: { title: "asc" } }),
  ]);
  return (
    <div className="w-full">
      <PageHeader title="New Blog" />
      <BlogForm categories={categories} allBlogs={allBlogs} />
    </div>
  );
}
