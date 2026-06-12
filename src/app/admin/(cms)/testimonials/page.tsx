import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { StatusBadge } from "@/components/admin/status-badge";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteTestimonialAction } from "@/actions/admin/testimonials";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function TestimonialsPage() {
  const testimonials = await db.testimonial.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="w-full">
      <PageHeader title="Testimonials" description="Customer reviews and feedback" createHref="/admin/testimonials/new" createLabel="New Testimonial" />
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Name</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Role</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Company</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Tagline</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Industry</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {testimonials.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-10 text-center text-slate-400">No testimonials yet.</td></tr>
            )}
            {testimonials.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-800">{t.name}</td>
                <td className="px-4 py-3 text-slate-600">{t.designation}</td>
                <td className="px-4 py-3 text-slate-600">{t.company}</td>
                <td className="px-4 py-3 text-slate-500 text-xs max-w-45 truncate">{t.tagline ?? "—"}</td>
                <td className="px-4 py-3 text-slate-500 text-xs">{t.industry ?? "—"}</td>
                <td className="px-4 py-3"><StatusBadge value={t.active ? "active" : "inactive"} /></td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-end">
                    <Link href={`/admin/testimonials/${t.id}/edit`} className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2081ED] transition-colors">
                      <Pencil className="w-3.5 h-3.5" />Edit
                    </Link>
                    <DeleteButton label="Testimonial" action={async () => { "use server"; await deleteTestimonialAction(t.id); }} />
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
