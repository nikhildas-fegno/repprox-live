import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> | { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await db.blog.findUnique({ where: { slug } }).catch(() => null);
  if (!blog) return { title: "Not Found" };

  return {
    title: `${blog.title} | RepPro X`,
    description: blog.excerpt || `Read the full article on ${blog.title}`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "",
      type: "article",
      publishedTime: blog.publishedAt?.toISOString() || blog.createdAt.toISOString(),
      authors: [blog.author],
      images: blog.imageUrl ? [blog.imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const { slug } = await params;
  const blog = await db.blog.findUnique({
    where: { slug },
    include: { category: true, blogTags: { include: { tag: true } } },
  }).catch(() => null);

  if (!blog || blog.status !== "PUBLISHED") {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <Link href="/resources/blogs" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-ink transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Blog
            </Link>

            {blog.category && (
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono uppercase tracking-wider font-semibold">
                {blog.category.name}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink tracking-tight mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center flex-wrap gap-6 text-sm text-ink-soft mb-12 py-6 border-y border-slate-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" /> {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </Reveal>

        {blog.imageUrl && (
          <Reveal delay={0.1}>
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden mb-16 bg-slate-100 border border-slate-200 shadow-sm">
              <Image src={blog.imageUrl} alt={blog.imageAlt || blog.title} fill className="object-cover" priority />
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent-ink prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.blogTags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-ink mr-2 py-1">Tags:</span>
              {blog.blogTags.map(bt => (
                <span key={bt.tag.id} className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200">
                  {bt.tag.name}
                </span>
              ))}
            </div>
          )}
        </Reveal>

      </div>
    </article>
  );
}
