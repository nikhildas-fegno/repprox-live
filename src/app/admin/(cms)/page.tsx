import { db } from "@/lib/db";
import { FileText, FolderOpen, Tag, Briefcase, HelpCircle, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

async function getCounts() {
  const [blogs, categories, tags, caseStudies, faqs, testimonials] = await Promise.all([
    db.blog.count(),
    db.category.count(),
    db.tag.count(),
    db.caseStudy.count(),
    db.faq.count(),
    db.testimonial.count(),
  ]);
  return { blogs, categories, tags, caseStudies, faqs, testimonials };
}

async function getRecentBlogs() {
  return db.blog.findMany({ orderBy: { createdAt: "desc" }, take: 5, include: { category: true } });
}

const stats = [
  { label: "Blogs", key: "blogs" as const, icon: FileText, href: "/admin/blogs" },
  { label: "Categories", key: "categories" as const, icon: FolderOpen, href: "/admin/categories" },
  { label: "Tags", key: "tags" as const, icon: Tag, href: "/admin/tags" },
  { label: "Case Studies", key: "caseStudies" as const, icon: Briefcase, href: "/admin/case-studies" },
  { label: "FAQs", key: "faqs" as const, icon: HelpCircle, href: "/admin/faqs" },
  { label: "Testimonials", key: "testimonials" as const, icon: Star, href: "/admin/testimonials" },
];

export default async function DashboardPage() {
  const [counts, recentBlogs] = await Promise.all([getCounts(), getRecentBlogs()]);

  return (
    <div className="w-full space-y-12">
      <Reveal className="relative p-8 rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-md bp-corners shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bp-grid pointer-events-none" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-semibold text-[#2081ED] tracking-tight">System Dashboard</h1>
            <p className="text-sm text-ink-soft mt-1">Welcome back. Here's a live overview of your content infrastructure.</p>
          </div>
          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#2081ED] shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2081ED] animate-pulse shadow-[0_0_8px_#2081ED]" />
          </div>
        </div>
      </Reveal>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {stats.map(({ label, key, icon: Icon, href }, i) => (
          <Reveal key={key} delay={0.05 * i}>
            <Link
              href={href}
              className="block bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 p-5 bp-corners group hover:border-[#2081ED] hover:bg-white shadow-sm transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2081ED] to-blue-300 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-blue-50/50 text-[#2081ED]/70 group-hover:bg-blue-50 group-hover:text-[#2081ED] transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-3xl font-display font-bold text-ink mb-1">{counts[key]}</p>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-soft group-hover:text-[#2081ED] transition-colors">{label}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Recent Blogs */}
      <Reveal delay={0.3}>
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 overflow-hidden bp-corners shadow-sm hover:shadow-md transition-shadow duration-500">
          <div className="px-6 py-5 border-b border-blue-50/50 flex items-center justify-between bg-white/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#2081ED]" />
              <h2 className="text-sm font-mono uppercase tracking-wider font-semibold text-[#2081ED]">Recent Broadcasts</h2>
            </div>
            <Link href="/admin/blogs" className="text-xs font-medium text-[#2081ED] hover:text-blue-700 flex items-center gap-1 group">
              View all log entries
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="divide-y divide-slate-100">
            {recentBlogs.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-sm font-mono text-ink-soft">No entries located in the database.</p>
              </div>
            )}
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="px-6 py-4 flex items-center justify-between gap-4 group hover:bg-slate-50/50 transition-colors">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink group-hover:text-accent-ink transition-colors truncate">{blog.title}</p>
                  <p className="text-xs text-ink-soft mt-1 font-mono">
                    {blog.author} <span className="opacity-50 mx-1">/</span> {blog.category?.name ?? "Uncategorized"}
                  </p>
                </div>
                <span className={`shrink-0 inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest font-semibold ${
                  blog.status === "PUBLISHED"
                    ? "bg-blue-50 text-[#2081ED] ring-1 ring-[#2081ED]/20"
                    : "bg-slate-50 text-slate-500 ring-1 ring-slate-200"
                }`}>
                  {blog.status === "PUBLISHED" ? "Live" : "Draft"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
