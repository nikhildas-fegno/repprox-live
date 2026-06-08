import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { footerNav } from "@/data/nav";
import { SITE_NAME } from "@/lib/seo";
import Container from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper text-ink">
      <div className="bp-grid opacity-10 pointer-events-none absolute inset-x-0 h-40 bg-gradient-to-b from-[#0ea5ff]/5 to-transparent" />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5 self-start">
              <span className="flex size-9 items-center justify-center rounded-sm border border-ink/20 bg-ink text-paper">
                <span className="font-mono text-sm font-semibold">X</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight">{SITE_NAME}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
              AI-powered field force automation and distribution management platform built to optimize route execution, mobile ordering, and collections.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.12em] text-accent-ink transition-colors hover:text-accent"
            >
              Talk to our team
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.label} className="flex flex-col gap-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  {group.label}
                </span>
                <ul className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[14px] text-ink-soft transition-colors hover:text-accent-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
            Built for modern distribution businesses.
          </p>
        </div>
      </Container>
    </footer>
  );
}
