import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import ClientLogoForm from "../../client-logo-form";

export default async function EditClientLogoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await db.clientLogo.findUnique({ where: { id } });
  if (!item) notFound();

  return (
    <div className="w-full max-w-xl">
      <PageHeader title="Edit Client Logo" />
      <ClientLogoForm item={item} />
    </div>
  );
}
