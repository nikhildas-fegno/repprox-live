import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em]",
  {
    variants: {
      variant: {
        default: "border-ink/20 bg-transparent text-ink-soft",
        accent: "border-accent/30 bg-accent-soft text-accent-ink",
        inverse: "border-paper/25 bg-transparent text-paper/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof badgeVariants> {
  as?: React.ElementType;
}

function Badge({
  className,
  variant,
  as: Comp = "span",
  ...props
}: BadgeProps) {
  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };