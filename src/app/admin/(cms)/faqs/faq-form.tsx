"use client";

import { useActionState } from "react";
import { createFaqAction, updateFaqAction } from "@/actions/admin/faqs";
import { FormField, TextInput, Select, FormActions } from "@/components/admin/form-field";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { Faq } from "@/generated/prisma/client";

export default function FaqForm({ faq }: { faq?: Faq }) {
  const action = faq ? updateFaqAction.bind(null, faq.id) : createFaqAction;
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 bp-corners">
      {state?.error && <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{state.error}</div>}
      <FormField label="Question" name="question" required error={state?.fieldErrors?.question}>
        <TextInput name="question" defaultValue={faq?.question} placeholder="What is...?" />
      </FormField>
      <FormField label="Answer" name="answer" required error={state?.fieldErrors?.answer}>
        <TextInput name="answer" defaultValue={faq?.answer} placeholder="Detailed answer..." />
      </FormField>
      <div className="grid grid-cols-2 gap-5">
        <FormField label="Page(s)" name="pages" error={state?.fieldErrors?.pages}>
          <TextInput name="pages" defaultValue={faq?.pages ?? ""} placeholder="e.g. pricing, home (optional)" />
        </FormField>
        <FormField label="Display Order" name="order" error={state?.fieldErrors?.order}>
          <TextInput type="number" name="order" defaultValue={faq?.order ?? 0} min={0} />
        </FormField>
      </div>
      <FormField label="Status" name="active" error={state?.fieldErrors?.active}>
        <Select name="active" defaultValue={faq?.active !== false ? "true" : "false"}>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </Select>
      </FormField>
      <FormActions>
        <button type="submit" disabled={pending} className="inline-flex items-center gap-2 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-medium px-5 py-2.5 transition-colors disabled:opacity-60 cursor-pointer">
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? "Saving…" : faq ? "Update" : "Create"}
        </button>
        <Link href="/admin/faqs" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Cancel</Link>
      </FormActions>
    </form>
  );
}
