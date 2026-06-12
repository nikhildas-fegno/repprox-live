import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import TestimonialForm from "../../testimonial-form";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const testimonial = await db.testimonial.findUnique({ where: { id } });
  if (!testimonial) notFound();
  return (
    <div className="w-full">
      <PageHeader title="Edit Testimonial" />
      <TestimonialForm testimonial={testimonial} />
    </div>
  );
}
