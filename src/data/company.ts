import type { FaqItem, TimelineEntry, ValueProp } from "@/types/content";

export const companyStats: { label: string; value: string }[] = [
  { label: "Distributors running on RepPro X", value: "1,400+" },
  { label: "Daily field transactions processed", value: "6.2M" },
  { label: "Average enterprise implementation", value: "6 weeks" },
  { label: "Platform uptime & sync availability", value: "99.97%" },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2017",
    title: "Founded to solve field disconnects",
    description:
      "RepPro X was founded by three logistics and sales distribution directors frustrated by the disconnect between field operations and accounting systems, aiming to unify sales and logistics under one platform.",
  },
  {
    year: "2019",
    title: "Offline-First Mobile app launch",
    description:
      "Released our offline-first mobile app, allowing field sales representatives to capture orders, look up inventory, and register payments without active cellular connections.",
  },
  {
    year: "2021",
    title: "GPS Route Planning & optimization",
    description:
      "Introduced GPS-verified route tracking and sequencing features, increasing daily route compliance and customer coverage by 40% for our logistics partners.",
  },
  {
    year: "2023",
    title: "AI Smart Ordering engine release",
    description:
      "Launched our predictive AI recommendation engine, helping distributors recommend restock quantities based on seasonal trends and customer buying patterns.",
  },
  {
    year: "2026",
    title: "1,400+ distribution groups globally",
    description:
      "Today, RepPro X powers field automation, inventory distribution, and payment collection processes for major FMCG, pharmaceutical, and wholesale leaders globally.",
  },
];

export const companyValues: ValueProp[] = [
  {
    index: "01",
    title: "Design for the field representative first",
    description:
      "A field tool is only useful if reps actually use it. We design all mobile screens for rapid entry under sun glare and on the move, with minimum taps required.",
  },
  {
    index: "02",
    title: "Zero gaps in data sync",
    description:
      "Field transactions should sync instantly and bidirectionally with back-office systems. We build deep integrations so your ledgers and stock counts are always current.",
  },
  {
    index: "03",
    title: "Configuration over custom consulting",
    description:
      "Distributors should be able to create sales routes, manage territories, and configure promotional campaigns themselves, without paying expensive developers.",
  },
  {
    index: "04",
    title: "Focus on execution productivity",
    description:
      "We measure our success by the minutes saved per customer visit. Every feature must contribute directly to faster orders, efficient deliveries, and secure collections.",
  },
];

export const companyFaqs: FaqItem[] = [
  {
    question: "Where is the RepPro X team located?",
    answer:
      "We are headquartered in Austin, Texas, with engineering and implementation teams spread across North America, Europe, and Asia to support global distribution groups.",
  },
  {
    question: "How does the onboarding team help us start?",
    answer:
      "Every new customer is paired with an onboarding specialist who helps structure your warehouse locations, upload customer accounts, design initial routes, and connect your ERP databases.",
  },
  {
    question: "Are your platforms SOC 2 compliant?",
    answer:
      "Yes. RepPro X undergoes annual independent audits to maintain SOC 2 Type II compliance, verifying our security controls, data encryption standards, and platform reliability.",
  },
];
