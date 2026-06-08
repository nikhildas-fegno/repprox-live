import type { Solution } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "sales-force-automation",
    audience: "Field Sales Reps & Operations Managers",
    title: "Automate quotations, orders, invoices, and collections",
    summary:
      "Empower your field teams to close sales, capture digital signatures, issue digital invoices, and record collections directly from their mobile app — fully integrated with your back-office ERP.",
    before:
      "Sales reps write orders on paper carbon pads, call the warehouse to check stock, and collect checks that sit in vehicles for days before registration.",
    after:
      "Instant order entry with live stock checks, digital invoice generation on site, and automated payment recording with real-time sync.",
    outcomes: [
      "100% paperless order capture and instant invoicing from the field",
      "Real-time visibility into outstanding collections and customer credit limits",
      "Immediate stock allocation ensuring zero order-fulfillment errors",
    ],
    modules: ["Sales Operations", "Field Execution", "Management & Insights"],
  },
  {
    slug: "distribution-van-sales",
    audience: "Van Sales Drivers & Warehouse Controllers",
    title: "End-to-end van inventory and mobile distribution control",
    summary:
      "Track mobile warehouse stock, manage loading, handle stock transfers, and enable direct store delivery (DSD) and sales from delivery vans with complete reconciliation.",
    before:
      "Delivery drivers load vans without system records, handle cash transactions, and return with damaged items that take days to reconcile.",
    after:
      "Van stock tracked as mobile warehouses, automated invoice generation on delivery, and instant end-of-day vehicle inventory reconciliation.",
    outcomes: [
      "Real-time tracking of inventory across all mobile distribution vehicles",
      "Van-to-van and warehouse-to-van stock transfer management on the go",
      "Automated returns processing and loading sheet reconciliation",
    ],
    modules: ["Distribution Management", "Sales Operations", "Field Execution"],
  },
  {
    slug: "route-planning-gps",
    audience: "Distribution Managers & Route Planners",
    title: "Optimize route execution and monitor field compliance",
    summary:
      "Leverage GPS-enabled routing to verify customer visits, structure daily routes, and reduce transit time for improved customer coverage and lower fuel costs.",
    before:
      "Drivers follow random paths, skip scheduled visits due to traffic, and route compliance is impossible for management to verify.",
    after:
      "GPS-verified customer visits, optimized route sequences, and real-time alerts for route delays or compliance deviations.",
    outcomes: [
      "Up to 40% improvement in daily route compliance and customer coverage",
      "GPS check-in/check-out verification at each customer location",
      "Dynamic route planning with turn-by-turn navigation guidance",
    ],
    modules: ["Field Execution", "Distribution Management", "Management & Insights"],
  },
  {
    slug: "task-survey-management",
    audience: "Trade Merchandisers & Compliance Inspectors",
    title: "Standardize audits, field surveys, and tasks",
    summary:
      "Assign field audits, capture photo evidence, execute compliance surveys, and track retail execution standards during site visits.",
    before:
      "Merchandisers send photos via WhatsApp, compile survey results in Excel, and display shelf share reports weeks too late.",
    after:
      "Structured mobile checklists, geofenced photo attachments, and real-time marketing intelligence dashboards.",
    outcomes: [
      "Geofenced photo and survey submissions with immediate portal upload",
      "Standardized merchandising checklists and retail audits at the shelf",
      "Instant visibility into competitor pricing and display execution",
    ],
    modules: ["Field Execution", "Management & Insights"],
  },
  {
    slug: "promotions-pricing",
    audience: "Commercial Managers & Sales Heads",
    title: "Drive revenue with intelligent pricing and promotions",
    summary:
      "Configure customer-specific pricing tiers, volume discounts, buy-one-get-one promotions, and credit limits enforced at the point of sale.",
    before:
      "Sales reps apply incorrect discounts, calculate promotions by hand, and take orders for customers over their credit limit.",
    after:
      "Automated pricing calculation, promotional schemes applied instantly, and credit limit blocks enforced on mobile.",
    outcomes: [
      "Customer-specific contract pricing and tiered discounts enforced",
      "Automated promo code application and product bundles applied at checkout",
      "Real-time credit check and payment history enforcement",
    ],
    modules: ["Sales Operations", "Management & Insights"],
  },
];
