"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function ScrollReset() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;
    // Stop kills active velocity, scrollTo(0) resets position, start re-enables
    lenis.stop();
    window.scrollTo(0, 0);
    lenis.start();
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        prevent: (node: Element) =>
          node.scrollHeight > node.clientHeight &&
          getComputedStyle(node).overflowY !== "visible" &&
          getComputedStyle(node).overflowY !== "hidden",
      }}
    >
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
