import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import CaseStudyForm from "../case-study-form";

export default async function NewCaseStudyPage() {
  const allItems = await db.caseStudy.findMany({ select: { id: true, title: true }, orderBy: { title: "asc" } });
  return (
    <div className="w-full">
      <PageHeader title="New Case Study" />
      <CaseStudyForm allItems={allItems} />
    </div>
  );
}
