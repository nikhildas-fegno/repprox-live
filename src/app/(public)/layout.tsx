import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { CursorDot } from "@/components/cursor-dot";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <OrganizationJsonLd />
      <CursorDot />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
