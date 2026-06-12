import { PageHeader } from "@/components/admin/page-header";
import FaqForm from "../faq-form";

export default function NewFaqPage() {
  return (
    <div className="w-full">
      <PageHeader title="New FAQ" />
      <FaqForm />
    </div>
  );
}
