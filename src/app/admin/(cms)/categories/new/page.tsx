import { PageHeader } from "@/components/admin/page-header";
import CategoryForm from "../category-form";

export default function NewCategoryPage() {
  return (
    <div className="w-full">
      <PageHeader title="New Category" />
      <CategoryForm />
    </div>
  );
}
