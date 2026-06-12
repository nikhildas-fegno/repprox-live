import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import FaqForm from "../../faq-form";

export default async function EditFaqPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const faq = await db.faq.findUnique({ where: { id } });
  if (!faq) notFound();
  return (
    <div className="w-full">
      <PageHeader title="Edit FAQ" />
      <FaqForm faq={faq} />
    </div>
  );
}
