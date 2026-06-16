import type { FaqItem, PricingPlan, Testimonial, ValueProp } from "@/types/content";
import avatar1 from "@/public/home/testimonials/testimonial1.png";
import avatar2 from "@/public/home/testimonials/testimonial2.png";
import avatar3 from "@/public/home/testimonials/testimonial3.png";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "Ideal for small businesses beginning their digital transformation journey.",
    price: "$29",
    monthlyPrice: "$35",
    annualPrice: "$29",
    cadence: "per user / month",
    description:
      "Ideal for organizations looking to digitize field sales and customer visit activities while maintaining complete visibility over sales execution.",
    features: [
      "Customer Management",
      "Product & Price Management",
      "Sales Quotations",
      "Sales Orders",
      "Sales Returns",
      "Customer Visit Tracking",
      "Collection Management",
      "GPS Tracking",
      "Mobile Reporting",
      "Mobile App (Android & iOS)",
      "Warehouse Inventory Visibility",
      "ERP Synchronization",
      "Standard Dashboards & Reports",
    ],
    href: "/contact",
    ctaLabel: "Talk to Sales",
  },
  {
    name: "Growth",
    tagline: "For growing distributors requiring advanced inventory, route, and performance management.",
    price: "$42",
    monthlyPrice: "$49",
    annualPrice: "$42",
    cadence: "per user / month",
    description:
      "Designed for growing distributors and service organizations requiring advanced distribution management, route optimization, inventory visibility, and operational control.",
    features: [
      "Everything in Starter, plus:",
      "Route Planning & Territory Management",
      "Route Compliance Monitoring",
      "Missed Customer Analysis",
      "Inventory Counting, Stock Requests & Transfers",
      "Batch Tracking & Expiry Management",
      "Smart Replenishment",
      "Promotions & Bundle Pricing",
      "Surveys & Incident Management",
      "Task Management",
      "KPI & Target Management",
      "Field Service Management & Work Orders",
      "Advanced Analytics",
    ],
    href: "/contact",
    highlighted: true,
    ctaLabel: "Talk to Sales",
  },
  {
    name: "Enterprise",
    tagline: "For large distribution groups requiring governance, advanced automation, and executive-level analytics.",
    price: "Custom",
    cadence: "Annual contracts only",
    description:
      "Built for large-scale operations requiring enterprise governance, advanced workflows, executive dashboards, and AI-powered insights.",
    features: [
      "Everything in Growth, plus:",
      "Executive Dashboards & Enterprise Reporting",
      "Customer & Product Profitability Analysis",
      "Multi-Level Approvals & Advanced Workflow Automation",
      "API Access",
      "AI Smart Ordering & Demand Forecasting",
      "Purchase Intelligence Analytics",
      "Enterprise Security Controls",
      "Dedicated Account Manager",
      "Priority SLA Support",
    ],
    href: "/contact",
    ctaLabel: "Talk to Sales",
  },
  {
    name: "Web User",
    tagline: "For managers, supervisors, and executives requiring operational visibility without mobile execution.",
    price: "$8",
    monthlyPrice: "$10",
    annualPrice: "$8",
    cadence: "per user / month",
    description:
      "For managers, supervisors, executives, and back-office users requiring operational visibility without mobile sales execution.",
    features: [
      "Real-Time Dashboards",
      "KPI Monitoring",
      "Business Analytics",
      "Executive Reporting",
      "User Administration",
      "Management Visibility",
      "Decision Support Tools",
    ],
    href: "/contact",
    ctaLabel: "Talk to Sales",
  },
];

