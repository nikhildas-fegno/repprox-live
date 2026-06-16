import { z } from "zod";

export const painPointOptions = [
  {
    value: "kpi-management",
    label: "KPI & Performance Management",
  },
  {
    value: "route-planning",
    label: "Route Planning & Territory Management",
  },
  {
    value: "attendance",
    label: "Attendance & Check-In Management",
  },
  {
    value: "gps-tracking",
    label: "GPS Tracking & Live Location Monitoring",
  },
  {
    value: "sales-cycle",
    label: "Sales Cycle & Lead Management",
  },
  {
    value: "order-management",
    label: "Order Booking & Distribution Management",
  },
  {
    value: "survey-audits",
    label: "Surveys, Audits & Compliance Checks",
  },
  {
    value: "promotions",
    label: "Promotions & Trade Marketing Execution",
  },
  {
    value: "merchandising",
    label: "Merchandising & Retail Execution",
  },
  {
    value: "reporting",
    label: "Reports, Analytics & Dashboards",
  },
];

export const itAgentOptions = [
  { value: "1-5", label: "1-5 Agents" },
  { value: "6-15", label: "6-15 Agents" },
  { value: "16-50", label: "16-50 Agents" },
  { value: "51+", label: "51+ Agents" },
];

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "Enter your first name.")
    .max(50, "First name is too long."),
  lastName: z
    .string()
    .trim()
    .min(2, "Enter your last name.")
    .max(50, "Last name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your work email.")
    .email("Enter a valid email address.")
    .max(254),
  company: z
    .string()
    .trim()
    .min(2, "Enter your company name.")
    .max(120, "Company name is too long."),
  teamSize: z.enum(["1-10", "11-50", "51-200", "201-1000", "1000+"], {
    message: "Select your team size.",
  }),
  itAgents: z.enum(["1-5", "6-15", "16-50", "51+"]).optional(),
  painPoints: z.array(z.string()).optional(),
  country: z.string().min(1, "Select your country."),
  message: z
    .string()
    .trim()
    .optional(),
  // Meeting fields (optional)
  timezone: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  // Honeypot — not validated client-side; checked from raw body server-side
  company_website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const teamSizeOptions: { value: ContactFormValues["teamSize"]; label: string }[] = [
  { value: "1-10", label: "1–10 people" },
  { value: "11-50", label: "11–50 people" },
  { value: "51-200", label: "51–200 people" },
  { value: "201-1000", label: "201–1,000 people" },
  { value: "1000+", label: "1,000+ people" },
];

export const meetingSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.string().trim().min(1, "Enter your work email.").email("Enter a valid email address.").max(254),
  company: z.string().trim().min(2, "Enter your company name.").max(120),
  country: z.string().min(1, "Select your country."),
  timezone: z.string().min(1, "Select your timezone."),
  date: z.string().min(1, "Select a date."),
  time: z.string().min(1, "Select a time slot."),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type MeetingValues = z.infer<typeof meetingSchema>;
