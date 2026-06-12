"use client";

import { useActionState } from "react";
import { createClientLogoAction, updateClientLogoAction } from "@/actions/admin/client-logos";
import { FormField, TextInput, Select, FormActions } from "@/components/admin/form-field";
import { ImageUpload } from "@/components/admin/image-upload";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { ClientLogo } from "@/generated/prisma/client";

export default function ClientLogoForm({ item }: { item?: ClientLogo }) {
  const action = item ? updateClientLogoAction.bind(null, item.id) : createClientLogoAction;
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 bp-corners">
      {state?.error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{state.error}</div>
      )}

      <FormField label="Client Name" name="name" required error={state?.fieldErrors?.name}>
        <TextInput name="name" defaultValue={item?.name} placeholder="e.g. Smart Electronics" />
      </FormField>

      <FormField label="Logo" name="logoUrl" required error={state?.fieldErrors?.logoUrl}>
        <ImageUpload name="logoUrl" defaultValue={item?.logoUrl} label="Client Logo" />
      </FormField>

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Display Order" name="order" error={state?.fieldErrors?.order}>
          <TextInput type="number" name="order" defaultValue={item?.order ?? 0} min={0} />
        </FormField>
        <FormField label="Status" name="active" error={state?.fieldErrors?.active}>
          <Select name="active" defaultValue={item?.active !== false ? "true" : "false"}>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </Select>
        </FormField>
      </div>

      <FormActions>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-medium px-5 py-2.5 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? "Saving…" : item ? "Update" : "Create"}
        </button>
        <Link href="/admin/client-logos" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">
          Cancel
        </Link>
      </FormActions>
    </form>
  );
}
