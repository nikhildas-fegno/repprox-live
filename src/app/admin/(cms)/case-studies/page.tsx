import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteCaseStudyAction } from "@/actions/admin/case-studies";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function CaseStudiesPage() {
  const items = await db.caseStudy.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="w-full">
      <PageHeader title="Case Studies" description="Customer success stories" createHref="/admin/case-studies/new" createLabel="New Case Study" />
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Title</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Client</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Industry</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Date</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {items.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-10 text-center text-slate-400">No case studies yet.</td></tr>
            )}
            {items.map((cs) => (
              <tr key={cs.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-800 max-w-xs truncate">{cs.title}</td>
                <td className="px-4 py-3 text-slate-600">{cs.clientName}</td>
                <td className="px-4 py-3 text-slate-600">{cs.industry}</td>
                <td className="px-4 py-3 text-slate-500 text-xs">{cs.createdAt.toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-end">
                    <Link href={`/admin/case-studies/${cs.id}/edit`} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2081ED] transition-colors">
                      <Pencil className="w-3.5 h-3.5" />Edit
                    </Link>
                    <DeleteButton label="Case Study" action={async () => { "use server"; await deleteCaseStudyAction(cs.id); }} />
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
