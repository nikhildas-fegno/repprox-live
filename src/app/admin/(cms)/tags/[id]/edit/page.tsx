import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import TagForm from "../../tag-form";

export default async function EditTagPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tag = await db.tag.findUnique({ where: { id } });
  if (!tag) notFound();
  return (
    <div className="w-full">
      <PageHeader title="Edit Tag" />
      <TagForm tag={tag} />
    </div>
  );
}
