import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/reveal";
import Container from "@/components/layout/container";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with the RepProX team — request a demo, ask about pricing, or talk through whether RepProX fits your operation. We respond within one business day.",
  path: "/contact",
});

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@repprox.com",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Austin, Texas — with team members across North America & Europe",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within one business day, US & EU hours",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
        <div className="bp-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative grid gap-16 pt-20 pb-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:pt-28 lg:pb-28">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us where it's breaking down. We'll show you what changes."
              description="Whether you're evaluating ERPs for the first time or replacing a system that's stopped scaling with you, the fastest way to know if RepProX fits is to talk to someone who's configured it for a business like yours."
            />
            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-6 border-t border-ink/10 pt-8">
                {details.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <li key={detail.label} className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-ink/15 bg-card text-ink-soft">
                        <Icon aria-hidden="true" className="size-[18px]" />
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                          {detail.label}
                        </span>
                        <span className="text-[15px] leading-relaxed text-ink">{detail.value}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.05} className="bp-corners rounded-md border border-ink/12 bg-card p-7 shadow-xl shadow-ink/[0.04] sm:p-9 lg:p-10">
            <div className="mb-8 flex flex-col gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-ink">
                Request form / 01
              </span>
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Send us a few details
              </h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                We&rsquo;ll route this to the right person on our team based on your team size and
                what you&rsquo;re looking to solve.
              </p>
            </div>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
