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
  { label: "Company", href: "/company" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav: NavGroup[] = [
  {
    label: "Product",
    href: "/features",
    items: [
      { label: "Solutions", href: "/solutions" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Industries", href: "/industries" },
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
    href: "/company",
    items: [
      { label: "About Us", href: "/company" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/company#careers" },
    ],
  },
  {
    label: "Resources",
    href: "/contact",
    items: [
      { label: "Blog", href: "/company#blog" },
      { label: "Documentation", href: "/contact#docs" },
      { label: "Support", href: "/contact" },
    ],
  },
];
