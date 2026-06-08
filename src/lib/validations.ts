import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Name is too long."),
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
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little about what you're looking for (10+ characters).")
    .max(2000, "Message is too long (2000 characters max)."),
  // Honeypot field — real users never fill this in. Bots that auto-fill every
  // input trip it, letting us silently drop the submission server-side.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const teamSizeOptions: { value: ContactFormValues["teamSize"]; label: string }[] = [
  { value: "1-10", label: "1–10 people" },
  { value: "11-50", label: "11–50 people" },
  { value: "51-200", label: "51–200 people" },
  { value: "201-1000", label: "201–1,000 people" },
  { value: "1000+", label: "1,000+ people" },
];
