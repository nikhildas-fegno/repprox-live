import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import FeaturesClient from "./features-client";

export const metadata: Metadata = buildMetadata({
  title: "Features - RepProX",
  description:
    "Everything Your Sales Team Needs. In One Platform. RepProX combines AI ordering, KPI tracking, reporting, analytics, ERP integration, and management tools.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Features", path: "/features" }]} />
      <FeaturesClient />
    </>
  );
}
