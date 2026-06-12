import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { StatusBadge } from "@/components/admin/status-badge";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteBlogAction } from "@/actions/admin/blogs";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function BlogsPage() {
  const blogs = await db.blog.findMany({
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return (
    <div className="w-full">
      <PageHeader title="Blogs" description="Manage blog posts" createHref="/admin/blogs/new" createLabel="New Blog" />

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Title</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Author</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Category</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Date</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {blogs.length === 0 && (
              <tr><td colSpan={6} className="px-4 py-10 text-center text-slate-400">No blogs yet.</td></tr>
            )}
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-800 max-w-xs truncate">{blog.title}</td>
                <td className="px-4 py-3 text-slate-600">{blog.author}</td>
                <td className="px-4 py-3 text-slate-600">{blog.category?.name ?? "—"}</td>
                <td className="px-4 py-3"><StatusBadge value={blog.status} /></td>
                <td className="px-4 py-3 text-slate-500 text-xs">{blog.createdAt.toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-end">
                    <Link href={`/admin/blogs/${blog.id}/edit`} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2081ED] transition-colors">
                      <Pencil className="w-3.5 h-3.5" />Edit
                    </Link>
                    <DeleteButton
                      label="Blog"
                      action={async () => { "use server"; await deleteBlogAction(blog.id); }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
