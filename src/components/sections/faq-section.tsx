import type { FaqItem } from "@/types/content";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <Reveal>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={item.question} value={`item-${i}`}>
            <AccordionTrigger>
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[12px] font-semibold text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-9">{item.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}
