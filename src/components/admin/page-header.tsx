import Link from "next/link";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  createHref?: string;
  createLabel?: string;
}

export function PageHeader({ title, description, createHref, createLabel = "New" }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
        {description && <p className="text-sm text-slate-500 mt-0.5">{description}</p>}
      </div>
      {createHref && (
        <Link
          href={createHref}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-medium px-4 py-2 transition-colors shrink-0"
        >
          <Plus className="w-4 h-4" />
          {createLabel}
        </Link>
      )}
    </div>
  );
}
