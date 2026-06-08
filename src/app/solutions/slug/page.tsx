import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/sections/cta-section";
import Container from "@/components/layout/container";
import { solutions } from "@/data/solutions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all defined solutions
export async function generateStaticParams() {
  return solutions.map((sol) => ({
    slug: sol.slug,
  }));
}

// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return {};

  return buildMetadata({
    title: `${sol.title} | Solutions`,
    description: sol.summary,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: sol.title, path: `/solutions/${slug}` },
        ]}
      />

      {/* Header section */}
      <section className="relative overflow-hidden border-b border-ink/10 bg-paper py-16 lg:py-20">
        <div className="bp-grid absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          {/* Back button */}
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-400 hover:text-accent-ink transition-colors mb-8"
          >
            <ArrowLeft className="size-3.5" /> Back to solutions
          </Link>
          
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-ink font-bold block mb-3">
              Solution Area · {sol.audience}
            </span>
            <SectionHeading
              eyebrow="Solution"
              title={sol.title}
              description={sol.summary}
              align="left"
            />
          </div>
        </Container>
      </section>

      {/* Comparison & Outcomes Section */}
      <section aria-label="Before and after details" className="bg-paper py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left: Before & After comparison columns (7 Cols) */}
            <div className="lg:col-span-7 grid gap-px overflow-hidden rounded-xl border border-slate-200/80 bg-slate-200 sm:grid-cols-2">
              {/* Before Column */}
              <div className="flex flex-col gap-4 bg-white p-8">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff9800]">
                  Before · The old way
                </span>
                <p className="text-sm leading-relaxed text-slate-600">
                  {sol.before}
                </p>
              </div>

              {/* After Column */}
              <div className="flex flex-col gap-4 bg-slate-50 p-8">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-ink">
                  After · With RepPro X
                </span>
                <p className="text-sm leading-relaxed text-ink font-semibold">
                  {sol.after}
                </p>
              </div>
            </div>

            {/* Right: Outcomes & Modules List (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Outcomes List */}
              <div className="bg-white border border-slate-200/80 p-8 rounded-xl flex flex-col gap-5">
                <h3 className="font-display text-base font-bold text-ink border-b border-slate-100 pb-3">
                  What changes for your organization
                </h3>
                <ul className="flex flex-col gap-4">
                  {sol.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="size-4.5 text-[#ff9800] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modules Associated */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Core modules powering this solution
                </span>
                <div className="flex flex-wrap gap-2">
                  {sol.modules.map((mod) => (
                    <span
                      key={mod}
                      className="rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-600 font-semibold"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* Dynamic CTA */}
      <CtaSection
        eyebrow="Onboard in weeks"
        title={`Ready to streamline ${sol.slug.replace(/-/g, " ")}?`}
        description="Our sales operations specialists will walk your branch managers and dispatch teams through a live demo using your actual routes and customer accounts."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}
