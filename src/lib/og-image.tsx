import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/lib/seo";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/**
 * Shared renderer for the opengraph-image and twitter-image route conventions.
 * Keeping this in one place means both surfaces stay visually identical
 * without needing a static asset to keep in sync.
 */
export function renderSocialCard(eyebrow: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          backgroundColor: "#f3efe6",
          backgroundImage:
            "linear-gradient(to right, rgba(20,24,31,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,24,31,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 8,
              backgroundColor: "#14181f",
              color: "#f3efe6",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            X
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontSize: 30, fontWeight: 700, color: "#14181f" }}>{SITE_NAME}</span>
            <span
              style={{
                fontSize: 16,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#5b6472",
              }}
            >
              Operating system / ERP
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 920 }}>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#c2410c",
            }}
          >
            {eyebrow}
          </span>
          <span style={{ fontSize: 60, fontWeight: 600, color: "#14181f", lineHeight: 1.12 }}>
            Run the whole business from one connected system.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#5b6472",
          }}
        >
          <span>Finance · Inventory · Operations · Reporting</span>
          <span>repprox.com</span>
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
