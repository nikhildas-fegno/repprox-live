import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { footerNav } from "@/data/nav";
import { SITE_NAME } from "@/lib/seo";
import Container from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="relative bg-[#0b1120] text-slate-300 overflow-hidden border-t border-slate-800">
      {/* Subtle glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1d4ed8]/50 to-transparent opacity-50" />

      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#1d4ed8]/5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10 py-16">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_2.5fr]">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 self-start group">
              <div className="relative flex items-center justify-center bg-white p-1.5 rounded-lg">
                <img
                  src="/logo.png"
                  alt="RepProX Logo"
                  className="size-8 object-contain"
                />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                {SITE_NAME}
              </span>
            </Link>

            <p className="max-w-sm text-sm lg:text-base leading-relaxed text-slate-400 font-medium">
              AI-powered field force automation and distribution management platform built to optimize route execution, mobile ordering, and collections.
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.label} className="flex flex-col gap-6">
                <span className="font-mono text-xs lg:text-[14px] font-bold uppercase tracking-[0.2em] text-white">
                  {group.label}
                </span>
                <ul className="flex flex-col gap-4">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm md:text-sm text-slate-400 transition-colors hover:text-white inline-flex items-center group"
                      >
                        {item.label}
                        {item.href.startsWith('http') && (
                          <ArrowUpRight className="ml-1 size-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col gap-6 border-t border-slate-800 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
