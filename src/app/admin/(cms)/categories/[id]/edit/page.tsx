import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import CategoryForm from "../../category-form";

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = await db.category.findUnique({ where: { id } });
  if (!category) notFound();
  return (
    <div className="w-full">
      <PageHeader title="Edit Category" />
      <CategoryForm category={category} />
    </div>
  );
}
