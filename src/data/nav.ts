import type { NavGroup, NavLink } from "@/types/content";

export const primaryNav: NavGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      {
        label: "Sales Force Automation",
        href: "/solutions/sales-force-automation",
        description: "Digitize quotations, orders, invoices, collections",
      },
      {
        label: "Distribution & Van Sales",
        href: "/solutions/distribution",
        description: "Manage inventory, stock transfers, field distribution",
      },
      {
        label: "Route Planning & GPS Tracking",
        href: "/solutions/route-planning",
        description: "Optimize routes, monitor compliance, and coverage",
      },
      {
        label: "Task & Survey Management",
        href: "/solutions/task-survey",
        description: "Execute field tasks, audits, and surveys",
      },
      {
        label: "Promotions & Pricing",
        href: "/solutions/promotion-pricing",
        description: "Drive revenue with pricing and active discounts",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blogs",
    items: [
      {
        label: "Blog & Articles",
        href: "/resources/blogs",
        description: "Expert advice, updates, and automation strategies",
      },
      {
        label: "Case Studies",
        href: "/resources/case-studies",
        description: "Real results from real field operations",
      },
    ],
  },
];

export const secondaryNav: NavLink[] = [
  { label: "Features", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      {
        label: "Sales Force Automation",
        href: "/solutions/sales-force-automation",
      },
      { label: "Distribution & Van Sales", href: "/solutions/distribution" },
      { label: "Route Planning & GPS", href: "/solutions/route-planning" },
      { label: "Task & Survey Management", href: "/solutions/task-survey" },
      { label: "Promotions & Pricing", href: "/solutions/promotion-pricing" },
    ],
  },
  {
    label: "Features",
    href: "#",
    items: [
      { label: "AI Smart Ordering", href: "#" },
      { label: "KPI Management", href: "#" },
      { label: "Web Portal", href: "#" },
      { label: "Reporting & Analytics", href: "#" },
      { label: "ERP Integration", href: "#" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    items: [
      { label: "FMCG Distribution", href: "#" },
      { label: "Pharmaceuticals", href: "#" },
      { label: "Wholesale", href: "#" },
      { label: "Logistics & Delivery", href: "#" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/resources/blogs" },
      { label: "Case Studies", href: "/resources/case-studies" },
    ],
  },
];
