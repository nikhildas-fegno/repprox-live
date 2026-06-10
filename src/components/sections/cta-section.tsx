import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import Container from "@/components/layout/container";

interface CtaSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CtaSection({
  eyebrow = "Ready when you are",
  title,
  description,
  primary = { label: "Request a demo", href: "/contact" },
  secondary = { label: "Contact Sales", href: "/contact" },
}: CtaSectionProps) {
  return (
    <section className="bg-white py-12 lg:py-24">
      <Container>
        <Reveal>
          {/* Ticket Stub Card Layout: Minimal & Unique */}
          <div className="relative bg-slate-900 text-white rounded-[2.5rem] flex flex-col lg:flex-row shadow-2xl shadow-slate-900/10">
            
            {/* Left Area: Content */}
            <div className="p-10 sm:p-14 md:p-16 lg:p-20 flex-1 flex flex-col justify-center gap-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0ea5ff]">
                {eyebrow}
              </span>
              
              <h2 className="text-balance font-display text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                {title}
              </h2>
              
              <p className="max-w-2xl text-balance text-lg leading-relaxed text-slate-400">
                {description}
              </p>
            </div>


            {/* Right Area: Actions */}
            <div className="p-10 sm:p-14 md:p-16 lg:p-20 lg:w-[35%] flex flex-col items-center lg:items-start justify-center gap-4 rounded-b-[2.5rem] lg:rounded-b-none lg:rounded-r-[2.5rem]">
              <Button asChild size="lg" className="w-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white border-0 font-bold h-14 rounded-xl text-base transition-colors duration-300">
                <Link href={primary.href} className="flex items-center justify-center gap-2">
                  {primary.label}
                  <ArrowUpRight className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full bg-transparent border-2 border-slate-700 text-white hover:bg-slate-800 font-bold h-14 rounded-xl text-base transition-colors duration-300">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
}
