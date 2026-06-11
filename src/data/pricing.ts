import type { FaqItem, PricingPlan, Testimonial, ValueProp } from "@/types/content";
import avatar1 from "@/public/home/testimonials/testimonial1.png";
import avatar2 from "@/public/home/testimonials/testimonial2.png";
import avatar3 from "@/public/home/testimonials/testimonial3.png";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essential",
    tagline: "Ideal for organizations digitizing field sales and distribution operations.",
    price: "$32",
    cadence: "Starting from / user / month",
    description:
      "Core sales automation, customer management, order processing, collections, and mobile execution.",
    features: [
      "Customer, Product & Price Management",
      "Sales Quotations, Orders, Invoices & Returns",
      "Collection Management & Customer Visit Tracking",
      "Warehouse & Inventory Operations",
      "Mobile Sales App (Android & iOS)",
      "GPS Tracking & Mobile Reporting",
      "ERP Integration & Data Synchronization",
    ],
    href: "/contact",
    ctaLabel: "Talk to Sales",
  },
  {
    name: "Professional",
    tagline: "Designed for growing distributors requiring route optimization, inventory visibility, and performance management.",
    price: "$42",
    cadence: "per user / month",
    description:
      "Everything in Essential, plus advanced distribution, territory, and performance management capabilities.",
    features: [
      "Everything in Essential",
      "Route Planning, Optimization & Territory Management",
      "Stock Requests, Transfers & Inventory Counting",
      "Promotions, Bundle Pricing & Pricing Rules",
      "Tasks, Surveys & Incident Management",
      "KPI, Target & Seasonal Performance Management",
      "Route Compliance, Missing Customer Analysis & Advanced Reports",
    ],
    href: "/contact",
    highlighted: true,
    ctaLabel: "Talk to Sales",
  },
  {
    name: "Enterprise",
    tagline: "Built for large-scale distribution groups requiring AI, advanced analytics, governance, and enterprise-grade controls.",
    price: "Custom",
    cadence: "tailored annual contract",
    description:
      "Everything in Professional, plus AI-powered intelligence and enterprise governance.",
    features: [
      "Everything in Professional",
      "AI Smart Ordering & Demand Prediction",
      "Purchase Pattern & Sales Intelligence Analytics",
      "Executive Dashboards & Enterprise Reporting",
      "Customer & Product Profitability Analysis",
      "Advanced Workflows, Multi-Level Approvals & Governance",
      "Enterprise Security, Automated Notifications & Priority SLA Support",
    ],
    href: "/contact",
    ctaLabel: "Talk to Sales",
  },
  {
    name: "Web User License",
    tagline: "For managers, supervisors, and executives who need complete visibility into field operations.",
    price: "$10",
    cadence: "Starting from / user / month",
    description:
      "Full management visibility across teams, territories, and operations from any device.",
    features: [
      "Real-Time Operational Dashboards",
      "Business Reports & Analytics",
      "KPI & Performance Monitoring",
      "User & Role Management",
      "Administration Portal Access",
      "Management Visibility Across Teams & Territories",
      "Executive Insights & Decision Support Tools",
    ],
    href: "/contact",
    ctaLabel: "Talk to Sales",
  },
];

export const pricingFaqs: FaqItem[] = [
  {
    question: "How is RepPro X pricing calculated?",
    answer:
      "RepPro X is priced on a per-user, per-month basis. The Essential plan starts from $32/user/month and the Professional plan starts from $42/user/month. Web User Licenses for managers and supervisors start from $10/user/month. Enterprise pricing is customized based on your team size and requirements.",
  },
  {
    question: "What billing cycles are available?",
    answer:
      "RepPro X is available on annual billing, which offers the best value. Monthly billing options may be available upon request. All prices displayed are based on annual contracts.",
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
      "We offer a guided product demo tailored to your industry and use case. Contact our team to schedule a walkthrough — we'll show you exactly how RepPro X fits your specific distribution or field service operations.",
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
      "RepPro X gave us complete visibility across sales, collections, inventory, and customer visits. We moved from reactive management to data-driven decision making. The platform quickly became a critical part of our daily operations.",
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
      "We reduced missed customer visits and improved route compliance within the first few weeks. RepPro X gave us the operational control we were previously missing.",
    name: "Mamdouh Al Doughly",
    role: "Operations Manager",
    company: "Emirati Land",
    avatar: avatar3,
    tagline: "Consumer Goods Distributor",
    industry: "Consumer Goods",
  },
];
