import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { StatusBadge } from "@/components/admin/status-badge";
import { DeleteButton } from "@/components/admin/delete-button";
import { deleteClientLogoAction } from "@/actions/admin/client-logos";
import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";

export default async function ClientLogosPage() {
  const logos = await db.clientLogo.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });

  return (
    <div className="w-full">
      <PageHeader
        title="Client Logos"
        description="Logos displayed in the client strip"
        createHref="/admin/client-logos/new"
        createLabel="New Logo"
      />
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Logo</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Name</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Order</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {logos.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-slate-400">No client logos yet.</td>
              </tr>
            )}
            {logos.map((logo) => (
              <tr key={logo.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="px-4 py-3">
                  <div className="w-16 h-10 rounded border border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={logo.logoUrl}
                      alt={logo.name}
                      width={56}
                      height={32}
                      className="object-contain max-h-8"
                      unoptimized
                    />
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-slate-800">{logo.name}</td>
                <td className="px-4 py-3 text-slate-500">{logo.order}</td>
                <td className="px-4 py-3">
                  <StatusBadge value={logo.active ? "active" : "inactive"} />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3 justify-end">
                    <Link
                      href={`/admin/client-logos/${logo.id}/edit`}
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#2081ED] transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />Edit
                    </Link>
                    <DeleteButton
                      label="Client Logo"
                      action={async () => { "use server"; await deleteClientLogoAction(logo.id); }}
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
