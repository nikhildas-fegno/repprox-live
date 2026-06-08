"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";

import { contactFormSchema, teamSizeOptions, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = React.useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      teamSize: undefined,
      message: "",
      company_website: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-md border border-accent/25 bg-accent-soft p-8 sm:p-10"
      >
        <CheckCircle2 aria-hidden="true" className="size-9 text-accent-ink" />
        <h3 className="font-display text-2xl font-medium tracking-tight">Message received.</h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
          Thanks for reaching out — someone from our team will follow up at the email you
          provided within one business day.
        </p>
        <Button variant="outline" onClick={() => setState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-sm text-accent-ink">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-sm text-accent-ink">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
          />
          {errors.company && (
            <p id="company-error" role="alert" className="text-sm text-accent-ink">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="teamSize">Team size</Label>
          <Select
            id="teamSize"
            defaultValue=""
            aria-invalid={!!errors.teamSize}
            aria-describedby={errors.teamSize ? "teamSize-error" : undefined}
            {...register("teamSize")}
          >
            <option value="" disabled>
              Select a range
            </option>
            {teamSizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {errors.teamSize && (
            <p id="teamSize-error" role="alert" className="text-sm text-accent-ink">
              {errors.teamSize.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">What are you looking to solve?</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your current systems, team, and what's prompting the search for an ERP…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-sm text-accent-ink">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from sighted users and screen readers; bots that fill every field trip it */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input id="company_website" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="accent" size="lg" disabled={state === "submitting"}>
          {state === "submitting" ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight aria-hidden="true" />
            </>
          )}
        </Button>
        {state === "error" && (
          <p role="alert" className="text-sm text-accent-ink">
            Something went wrong on our end — please try again, or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}
