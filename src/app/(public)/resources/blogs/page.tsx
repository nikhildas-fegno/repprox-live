import { db } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Articles | RepPro X",
  description: "Read the latest insights, strategies, and news about field automation from the RepPro X team.",
};

export default async function BlogsPage() {
  const blogs = await db.blog.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const regularBlogs = blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <Reveal>
          <div className="border-b border-slate-200 pb-8">
            <h1 className="text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight mb-4">
              The RepPro Journal
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              Expert insights, automation strategies, and product updates designed to help you scale your field operations.
            </p>
          </div>
        </Reveal>

        {/* Featured Post (Minimalist) */}
        {featuredBlog && (
          <Reveal delay={0.1}>
            <Link href={`/resources/blogs/${featuredBlog.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-7 relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100">
                  {featuredBlog.imageUrl ? (
                    <Image src={featuredBlog.imageUrl} alt={featuredBlog.imageAlt || featuredBlog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" priority />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-slate-300" />
                    </div>
                  )}
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#2081ED] font-bold">Featured Article</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-sm font-medium text-slate-500">{new Date(featuredBlog.publishedAt || featuredBlog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h2 className="text-4xl font-display font-bold text-slate-900 mb-6 group-hover:text-[#2081ED] transition-colors leading-tight">
                    {featuredBlog.title}
                  </h2>
                  <p className="text-lg text-slate-600 line-clamp-3 mb-8 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="inline-flex items-center text-sm font-bold text-[#2081ED] uppercase tracking-wide">
                    Read Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Regular Posts Grid */}
        {regularBlogs.length > 0 && (
          <div className="pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-10">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {regularBlogs.map((blog, i) => (
                <Reveal key={blog.id} delay={i * 0.05}>
                  <Link href={`/resources/blogs/${blog.slug}`} className="group block">
                    <div className="aspect-[4/3] relative rounded-xl bg-slate-100 overflow-hidden mb-6">
                      {blog.imageUrl ? (
                        <Image src={blog.imageUrl} alt={blog.imageAlt || blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-slate-300" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        {blog.category && <span className="text-xs font-mono uppercase tracking-wider text-[#2081ED] font-bold">{blog.category.name}</span>}
                        <span className="text-sm font-medium text-slate-500">{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}</span>
                      </div>
                      <h4 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#2081ED] transition-colors leading-snug">
                        {blog.title}
                      </h4>
                      <p className="text-base text-slate-600 line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {blogs.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-xl text-slate-500 font-medium">No articles published yet. Check back soon!</p>
          </div>
        )}

      </div>
    </div>
  );
}
