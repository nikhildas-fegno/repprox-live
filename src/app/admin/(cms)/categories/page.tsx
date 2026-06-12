import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteCategoryAction } from "@/actions/admin/categories";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function CategoriesPage() {
  const categories = await db.category.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { blogs: true } } },
  });

  return (
    <div className="w-full">
      <PageHeader title="Categories" description="Organise blogs by category" createHref="/admin/categories/new" createLabel="New Category" />
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Name</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Slug</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Blogs</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {categories.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-10 text-center text-slate-400">No categories yet.</td></tr>
            )}
            {categories.map((cat) => (
              <tr key={cat.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-800">{cat.name}</td>
                <td className="px-4 py-3 text-slate-500 font-mono text-xs">{cat.slug}</td>
                <td className="px-4 py-3 text-slate-600">{cat._count.blogs}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-end">
                    <Link href={`/admin/categories/${cat.id}/edit`} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2081ED] transition-colors">
                      <Pencil className="w-3.5 h-3.5" />Edit
                    </Link>
                    <DeleteButton
                      label="Category"
                      action={async () => { "use server"; await deleteCategoryAction(cat.id); }}
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
