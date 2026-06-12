"use client";

import { useActionState, useCallback } from "react";
import { createCaseStudyAction, updateCaseStudyAction } from "@/actions/admin/case-studies";
import { FormField, TextInput, Select, FormActions } from "@/components/admin/form-field";
import { ImageUpload } from "@/components/admin/image-upload";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/generated/prisma/client";

interface Props {
  item?: CaseStudy;
  allItems?: Pick<CaseStudy, "id" | "title">[];
  relatedIds?: string[];
}

export default function CaseStudyForm({ item, allItems = [], relatedIds = [] }: Props) {
  const action = item ? updateCaseStudyAction.bind(null, item.id) : createCaseStudyAction;
  const [state, formAction, pending] = useActionState(action, {});

  const slugify = useCallback((v: string) =>
    v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), []);

  function handleSlugChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value = e.target.value.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }

  const otherItems = allItems.filter((cs) => cs.id !== item?.id);

  return (
    <form action={formAction} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 bp-corners">
      {state?.error && <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{state.error}</div>}

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Title" name="title" required error={state?.fieldErrors?.title}>
          <TextInput name="title" defaultValue={item?.title} placeholder="Case study title"
            onChange={(e) => { const s = document.getElementById("cs-slug") as HTMLInputElement; if (s && !item) s.value = slugify(e.target.value); }} />
        </FormField>
        <FormField label="Slug" name="slug" required error={state?.fieldErrors?.slug}>
          <TextInput id="cs-slug" name="slug" defaultValue={item?.slug} placeholder="url-slug" onChange={handleSlugChange} />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Client Name" name="clientName" required error={state?.fieldErrors?.clientName}>
          <TextInput name="clientName" defaultValue={item?.clientName} placeholder="Company name" />
        </FormField>
        <FormField label="Industry" name="industry" required error={state?.fieldErrors?.industry}>
          <TextInput name="industry" defaultValue={item?.industry} placeholder="e.g. Distribution, Retail" />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Cover Image" name="imageUrl" error={state?.fieldErrors?.imageUrl}>
          <ImageUpload name="imageUrl" defaultValue={item?.imageUrl} label="Cover Image" />
        </FormField>
        <FormField label="Featured" name="featured" error={state?.fieldErrors?.featured}>
          <Select name="featured" defaultValue={item?.featured ? "true" : "false"}>
            <option value="false">No</option>
            <option value="true">Yes — show as featured</option>
          </Select>
        </FormField>
      </div>

      <FormField label="Content" name="content" required error={state?.fieldErrors?.content}>
        <RichTextEditor name="content" defaultValue={item?.content} placeholder="Write the case study content…" />
      </FormField>

      {otherItems.length > 0 && (
        <FormField label="Related Case Studies" name="relatedIds" error={state?.fieldErrors?.relatedIds}>
          <div className="rounded-lg border border-slate-200 bg-white divide-y divide-slate-100 max-h-48 overflow-y-auto">
            {otherItems.map((cs) => (
              <label key={cs.id} className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  name="relatedIds"
                  value={cs.id}
                  defaultChecked={relatedIds.includes(cs.id)}
                  className="w-4 h-4 rounded border-slate-300 text-[#2081ED] cursor-pointer"
                />
                <span className="text-sm text-slate-700">{cs.title}</span>
              </label>
            ))}
          </div>
        </FormField>
      )}

      <FormActions>
        <button type="submit" disabled={pending} className="inline-flex items-center gap-2 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-medium px-5 py-2.5 transition-colors disabled:opacity-60 cursor-pointer">
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? "Saving…" : item ? "Update" : "Create"}
        </button>
        <Link href="/admin/case-studies" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Cancel</Link>
      </FormActions>
    </form>
  );
}
