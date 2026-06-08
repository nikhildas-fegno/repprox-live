import type { Industry } from "@/types/content";

export const industries: Industry[] = [
  {
    slug: "fmcg",
    name: "FMCG Distribution",
    summary:
      "High-volume, fast-moving consumer goods require instantaneous order execution, promotion enforcement, and route coverage to outpace competition.",
    stats: [
      { label: "Order processing speed", value: "+50%" },
      { label: "Daily route compliance", value: "98%" },
    ],
    useCases: [
      "Challenge: Complex promotional schemes -> Help: RepProX calculates BOGOs and tiered discounts instantly at checkout.",
      "Challenge: Stale shelf monitoring -> Help: Mobile survey tools capture competitor pricing, shelf share, and stockouts.",
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage Distribution",
    summary:
      "Manage temperature-controlled logistics, batch expirations, product returns, and direct store delivery (DSD) with precision.",
    stats: [
      { label: "Reduction in food waste", value: "-35%" },
      { label: "Stock delivery accuracy", value: "99.9%" },
    ],
    useCases: [
      "Challenge: Product expiry write-offs -> Help: Intelligent batch selection enforces strict FEFO/FIFO expiry rules.",
      "Challenge: Van stock discrepancy -> Help: Real-time inventory tracking monitors stock as a mobile warehouse in transit.",
    ],
  },
  {
    slug: "pharma",
    name: "Pharmaceutical Distribution",
    summary:
      "Highly regulated pharmaceutical supply chains require absolute compliance, batch traceability, and strict credit collection controls.",
    stats: [
      { label: "Traceability compliance", value: "100%" },
      { label: "Credit rule violations", value: "0%" },
    ],
    useCases: [
      "Challenge: Drug batch traceability -> Help: Dynamic lot tracking records distribution paths from warehouse to clinic.",
      "Challenge: Credit collection leakages -> Help: Automated credit blocks prevent reps from ordering for overdue customer accounts.",
    ],
  },
  {
    slug: "building-materials",
    name: "Building Materials",
    summary:
      "Manage heavy freight logistics, bulk order configurations, customer discount pricing tiers, and returns logistics in the field.",
    stats: [
      { label: "Average order value", value: "+25%" },
      { label: "On-time heavy shipping", value: "94%" },
    ],
    useCases: [
      "Challenge: Variable contractor pricing -> Help: Enforce multi-tier contract rates and customer-specific price books.",
      "Challenge: Heavy return logistics -> Help: Field collection logging captures returns, damages, and credits in real time.",
    ],
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods",
    summary:
      "Coordinate wholesale delivery, execute display merchandising audits, and scale sales reps across multi-tier retail channels.",
    stats: [
      { label: "Field sales productivity", value: "+30%" },
      { label: "Retail stock-out rate", value: "-40%" },
    ],
    useCases: [
      "Challenge: Rep accountability -> Help: GPS check-in logs exact location coordinates, visit durations, and active times.",
      "Challenge: Slow restock cycles -> Help: AI Smart Ordering recommends orders based on local demand and shelf-life.",
    ],
  },
  {
    slug: "wholesale",
    name: "Wholesale Distribution",
    summary:
      "Automate bulk orders, regional warehouse stock transfers, and cash/check collections from field representatives.",
    stats: [
      { label: "Collections cycle reduction", value: "-15 days" },
      { label: "Reconciliation time", value: "Instant" },
    ],
    useCases: [
      "Challenge: Field cash collections -> Help: Field collection logging captures check photos and cash receipts with instant uploads.",
      "Challenge: Regional stock transfers -> Help: Delineate stock transfers and load sheets between parent and regional branches.",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Delivery Operations",
    summary:
      "Coordinate transport fleets, optimize regional delivery routes, and log real-time proof-of-delivery in the field.",
    stats: [
      { label: "Delivery delays reduction", value: "-45%" },
      { label: "Transit mileage savings", value: "20%" },
    ],
    useCases: [
      "Challenge: Driver route optimization -> Help: Automated sequence routing optimizes paths based on travel times.",
      "Challenge: Delivery disputes -> Help: Capture digital signatures and geo-tagged photos for irrefutable Proof of Delivery.",
    ],
  },
  {
    slug: "multi-branch",
    name: "Multi-Branch Distribution Groups",
    summary:
      "Consolidate operations across multiple regions, handle multi-currency logistics, and track performance indicators globally.",
    stats: [
      { label: "Branch visibility", value: "100%" },
      { label: "Group close cycle", value: "-5 days" },
    ],
    useCases: [
      "Challenge: Fragmented regional data -> Help: Web Management Portal aggregates route and collection KPIs by branch.",
      "Challenge: Multi-currency credit limit -> Help: Enforce central commercial credit limits across all regional branches.",
    ],
  },
];
