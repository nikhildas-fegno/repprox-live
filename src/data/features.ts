import {
  Brain,
  TrendingUp,
  Monitor,
  BarChart3,
  Database,
} from "lucide-react";
import type { FeatureModule } from "@/types/content";

export const featureModules: FeatureModule[] = [
  {
    index: "01",
    icon: Brain,
    title: "AI Smart Ordering",
    description:
      "Predict customer demand, recommend optimal replenishment orders, identify cross-selling and upselling opportunities, and increase average order value dynamically.",
    points: [
      "Replenishment recommendations based on historical buying patterns",
      "Dynamic cross-selling suggestions based on segment purchasing behaviors",
      "Predictive out-of-stock and inventory depletion alerts",
    ],
    href: "/features#ai-ordering",
  },
  {
    index: "02",
    icon: TrendingUp,
    title: "KPI & Performance Management",
    description:
      "Empower your field teams by tracking daily targets, outstanding collections, customer visit coverage, and sales achievements in real time.",
    points: [
      "Individual and team dashboard visibility on mobile",
      "Daily and monthly target vs. achievement progress indicators",
      "Collection targets matched to outstanding invoices",
    ],
    href: "/features#kpi-management",
  },
  {
    index: "03",
    icon: Monitor,
    title: "Web Management Portal",
    description:
      "Manage all aspects of field operations: design routes, define sales territories, build surveys, configure promotions, and control user privileges from a single hub.",
    points: [
      "Visual territory mapping and route assignments",
      "Flexible promotion builders (BOGO, volume discounts, tiered pricing)",
      "Dynamic checklist and customer survey creator",
    ],
    href: "/features#web-portal",
  },
  {
    index: "04",
    icon: BarChart3,
    title: "Executive Reporting & Analytics",
    description:
      "Access real-time executive dashboards, profitability reports, field productivity analytics, and advanced business intelligence to drive operational decisions.",
    points: [
      "Real-time visibility into sales pipelines and cash collections",
      "Route compliance and team visit duration analysis",
      "Profitability reports drillable by product, route, and customer",
    ],
    href: "/features#analytics",
  },
  {
    index: "05",
    icon: Database,
    title: "Seamless ERP Integration",
    description:
      "Connect RepProX with SAP Business One, Oracle NetSuite, Microsoft Dynamics, and other ERP platforms for automatic, bidirectional data synchronization.",
    points: [
      "Real-time master data sync (customers, products, price lists)",
      "Instant order and collection posting to general ledgers",
      "Automated stock level updates preventing inventory desynchronization",
    ],
    href: "/features#erp-integration",
  },
];
