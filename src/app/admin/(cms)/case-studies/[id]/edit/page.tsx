import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import CaseStudyForm from "../../case-study-form";

export default async function EditCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [item, allItems] = await Promise.all([
    db.caseStudy.findUnique({ where: { id }, include: { relatedFrom: true } }),
    db.caseStudy.findMany({ select: { id: true, title: true }, orderBy: { title: "asc" } }),
  ]);
  if (!item) notFound();
  const relatedIds = item.relatedFrom.map((r) => r.relatedCaseStudyId);
  return (
    <div className="w-full">
      <PageHeader title="Edit Case Study" />
      <CaseStudyForm item={item} allItems={allItems} relatedIds={relatedIds} />
    </div>
  );
}
