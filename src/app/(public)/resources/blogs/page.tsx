import { db } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";
import Container from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog & Articles | RepProX",
  description: "Read the latest insights, strategies, and news about field automation from the RepProX team.",
};

export default async function BlogsPage() {
  const blogs = await db.blog.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    include: { category: true },
  }).catch(() => []);

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const regularBlogs = blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none bg-linear-to-b from-accent-soft/50 to-transparent" />

      <Container className="relative z-10 space-y-20">
        
        {/* Header */}
        <Reveal>
          <div className="border-b border-ink/10 pb-12 flex flex-col items-center text-center">
            <Badge 
              variant="accent"
              className="mb-6 border-accent-ink/20 bg-accent-soft text-accent-ink font-mono text-[11px] py-1 px-3.5 tracking-wider"
            >
              <Sparkles className="size-3.5 text-accent-ink mr-1.5 inline-block" />
              Insights & Updates
            </Badge>
            <h1 className="text-5xl lg:text-[clamp(3rem,5vw,4.5rem)] font-display font-bold text-ink tracking-tight mb-6 leading-[1.08] text-balance">
              The RepPro
              <span className="bg-linear-to-r from-[#1d4ed8] to-[#0ea5ff] bg-clip-text text-transparent block sm:inline">
                {" "}Journal
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed text-balance">
              Expert insights, automation strategies, and product updates designed to help you scale your field operations.
            </p>
          </div>
        </Reveal>

        {/* Featured Post (Minimalist) */}
        {featuredBlog && (
          <Reveal delay={0.1}>
            <Link href={`/resources/blogs/${featuredBlog.slug}`} className="group block rounded-3xl p-4 sm:p-6 lg:p-8 border border-ink/5 bg-paper hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-ink/5">
                  {featuredBlog.imageUrl ? (
                    <Image src={featuredBlog.imageUrl} alt={featuredBlog.imageAlt || featuredBlog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" priority />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-ink-soft/30" />
                    </div>
                  )}
                  {/* Subtle overlay on image to make it look premium */}
                  <div className="absolute inset-0 bg-linear-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-mono uppercase tracking-widest text-accent-ink font-bold bg-accent-soft px-2.5 py-1 rounded-md">Featured Article</span>
                    <span className="text-ink-soft/30">•</span>
                    <span className="text-sm font-medium text-ink-soft">{new Date(featuredBlog.publishedAt || featuredBlog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-ink mb-6 group-hover:text-accent-ink transition-colors leading-tight">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-lg text-ink-soft line-clamp-3 mb-8 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="inline-flex items-center text-sm font-bold text-accent-ink uppercase tracking-wide group-hover:text-[#0ea5ff] transition-colors">
                    Read Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Regular Posts Grid */}
        {regularBlogs.length > 0 && (
          <div className="pt-12 border-t border-ink/10">
            <h3 className="text-3xl font-display font-bold text-ink mb-10">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {regularBlogs.map((blog, i) => (
                <Reveal key={blog.id} delay={i * 0.05}>
                  <Link href={`/resources/blogs/${blog.slug}`} className="group flex flex-col h-full rounded-2xl overflow-hidden border border-ink/5 bg-paper hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
                    <div className="aspect-[4/3] relative bg-ink/5 overflow-hidden">
                      {blog.imageUrl ? (
                        <Image src={blog.imageUrl} alt={blog.imageAlt || blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-ink-soft/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex flex-col flex-1 p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        {blog.category && <span className="text-xs font-mono uppercase tracking-wider text-accent-ink font-bold bg-accent-soft px-2.5 py-1 rounded-md">{blog.category.name}</span>}
                        <span className="text-sm font-medium text-ink-soft">{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}</span>
                      </div>
                      <h4 className="text-xl lg:text-2xl font-display font-bold text-ink mb-3 group-hover:text-accent-ink transition-colors leading-snug">
                        {blog.title}
                      </h4>
                      <p className="text-base text-ink-soft line-clamp-2 leading-relaxed mb-6 flex-1">
                        {blog.excerpt}
                      </p>
                      <div className="inline-flex items-center text-sm font-bold text-accent-ink uppercase tracking-wide group-hover:text-[#0ea5ff] transition-colors mt-auto">
                        Read Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {blogs.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-xl text-ink-soft font-medium">No articles published yet. Check back soon!</p>
          </div>
        )}

      </Container>
    </div>
  );
}
