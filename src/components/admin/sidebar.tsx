"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Tag,
  FolderOpen,
  Briefcase,
  HelpCircle,
  Star,
  Building2,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/categories", label: "Categories", icon: FolderOpen },
  { href: "/admin/tags", label: "Tags", icon: Tag },
  { href: "/admin/case-studies", label: "Case Studies", icon: Briefcase },
  { href: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { href: "/admin/testimonials", label: "Testimonials", icon: Star },
  { href: "/admin/client-logos", label: "Client Logos", icon: Building2 },
  { href: "/admin/demo-bookings", label: "Demo Bookings", icon: CalendarDays },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-60 bg-gradient-to-b from-[#2081ED] via-[#1c75db] to-[#165eb3] border-r border-white/10 flex flex-col z-30 shadow-xl shadow-[#2081ED]/10">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 h-16 border-b border-white/10">
        <div className="relative w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
          <Image src="/logo.png" alt="RepProX Logo" fill className="object-contain" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white leading-none">Repprox</p>
          <p className="text-[10px] text-white/70 mt-0.5">Admin CMS</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
        {nav.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                active
                  ? "bg-white/20 text-white shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <Icon className={cn("w-4 h-4 shrink-0", active ? "text-white" : "text-white/70 group-hover:text-white")} />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight className="w-3 h-3 text-white/60" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-4 border-t border-white/10 pt-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View site
        </Link>
      </div>
    </aside>
  );
}
