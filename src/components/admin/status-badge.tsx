import { cn } from "@/lib/utils";

type Variant = "published" | "draft" | "active" | "inactive";

const variants: Record<Variant, string> = {
  published: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  draft: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  active: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  inactive: "bg-slate-100 text-slate-500 ring-1 ring-slate-200",
};

export function StatusBadge({ value }: { value: string }) {
  const v = value.toLowerCase() as Variant;
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize", variants[v] ?? variants.draft)}>
      {v}
    </span>
  );
}
