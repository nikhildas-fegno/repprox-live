import type { FaqItem, PricingPlan, Testimonial, ValueProp } from "@/types/content";

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
    question: "How long does implementation typically take?",
    answer:
      "For standard implementations, onboarding takes 3 to 4 weeks, which includes setting up territories, uploading products, and importing customer lists. Enterprise integrations with ERPs like SAP Business One or NetSuite typically take 6 to 8 weeks, led by a dedicated implementation manager.",
  },
  {
    question: "How does the ERP integration work?",
    answer:
      "RepProX offers pre-built connectors for SAP Business One, Oracle NetSuite, Microsoft Dynamics, and major accounting software. Synchronization is bidirectional: pricing and inventory flow from your ERP to RepProX, and orders, invoices, and payment collections sync back to the ERP automatically in real time.",
  },
  {
    question: "Does the mobile app support offline usage?",
    answer:
      "Yes. The RepProX mobile app is built offline-first. Field sales representatives can access customer lists, view inventory balances, apply promotions, and capture orders without internet connectivity. Once a signal is restored, all data synchronizes with the management portal automatically.",
  },
  {
    question: "Is client data secure on the platform?",
    answer:
      "Security is our highest priority. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We host our infrastructure in secure, SOC 2 Type II certified data centers. We also enforce role-based access, device verification, and immutable log trails on all transactions.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We charge on a per-user, per-month basis billed annually. A user is any field representative, delivery driver, or portal administrator. There are no hidden fees for standard features. High-volume SMS messaging or custom ERP setup may involve one-time implementation costs.",
  },
  {
    question: "Can I scale users up or down during the year?",
    answer:
      "Yes. You can add new user licenses at any time during your contract period, prorated for the remainder of your billing cycle. License reductions can be requested at your annual contract renewal.",
  },
  {
    question: "What platforms does the mobile app run on?",
    answer:
      "The RepProX mobile application is fully optimized for iOS and Android devices, supporting both smartphones and tablets. It is lightweight, respects battery consumption, and is designed for quick navigation in the field.",
  },
  {
    question: "How does AI Smart Ordering make recommendations?",
    answer:
      "Our AI engine analyzes the individual customer's transaction history, ordering cadence, seasonality, and product stock levels at the nearest warehouse. It generates recommended ordering quantities to prevent stockouts and highlights cross-selling opportunities based on similar customer segments.",
  },
  {
    question: "Can we track GPS location and verify visits?",
    answer:
      "Yes. The app utilizes GPS validation. When a representative checks into a customer account, the app verifies their location against the customer's coordinates. It also logs check-out times, tracking route compliance and visit duration in real time.",
  },
  {
    question: "What kind of support is included?",
    answer:
      "Essential plans include email support with a 24-hour response time. Professional plans upgrade to priority email and live chat support with a 4-hour SLA. Enterprise plans receive 24/7/365 coverage, a dedicated Slack channel, and a direct phone escalation hotline.",
  },
  {
    question: "Can we run promotions and discounts in the field?",
    answer:
      "Absolutely. Through the Web Management Portal, you can configure volume discounts, customer-specific contract pricing, promotional codes, and buy-one-get-one (BOGO) campaigns. These are downloaded to the mobile app and enforced automatically.",
  },
  {
    question: "Do you support multi-currency and multi-branch setups?",
    answer:
      "Yes. RepProX allows groups to manage multiple branches, distribution networks, and warehouses under a single billing account. Branch managers can view data isolated to their territory, while executives access consolidated analytics.",
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
    company: "Solace FMCG Distribution",
  },
  {
    quote:
      "Route compliance increased from 65% to 98% with RepProX route planning. Drivers save hours of drive time and we've reduced transit fuel costs by 20%.",
    name: "Daniel Ortega",
    role: "COO",
    company: "Northbound Wholesalers",
  },
  {
    quote:
      "AI Smart Ordering recommendations increased our average order value by 25%. Our sales representatives are far more productive on every single visit.",
    name: "Jamie Whitfield",
    role: "Director of Field Sales",
    company: "Alder Pharmaceutical Supplies",
  },
];
