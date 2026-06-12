import { db } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories | RepPro X",
  description: "Discover how leading companies use RepPro X to automate their field operations.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await db.caseStudy.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 pt-32 pb-24 selection:bg-[#2081ED] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white tracking-tight mb-6">
              Customer <br/><span className="text-[#2081ED]">Success Stories</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Explore how organizations are transforming their field operations, slashing costs, and driving massive revenue growth with RepPro X.
            </p>
          </div>
        </Reveal>

        {/* Stacked Cards */}
        <div className="space-y-16 lg:space-y-32">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.1}>
              <Link href={`/resources/case-studies/${cs.slug}`} className="group relative block w-full rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-800 transition-colors hover:border-slate-700">
                
                <div className="absolute inset-0 z-0">
                  {cs.imageUrl && <Image src={cs.imageUrl} alt={cs.title} fill className="object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-1000 ease-in-out" />}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                </div>

                <div className="relative z-10 p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  
                  {/* Left: Client & Challenge */}
                  <div>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-mono uppercase tracking-wider font-bold mb-8">
                      {cs.industry}
                    </div>
                    <div className="text-2xl font-medium text-slate-300 mb-2">{cs.clientName}</div>
                    <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight group-hover:text-[#2081ED] transition-colors duration-300">
                      {cs.title}
                    </h2>
                    
                    <div className="hidden lg:block">
                      <div
                        className="text-slate-300 leading-relaxed text-lg line-clamp-4 prose-invert"
                        dangerouslySetInnerHTML={{ __html: cs.content }}
                      />
                    </div>
                  </div>

                  {/* Right: CTA panel */}
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl flex flex-col justify-between">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#2081ED] mb-4">Case Study</div>
                    <p className="text-slate-300 text-lg mb-10">{cs.clientName} · {cs.industry}</p>
                    
                    <div className="inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-[#2081ED] hover:text-white transition-all duration-300">
                      Read Full Case Study <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>

                </div>
              </Link>
            </Reveal>
          ))}

          {caseStudies.length === 0 && (
            <div className="py-32 text-center border border-slate-800 rounded-3xl bg-slate-900/50">
              <p className="text-2xl text-slate-500 font-medium">More case studies coming soon.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
