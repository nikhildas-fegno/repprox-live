import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const cs = await db.caseStudy.findUnique({ where: { slug } }).catch(() => null);
  if (!cs) return { title: "Not Found" };

  return {
    title: `${cs.clientName} Case Study | RepProX`,
    description: `Learn how ${cs.clientName} solved their field automation challenges using RepProX.`,
    openGraph: {
      title: `${cs.clientName} Success Story`,
      description: `Learn how ${cs.clientName} solved their field automation challenges using RepProX.`,
      images: cs.imageUrl ? [cs.imageUrl] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const { slug } = await params;
  const cs = await db.caseStudy.findUnique({ where: { slug } }).catch(() => null);

  if (!cs) notFound();

  return (
    <article className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <Link href="/resources/case-studies" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-ink transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Case Studies
            </Link>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono uppercase tracking-wider font-semibold">
                <Building className="w-3.5 h-3.5 mr-1.5" /> {cs.clientName}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
                {cs.industry}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink tracking-tight mb-12 leading-tight">
            {cs.title}
          </h1>
        </Reveal>

        {cs.imageUrl && (
          <Reveal delay={0.1}>
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 bg-slate-900 border border-slate-200 shadow-sm">
              <Image src={cs.imageUrl} alt={cs.title} fill className="object-cover opacity-80" priority />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div
            className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-slate-600 prose-a:text-[#2081ED] prose-strong:text-slate-800 prose-li:text-slate-600"
            dangerouslySetInnerHTML={{ __html: cs.content }}
          />
        </Reveal>

      </div>
    </article>
  );
}
