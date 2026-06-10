import type { NavGroup, NavLink } from "@/types/content";

export const primaryNav: NavGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Sales Force Automation", href: "/solutions#sales-force-automation", description: "Digitize quotations, orders, invoices, collections" },
      { label: "Distribution & Van Sales", href: "/solutions#distribution-van-sales", description: "Manage inventory, stock transfers, field distribution" },
      { label: "Route Planning & GPS Tracking", href: "/solutions#route-planning-gps", description: "Optimize routes, monitor compliance, and coverage" },
      { label: "Task & Survey Management", href: "/solutions#task-survey-management", description: "Execute field tasks, audits, and surveys" },
      { label: "Promotions & Pricing", href: "/solutions#promotions-pricing", description: "Drive revenue with pricing and active discounts" },
    ],
  },
];

export const secondaryNav: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "Sales Force Automation", href: "/solutions#sales-force-automation" },
      { label: "Distribution & Van Sales", href: "/solutions#distribution-van-sales" },
      { label: "Route Planning & GPS", href: "/solutions#route-planning-gps" },
      { label: "Task & Survey Management", href: "/solutions#task-survey-management" },
      { label: "Promotions & Pricing", href: "/solutions#promotions-pricing" },
    ],
  },
  {
    label: "Features",
    href: "/features",
    items: [
      { label: "AI Smart Ordering", href: "/features#ai-ordering" },
      { label: "KPI Management", href: "/features#kpi-management" },
      { label: "Web Portal", href: "/features#web-portal" },
      { label: "Reporting & Analytics", href: "/features#analytics" },
      { label: "ERP Integration", href: "/features#erp-integration" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "FMCG Distribution", href: "/industries#fmcg" },
      { label: "Pharmaceuticals", href: "/industries#pharma" },
      { label: "Wholesale", href: "/industries#wholesale" },
      { label: "Logistics & Delivery", href: "/industries#logistics" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/about#blog" },
    ],
  },
];
