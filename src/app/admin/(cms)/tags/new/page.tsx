import { PageHeader } from "@/components/admin/page-header";
import TagForm from "../tag-form";

export default function NewTagPage() {
  return (
    <div className="w-full">
      <PageHeader title="New Tag" />
      <TagForm />
    </div>
  );
}
