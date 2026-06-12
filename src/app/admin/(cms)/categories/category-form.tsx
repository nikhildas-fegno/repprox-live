"use client";

import { useActionState, useCallback } from "react";
import { createCategoryAction, updateCategoryAction } from "@/actions/admin/categories";
import { FormField, TextInput, Textarea, FormActions } from "@/components/admin/form-field";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { Category } from "@/generated/prisma/client";

export default function CategoryForm({ category }: { category?: Category }) {
  const action = category ? updateCategoryAction.bind(null, category.id) : createCategoryAction;
  const [state, formAction, pending] = useActionState(action, {});
  const slugify = useCallback((v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), []);

  return (
    <form action={formAction} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5">
      {state?.error && <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{state.error}</div>}
      <div className="grid grid-cols-2 gap-5">
        <FormField label="Name" name="name" required error={state?.fieldErrors?.name}>
          <TextInput name="name" defaultValue={category?.name} placeholder="Category name"
            onChange={(e) => { const s = document.getElementById("slug") as HTMLInputElement; if (s && !category) s.value = slugify(e.target.value); }} />
        </FormField>
        <FormField label="Slug" name="slug" required error={state?.fieldErrors?.slug}>
          <TextInput id="slug" name="slug" defaultValue={category?.slug} placeholder="url-slug" />
        </FormField>
      </div>
      <FormField label="Description" name="description" error={state?.fieldErrors?.description}>
        <Textarea name="description" rows={3} defaultValue={category?.description ?? ""} placeholder="Optional description" />
      </FormField>
      <FormActions>
        <button type="submit" disabled={pending} className="inline-flex items-center gap-2 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-medium px-5 py-2.5 transition-colors disabled:opacity-60 cursor-pointer">
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? "Saving…" : category ? "Update" : "Create"}
        </button>
        <Link href="/admin/categories" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Cancel</Link>
      </FormActions>
    </form>
  );
}
