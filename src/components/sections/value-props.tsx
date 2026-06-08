import type { ValueProp } from "@/types/content";
import { Reveal } from "@/components/reveal";

export function ValueProps({ items }: { items: ValueProp[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={(i % 2) * 0.08} y={20} className="bg-card p-8 sm:p-10">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-accent-ink">
              {item.index}
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight">{item.title}</h3>
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
