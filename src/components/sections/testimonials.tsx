import type { Testimonial } from "@/types/content";
import { Reveal } from "@/components/reveal";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="li" key={item.name} delay={i * 0.08} className="flex h-full bg-card p-8 sm:p-9">
          <figure className="flex h-full flex-col gap-6">
            <span aria-hidden="true" className="font-display text-5xl leading-none text-accent/40">
              “
            </span>
            <blockquote className="flex-1 text-balance font-display text-[19px] font-semibold leading-snug tracking-tight">
              {item.quote}
            </blockquote>
            <figcaption className="flex flex-col gap-0.5 border-t border-ink/10 pt-4">
              <span className="font-bold text-ink">{item.name}</span>
              <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                {item.role} · {item.company}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
