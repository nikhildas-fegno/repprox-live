import type { Solution } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "sales-force-automation",
    audience: "Field Sales Reps & Operations Managers",
    title: "Sales Force Automation",
    summary:
      "Digitize the complete sales process from customer visits and quotations to orders, invoicing, and collections. Empower sales representatives with real-time access to customer and sales data.",
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
    title: "Distribution & Van Sales",
    summary:
      "Manage inventory movement, warehouse synchronization, stock transfers, and van sales operations from a single platform. Ensure accurate stock visibility across field and warehouse operations.",
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
    title: "Route Planning & GPS Tracking",
    summary:
      "Optimize daily routes, monitor field activities, and verify customer visits through GPS-enabled tracking. Improve productivity, accountability, and customer coverage.",
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
    title: "Task & Survey Management",
    summary:
      "Assign tasks, conduct surveys, perform audits, and track field execution in real time. Ensure operational activities are completed consistently across teams.",
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
    title: "Promotions & Pricing",
    summary:
      "Create flexible pricing strategies, promotional campaigns, and customer-specific offers to drive revenue growth. Improve sales performance with smarter pricing and discount management.",
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