export const pricingFaqs: FaqItem[] = [
  {
    question: "How is RepProX pricing calculated?",
    answer:
      "RepProX is priced on a per-user, per-month basis. The Essential plan starts from $32/user/month and the Professional plan starts from $42/user/month. Web User Licenses for managers and supervisors start from $10/user/month. Enterprise pricing is customized based on your team size and requirements.",
  },
  {
    question: "What billing cycles are available?",
    answer:
      "RepProX is available on annual billing, which offers the best value. Monthly billing options may be available upon request. All prices displayed are based on annual contracts.",
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer:
      "Yes. You can upgrade from Essential to Professional or Enterprise at any time as your business grows. Our team will assist with a smooth transition, ensuring no disruption to your field operations.",
  },
  {
    question: "Are there any setup or implementation fees?",
    answer:
      "Implementation and onboarding are included on every plan. This covers initial system configuration, ERP integration setup, data migration support, and training for your team to get up and running quickly.",
  },
  {
    question: "What support is included with each plan?",
    answer:
      "All plans include standard support. The Enterprise plan includes Priority Support with a dedicated SLA, ensuring faster response times and a named support contact for your organization.",
  },
  {
    question: "Is a free trial or product demo available?",
    answer:
      "We offer a guided product demo tailored to your industry and use case. Contact our team to schedule a walkthrough — we'll show you exactly how RepProX fits your specific distribution or field service operations.",
  },
];

export const homefaq: FaqItem[] = [
  {
    question: "What is RepProX?",
    answer:
      "RepProX is an AI-powered Field Force Automation and Distribution Management platform that helps businesses streamline sales, collections, inventory management, route planning, customer visits, and field operations from a single platform.",
  },
  {
    question: "Which industries can benefit from RepProX?",
    answer:
      "RepProX is designed for FMCG distributors, food & beverage suppliers, pharmaceutical companies, building material distributors, wholesale businesses, consumer goods companies, and logistics organizations that manage field teams and distribution operations.",
  },
  {
    question: "Does RepProX work on both Android and iOS devices?",
    answer:
      "Yes. RepProX is built using Flutter technology and is available on both Android and iOS, enabling field representatives to work seamlessly across devices.",
  },
  {
    question: "Can RepProX integrate with our existing ERP system?",
    answer:
      "Yes. RepProX supports integration with ERP platforms such as SAP Business One and other ERP systems, allowing synchronization of customers, products, inventory, pricing, transactions, and collections.",
  },
  {
    question: "How does AI Smart Ordering help my business?",
    answer:
      "AI Smart Ordering analyzes customer purchasing behavior, buying patterns, and historical transactions to recommend optimal orders, identify sales opportunities, reduce stock-outs, and improve revenue growth.",
  },
  {
    question: "Can managers monitor field teams in real time?",
    answer:
      "Absolutely. RepProX provides real-time visibility into customer visits, route execution, GPS tracking, collections, productivity metrics, KPI achievement, and overall field performance through its web management portal.",
  },
];

export const valueProps: ValueProp[] = [
  {
    index: "01",
    title: "AI Smart Ordering",
    description:
      "Predict customer demand, recommend replenishment, and identify upselling opportunities to increase revenue on every visit.",
  },
  {
    index: "02",
    title: "Complete Distribution Management",
    description:
      "Track mobile van stock, process payments, and sync warehouses to ensure zero stock leakages.",
  },
  {
    index: "03",
    title: "Mobile & Web Sync",
    description:
      "Keep field teams connected with an offline-first app, and manage operations centrally from the web portal.",
  },
  {
    index: "04",
    title: "Real-Time Field Visibility",
    description:
      "Monitor route compliance, GPS-verified visits, and instant collections metrics as they happen.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "RepProX gave us complete visibility across sales, collections, inventory, and customer visits. We moved from reactive management to data-driven decision making. The platform quickly became a critical part of our daily operations.",
    name: "Salar Al Khalidi",
    role: "CEO",
    company: "Smart Electronics",
    avatar: avatar1,
    tagline: "Leading Consumer Electronics Distributor",
    industry: "Distribution",
  },
  {
    quote:
      "The visibility we gained into field activities, route execution, and inventory movement significantly improved operational efficiency. What impressed us most was how quickly our teams adopted the platform.",
    name: "Mustafa Class",
    role: "Chief Operating Officer",
    company: "Al Matajir Al Thalath",
    avatar: avatar2,
    tagline: "Wholesale Distribution Company",
    industry: "Wholesale",
  },
  {
    quote:
      "We reduced missed customer visits and improved route compliance within the first few weeks. RepProX gave us the operational control we were previously missing.",
    name: "Mamdouh Al Doughly",
    role: "Operations Manager",
    company: "Emirati Land",
    avatar: avatar3,
    tagline: "Consumer Goods Distributor",
    industry: "Consumer Goods",
  },
];
