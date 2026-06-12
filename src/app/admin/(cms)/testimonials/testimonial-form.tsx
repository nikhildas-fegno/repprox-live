"use client";

import { useActionState } from "react";
import { createTestimonialAction, updateTestimonialAction } from "@/actions/admin/testimonials";
import { FormField, TextInput, Textarea, Select, FormActions } from "@/components/admin/form-field";
import { ImageUpload } from "@/components/admin/image-upload";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { Testimonial } from "@/generated/prisma/client";

export default function TestimonialForm({ testimonial }: { testimonial?: Testimonial }) {
  const action = testimonial ? updateTestimonialAction.bind(null, testimonial.id) : createTestimonialAction;
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 bp-corners">
      {state?.error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{state.error}</div>
      )}

      {/* Name + Role */}
      <div className="grid grid-cols-2 gap-5">
        <FormField label="Name" name="name" required error={state?.fieldErrors?.name}>
          <TextInput name="name" defaultValue={testimonial?.name} placeholder="Customer full name" />
        </FormField>
        <FormField label="Role" name="designation" required error={state?.fieldErrors?.designation}>
          <TextInput name="designation" defaultValue={testimonial?.designation} placeholder="e.g. CEO, Operations Manager" />
        </FormField>
      </div>

      {/* Company + Industry */}
      <div className="grid grid-cols-2 gap-5">
        <FormField label="Company" name="company" required error={state?.fieldErrors?.company}>
          <TextInput name="company" defaultValue={testimonial?.company} placeholder="Company name" />
        </FormField>
        <FormField label="Industry" name="industry" error={state?.fieldErrors?.industry}>
          <TextInput name="industry" defaultValue={testimonial?.industry ?? ""} placeholder="e.g. Distribution, Retail, Wholesale" />
        </FormField>
      </div>

      {/* Tagline */}
      <FormField label="Tagline" name="tagline" error={state?.fieldErrors?.tagline}>
        <TextInput name="tagline" defaultValue={testimonial?.tagline ?? ""} placeholder="e.g. Leading Consumer Electronics Distributor" />
      </FormField>

      {/* Photo */}
      <FormField label="Photo" name="photoUrl" error={state?.fieldErrors?.photoUrl}>
        <ImageUpload name="photoUrl" defaultValue={testimonial?.photoUrl} label="Customer Photo" />
      </FormField>

      {/* Review / Quote */}
      <FormField label="Quote / Review" name="review" required error={state?.fieldErrors?.review}>
        <Textarea name="review" rows={4} defaultValue={testimonial?.review ?? ""} placeholder="Customer review or quote…" />
      </FormField>

      {/* Status */}
      <FormField label="Status" name="active" error={state?.fieldErrors?.active}>
        <Select name="active" defaultValue={testimonial?.active !== false ? "true" : "false"}>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </Select>
      </FormField>

      <FormActions>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-medium px-5 py-2.5 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? "Saving…" : testimonial ? "Update" : "Create"}
        </button>
        <Link href="/admin/testimonials" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">
          Cancel
        </Link>
      </FormActions>
    </form>
  );
}
