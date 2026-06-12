import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { StatusBadge } from "@/components/admin/status-badge";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteFaqAction } from "@/actions/admin/faqs";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function FaqsPage() {
  const faqs = await db.faq.findMany({ orderBy: { order: "asc" } });

  return (
    <div className="w-full">
      <PageHeader title="FAQs" description="Frequently asked questions" createHref="/admin/faqs/new" createLabel="New FAQ" />
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">#</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Question</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Page(s)</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {faqs.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-10 text-center text-slate-400">No FAQs yet.</td></tr>
            )}
            {faqs.map((faq) => (
              <tr key={faq.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-3 text-slate-400 text-xs w-10">{faq.order}</td>
                <td className="px-4 py-3 font-medium text-slate-800 max-w-sm">{faq.question}</td>
                <td className="px-4 py-3 text-slate-500 text-xs">{faq.pages ?? "—"}</td>
                <td className="px-4 py-3"><StatusBadge value={faq.active ? "active" : "inactive"} /></td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-end">
                    <Link href={`/admin/faqs/${faq.id}/edit`} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2081ED] transition-colors">
                      <Pencil className="w-3.5 h-3.5" />Edit
                    </Link>
                    <DeleteButton label="FAQ" action={async () => { "use server"; await deleteFaqAction(faq.id); }} />
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
