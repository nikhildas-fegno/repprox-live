import type { FaqItem, PricingPlan, Testimonial, ValueProp } from "@/types/content";
import avatarFemale from "@/public/home/testimonials/avatar-female.png"
import avatarMale from "@/public/home/testimonials/avatar-male.png"

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essential",
    tagline: "For growing regional distributors",
    price: "$32",
    cadence: "per user / month, billed annually",
    description:
      "Core field operations, mobile order booking, GPS check-ins, and standard pricing rules.",
    features: [
      "Mobile order entry & offline booking",
      "GPS check-in & route tracking",
      "Standard pricing & discount configuration",
      "Basic payment collections logging",
      "Web portal user management",
      "Email support, 24-hour response",
    ],
    href: "/contact",
  },
  {
    name: "Professional",
    tagline: "For dynamic multi-branch organizations",
    price: "$42",
    cadence: "per user / month, billed annually",
    description:
      "Everything in Essential, plus AI recommendations, advanced van sales, and full route optimization.",
    features: [
      "Everything in Essential",
      "AI Smart Ordering & upselling recommendations",
      "Van Sales & Mobile Warehouse inventory control",
      "Automated route planning & compliance alerts",
      "Task & retail survey management",
      "Priority email & chat support, 4-hour response",
    ],
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For high-volume distribution groups",
    price: "Custom",
    cadence: "tailored annual contract",
    description:
      "Dedicated hosting, custom ERP connectors, and 24/7 technical assistance for large operations.",
    features: [
      "Everything in Professional",
      "Bidirectional SAP & NetSuite ERP integration",
      "Dedicated server environment & 99.9% uptime SLA",
      "Custom analytics dashboards & raw data exports",
      "Dedicated implementation manager & onboarding support",
      "24/7 priority phone support & escalation",
    ],
    href: "/contact",
  },
];

export const pricingFaqs: FaqItem[] = [
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
      "RepProX helped us transition to 100% digital invoices in the field. Our collections efficiency is up 30%, and cash flow reconciliation is instantaneous.",
    name: "Priya Raman",
    role: "VP of Finance",
    company: "Solace",
    avatar: avatarFemale 
  },
  {
    quote:
      "Route compliance increased from 65% to 98% with RepProX route planning. Drivers save hours of drive time and we've reduced transit fuel costs by 20%.",
    name: "Daniel Ortega",
    role: "COO",
    company: "Northbound Wholesalers",
    avatar: avatarMale
  },
  {
    quote:
      "AI Smart Ordering recommendations increased our average order value by 25%. Our sales representatives are far more productive on every single visit.",
    name: "Jamie Whitfield",
    role: "CEO",
    company: "AlderSupplies",
    avatar: avatarMale
  },
];
