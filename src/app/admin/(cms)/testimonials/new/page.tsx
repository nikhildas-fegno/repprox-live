import { PageHeader } from "@/components/admin/page-header";
import TestimonialForm from "../testimonial-form";

export default function NewTestimonialPage() {
  return (
    <div className="w-full">
      <PageHeader title="New Testimonial" />
      <TestimonialForm />
    </div>
  );
}
