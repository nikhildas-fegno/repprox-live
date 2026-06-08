import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "h-12 w-full appearance-none rounded-sm border border-ink/20 bg-paper px-4 pr-10 text-[15px] text-ink transition-colors focus-visible:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-accent aria-invalid:ring-accent/30",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-soft"
        />
      </div>
    );
  },
);
Select.displayName = "Select";

export { Select };
