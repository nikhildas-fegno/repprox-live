import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteTagAction } from "@/actions/admin/tags";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function TagsPage() {
  const tags = await db.tag.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { blogTags: true } } },
  });

  return (
    <div className="w-full">
      <PageHeader title="Tags" description="Labels for blog posts" createHref="/admin/tags/new" createLabel="New Tag" />
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Name</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Slug</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Used in</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {tags.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-10 text-center text-slate-400">No tags yet.</td></tr>
            )}
            {tags.map((tag) => (
              <tr key={tag.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-800">{tag.name}</td>
                <td className="px-4 py-3 text-slate-500 font-mono text-xs">{tag.slug}</td>
                <td className="px-4 py-3 text-slate-600">{tag._count.blogTags} blog{tag._count.blogTags !== 1 ? "s" : ""}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-end">
                    <Link href={`/admin/tags/${tag.id}/edit`} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2081ED] transition-colors">
                      <Pencil className="w-3.5 h-3.5" />Edit
                    </Link>
                    <DeleteButton label="Tag" action={async () => { "use server"; await deleteTagAction(tag.id); }} />
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
