import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items: NavLink[];
}

export interface FeatureModule {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  href: string;
}

export interface Industry {
  slug: string;
  name: string;
  summary: string;
  stats: { label: string; value: string }[];
  useCases: string[];
}

export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  href: string;
  highlighted?: boolean;
  ctaLabel?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: StaticImageData;
  tagline?: string;
  industry?: string;
}

export interface Solution {
  slug: string;
  audience: string;
  title: string;
  image: StaticImageData;
  summary: string;
  before: string;
  after: string;
  outcomes: string[];
  modules: string[];
}

export interface ValueProp {
  index: string;
  title: string;
  description: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}
