import { db } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";
import Container from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories | RepPro X",
  description: "Discover how leading companies use RepPro X to automate their field operations.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await db.caseStudy.findMany({
    orderBy: { createdAt: "desc" },
  }).catch(() => []);

  const featuredStudy = caseStudies.length > 0 ? caseStudies[0] : null;
  const regularStudies = caseStudies.length > 1 ? caseStudies.slice(1) : [];

  return (
    <div className="bg-paper min-h-screen pt-32 pb-24">
      <Container className="space-y-24">

        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center pt-8">
            <span className="text-accent-ink font-mono text-sm tracking-widest uppercase font-bold mb-6 block">
              Success Stories
            </span>
            <h1 className="text-5xl lg:text-[clamp(3rem,5vw,4.5rem)] font-display font-extrabold text-ink tracking-tight mb-6 leading-[1.08] text-balance">
              Customer Success Stories
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed text-balance">
              Explore how organizations are transforming their field operations and driving revenue growth with RepPro X.
            </p>
          </div>
        </Reveal>

        {/* Featured Case Study */}
        {featuredStudy && (
          <Reveal delay={0.1}>
            <Link href={`/resources/case-studies/${featuredStudy.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:h-[500px] w-full rounded-2xl overflow-hidden bg-ink/5">
                  {featuredStudy.imageUrl ? (
                    <Image src={featuredStudy.imageUrl} alt={featuredStudy.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" priority />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Briefcase className="w-12 h-12 text-ink-soft/30" />
                    </div>
                  )}
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-mono uppercase tracking-widest text-ink font-bold bg-ink/5 px-2.5 py-1 rounded-md">
                      {featuredStudy.industry}
                    </span>
                    <span className="text-ink-soft/30">•</span>
                    <span className="text-sm font-medium text-ink-soft">{featuredStudy.clientName}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-ink mb-6 group-hover:text-accent-ink transition-colors leading-tight">
                    {featuredStudy.title}
                  </h2>
                  <div
                    className="text-lg text-ink-soft line-clamp-3 mb-8 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: featuredStudy.content }}
                  />
                  <div className="inline-flex items-center text-sm font-bold text-ink uppercase tracking-wide group-hover:text-accent-ink transition-colors">
                    Read Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Regular Case Studies Grid */}
        {regularStudies.length > 0 && (
          <div className="pt-8">
            <h3 className="text-2xl font-display font-bold text-ink mb-12 text-center lg:text-left">More Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {regularStudies.map((cs, i) => (
                <Reveal key={cs.id} delay={i * 0.05}>
                  <Link href={`/resources/case-studies/${cs.slug}`} className="group flex flex-col h-full">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-6 bg-ink/5">
                      {cs.imageUrl ? (
                        <Image src={cs.imageUrl} alt={cs.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Briefcase className="w-10 h-10 text-ink-soft/30" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono uppercase tracking-widest text-ink font-bold bg-ink/5 px-2 py-0.5 rounded-md">{cs.industry}</span>
                        <span className="text-ink-soft/30">•</span>
                        <span className="text-sm font-medium text-ink-soft">{cs.clientName}</span>
                      </div>
                      <h4 className="text-2xl font-display font-bold text-ink mb-3 group-hover:text-accent-ink transition-colors leading-snug">
                        {cs.title}
                      </h4>
                      <div
                        className="text-base text-ink-soft line-clamp-2 leading-relaxed mb-6 flex-1"
                        dangerouslySetInnerHTML={{ __html: cs.content }}
                      />
                      <div className="inline-flex items-center text-sm font-bold text-ink uppercase tracking-wide group-hover:text-accent-ink transition-colors mt-auto">
                        Read <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {caseStudies.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-xl text-ink-soft font-medium">More case studies coming soon.</p>
          </div>
        )}

      </Container>
    </div>
  );
}
