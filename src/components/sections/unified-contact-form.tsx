"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  Check,
  Mail,
  Headset,
  CalendarDays,
  Clock,
  Users,
  Cpu,
} from "lucide-react";
import { countries as countriesData } from "countries-list";

import {
  contactFormSchema,
  teamSizeOptions,
  itAgentOptions,
  painPointOptions,
  type ContactFormValues,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// ─── Shared premium field class override ─────────────────────────────────────
const field =
  "rounded-lg border-slate-200 bg-white shadow-sm placeholder:text-slate-400 " +
  "focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/[0.12] " +
  "transition-all duration-150";

// ─── Static data ──────────────────────────────────────────────────────────────

type Option = { value: string; label: string };

const countryOptions: Option[] = Object.entries(countriesData)
  .map(([code, data]) => ({ value: code, label: data.name }))
  .sort((a, b) => a.label.localeCompare(b.label));

function buildTimezoneOptions(): Option[] {
  try {
    const ids = (
      Intl as { supportedValuesOf(k: string): string[] }
    ).supportedValuesOf("timeZone");
    const now = new Date();
    return ids.map((tz) => {
      const parts = tz.split("/");
      const label =
        parts.length > 1
          ? `${parts[0]} / ${parts.slice(1).join(" / ").replace(/_/g, " ")}`
          : tz;
      const offset =
        new Intl.DateTimeFormat("en", {
          timeZone: tz,
          timeZoneName: "shortOffset",
        })
          .formatToParts(now)
          .find((p) => p.type === "timeZoneName")?.value ?? "";
      return { value: tz, label: offset ? `${label} (${offset})` : label };
    });
  } catch {
    return [
      { value: "UTC", label: "UTC (GMT+0)" },
      { value: "America/New_York", label: "America / New York (GMT-4)" },
      { value: "Europe/London", label: "Europe / London (GMT+1)" },
      { value: "Asia/Dubai", label: "Asia / Dubai (GMT+4)" },
      { value: "Asia/Kolkata", label: "Asia / Kolkata (GMT+5:30)" },
    ];
  }
}

const timezoneOptions = buildTimezoneOptions();

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];
const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// ─── OptionSelect — premium dropdown for small option lists ──────────────────

function OptionSelect({
  id,
  options,
  value,
  onChange,
  placeholder = "Select…",
  hasError,
  icon: Icon,
}: {
  id?: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hasError?: boolean;
  icon?: React.ElementType;
}) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger */}
      <button
        id={id}
        type="button"
        onClick={() => setOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={[
          "flex h-11 w-full cursor-pointer items-center gap-3 rounded-lg border bg-white px-3.5 text-[14px] shadow-sm transition-all duration-150",
          hasError
            ? "border-red-400 ring-2 ring-red-400/15"
            : open
              ? "border-blue-500 ring-2 ring-blue-500/[0.12]"
              : "border-slate-200 hover:border-slate-300",
        ].join(" ")}
      >
        {Icon && (
          <span
            className={`flex size-6 shrink-0 items-center justify-center rounded-md ${
              value
                ? "bg-blue-50 text-blue-600"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            <Icon className="size-3.5" aria-hidden="true" />
          </span>
        )}
        <span className={`flex-1 truncate text-left ${value ? "text-slate-800" : "text-slate-400"}`}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`ml-1 size-4 shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-slate-100 bg-white py-1.5 shadow-2xl shadow-slate-900/[0.08]">
          <ul role="listbox">
            {options.map((opt) => (
              <li key={opt.value} role="option" aria-selected={opt.value === value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={[
                    "flex w-full cursor-pointer items-center justify-between px-4 py-2.5 text-left text-[13.5px] transition-colors",
                    opt.value === value
                      ? "bg-blue-50 font-semibold text-blue-700"
                      : "text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {opt.label}
                  {opt.value === value && (
                    <Check className="ml-2 size-3.5 shrink-0 text-blue-600" aria-hidden="true" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── SearchSelect — premium dropdown with search for large option lists ───────

function SearchSelect({
  id,
  options,
  value,
  onChange,
  placeholder = "Select…",
  hasError,
}: {
  id?: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hasError?: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  React.useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const filtered = React.useMemo(
    () =>
      query.trim()
        ? options.filter((o) =>
            o.label.toLowerCase().includes(query.toLowerCase()),
          )
        : options,
    [options, query],
  );

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger */}
      <button
        id={id}
        type="button"
        onClick={() => {
          setOpen((p) => !p);
          setQuery("");
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={[
          "flex h-11 w-full cursor-pointer items-center justify-between rounded-lg border bg-white px-4 text-[14px] shadow-sm transition-all duration-150",
          hasError
            ? "border-red-400 ring-2 ring-red-400/15"
            : open
              ? "border-blue-500 ring-2 ring-blue-500/[0.12]"
              : "border-slate-200 hover:border-slate-300",
          value ? "text-slate-800" : "text-slate-400",
        ].join(" ")}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <ChevronDown
          className={`ml-2 size-4 shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1.5 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/[0.08]">
          {/* Search bar */}
          <div className="flex items-center gap-2.5 border-b border-slate-100 px-3.5 py-3">
            <Search className="size-3.5 shrink-0 text-slate-400" aria-hidden="true" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setOpen(false);
                  setQuery("");
                }
              }}
              placeholder="Search…"
              className="flex-1 bg-transparent text-[13px] text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
          {/* Options */}
          <ul role="listbox" className="max-h-56 overflow-y-auto py-1.5 scrollbar-thin">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-center text-[13px] text-slate-400">
                No results
              </li>
            ) : (
              filtered.map((opt) => (
                <li key={opt.value} role="option" aria-selected={opt.value === value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={[
                      "flex w-full cursor-pointer items-center justify-between px-3.5 py-2 text-left text-[13.5px] transition-colors",
                      opt.value === value
                        ? "bg-blue-50 font-medium text-blue-700"
                        : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <span className="truncate">{opt.label}</span>
                    {opt.value === value && (
                      <Check className="ml-2 size-3.5 shrink-0 text-blue-600" aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// ─── Main form ────────────────────────────────────────────────────────────────

type MsgState = "idle" | "submitting" | "success" | "error";

export function UnifiedContactForm() {
  const [msgState, setMsgState] = React.useState<MsgState>("idle");

  const defaultTimezone = React.useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return "UTC";
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      teamSize: undefined,
      itAgents: undefined,
      painPoints: [],
      country: "",
      message: "",
      company_website: "",
      timezone: defaultTimezone,
      date: "",
      time: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setMsgState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setMsgState("success");
      reset();
    } catch {
      setMsgState("error");
    }
  };

  // ── Calendar state ─────────────────────────────────────────────────────────
  const [calDate, setCalDate] = React.useState(() => new Date());
  const today = React.useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const calYear = calDate.getFullYear();
  const calMonth = calDate.getMonth();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(calYear, calMonth, 1).getDay();
  const canGoPrev =
    calYear > today.getFullYear() || calMonth > today.getMonth();
  const monthLabel = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(calDate);

  const dayKey = (day: number) =>
    `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const isPast = (day: number) => new Date(calYear, calMonth, day) < today;

  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const timezone = watch("timezone");
  const painPoints = watch("painPoints") ?? [];
  const teamSizeVal = watch("teamSize");
  const itAgentsVal = watch("itAgents");

  const isSelected = (day: number) => selectedDate === dayKey(day);
  const isToday = (day: number) =>
    new Date(calYear, calMonth, day).toDateString() === today.toDateString();

  const handleDateClick = (day: number) => {
    if (isPast(day)) return;
    setValue("date", dayKey(day), { shouldValidate: true });
    setValue("time", "");
  };

  const handlePainPointChange = (val: string, checked: boolean) => {
    if (checked)
      setValue("painPoints", [...painPoints, val], { shouldValidate: true });
    else
      setValue(
        "painPoints",
        painPoints.filter((p) => p !== val),
        { shouldValidate: true },
      );
  };

  if (msgState === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-4 p-16 text-center"
      >
        <div className="flex size-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 aria-hidden="true" className="size-8 text-green-600" />
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
          Request Confirmed!
        </h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
          Thanks for reaching out! We have received your details and our team
          will get back to you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-2"
          onClick={() => setMsgState("idle")}
        >
          Go back
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid lg:grid-cols-[4fr_minmax(360px,2fr)] divide-y lg:divide-x lg:divide-y-0 divide-slate-100"
    >
      {/* ══ Left: Contact fields ══════════════════════════════════════════════ */}
      <div className="flex flex-col gap-5 p-8 sm:p-10 lg:p-12">
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
          Tell us about your team
        </h2>

        {/* Name row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstName" className="text-[13px] font-medium text-slate-600">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="Jane"
              aria-invalid={!!errors.firstName}
              className={field}
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-[12px] text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="lastName" className="text-[13px] font-medium text-slate-600">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Doe"
              aria-invalid={!!errors.lastName}
              className={field}
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-[12px] text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email + Company */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-[13px] font-medium text-slate-600">
              Work Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jane@company.com"
              aria-invalid={!!errors.email}
              className={field}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[12px] text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="company" className="text-[13px] font-medium text-slate-600">
              Company Name
            </Label>
            <Input
              id="company"
              placeholder="Acme Corp"
              aria-invalid={!!errors.company}
              className={field}
              {...register("company")}
            />
            {errors.company && (
              <p className="text-[12px] text-red-500">{errors.company.message}</p>
            )}
          </div>
        </div>

        {/* Team size + IT agents — premium OptionSelect */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="teamSize" className="text-[13px] font-medium text-slate-600">
              Number of Employees
            </Label>
            <OptionSelect
              id="teamSize"
              options={teamSizeOptions.map((o) => ({
                value: o.value as string,
                label: o.label,
              }))}
              value={teamSizeVal ?? ""}
              onChange={(v) =>
                setValue(
                  "teamSize",
                  v as ContactFormValues["teamSize"],
                  { shouldValidate: true },
                )
              }
              placeholder="Select team size…"
              hasError={!!errors.teamSize}
              icon={Users}
            />
            {errors.teamSize && (
              <p className="text-[12px] text-red-500">{errors.teamSize.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="itAgents" className="text-[13px] font-medium text-slate-600">
              Number of IT Agents
            </Label>
            <OptionSelect
              id="itAgents"
              options={itAgentOptions}
              value={itAgentsVal ?? ""}
              onChange={(v) =>
                setValue(
                  "itAgents",
                  v as ContactFormValues["itAgents"],
                  { shouldValidate: true },
                )
              }
              placeholder="Select agent count…"
              hasError={!!errors.itAgents}
              icon={Cpu}
            />
            {errors.itAgents && (
              <p className="text-[12px] text-red-500">{errors.itAgents.message}</p>
            )}
          </div>
        </div>

        {/* Pain points */}
        <div className="flex flex-col gap-2">
          <Label className="text-[13px] font-medium text-slate-600">
            Main Pain Point{" "}
            <span className="font-normal text-slate-400">(select all that apply)</span>
          </Label>
          <div className="grid gap-2 sm:grid-cols-2">
            {painPointOptions.map((opt) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-slate-700"
              >
                <input
                  type="checkbox"
                  checked={painPoints.includes(opt.value)}
                  onChange={(e) =>
                    handlePainPointChange(opt.value, e.target.checked)
                  }
                  className="size-4 cursor-pointer rounded accent-blue-600"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="country" className="text-[13px] font-medium text-slate-600">
            Country
          </Label>
          <SearchSelect
            id="country"
            options={countryOptions}
            value={watch("country")}
            onChange={(v) => setValue("country", v, { shouldValidate: true })}
            placeholder="Select country…"
            hasError={!!errors.country}
          />
          {errors.country && (
            <p className="text-[12px] text-red-500">{errors.country.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message" className="text-[13px] font-medium text-slate-600">
            How can we help?{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </Label>
          <Textarea
            id="message"
            rows={4}
            placeholder="Tell us a bit about your current IT setup…"
            className={field}
            {...register("message")}
          />
        </div>

        {/* Honeypot */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="company_website">Leave this field blank</label>
          <input
            id="company_website"
            tabIndex={-1}
            autoComplete="off"
            {...register("company_website")}
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-2.5 pt-1">
          <Button
            type="submit"
            variant="accent"
            size="lg"
            disabled={msgState === "submitting"}
            className="w-full rounded-lg"
          >
            {msgState === "submitting" ? (
              <>
                <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Contact Us &amp; Confirm Demo
                <ArrowRight aria-hidden="true" className="size-4" />
              </>
            )}
          </Button>
          <p className="text-center text-[11px] text-slate-400">
            By submitting this form, you agree to our{" "}
            <a href="#" className="underline transition-colors hover:text-slate-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {msgState === "error" && (
          <p role="alert" className="text-[13px] text-red-500">
            Something went wrong — please try again.
          </p>
        )}
      </div>

      {/* ══ Right: Calendar ══════════════════════════════════════════════════ */}
      <div className="flex flex-col bg-slate-50/60">
        <div className="flex flex-1 flex-col gap-5 p-7 sm:p-8">
          {/* Header */}
          <div>
            <div className="mb-0.5 flex items-center gap-2">
              <CalendarDays className="size-[18px] text-blue-600" aria-hidden="true" />
              <h3 className="font-display text-[18px] font-semibold text-ink">
                Book a Live Demo
              </h3>
            </div>
            <p className="text-[12.5px] text-slate-500">
              Optional — pick a time and we&rsquo;ll send a calendar invite.
            </p>
          </div>

          {/* Timezone */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Your Timezone
            </Label>
            <SearchSelect
              options={timezoneOptions}
              value={timezone ?? ""}
              onChange={(v) => setValue("timezone", v)}
              placeholder="Select timezone…"
            />
          </div>

          {/* Calendar */}
          <div className="flex flex-col gap-1.5">
            {/* Month nav */}
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-slate-800">
                {monthLabel}
              </span>
              <div className="flex gap-0.5">
                <button
                  type="button"
                  disabled={!canGoPrev}
                  onClick={() => setCalDate(new Date(calYear, calMonth - 1, 1))}
                  aria-label="Previous month"
                  className="flex size-7 cursor-pointer items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setCalDate(new Date(calYear, calMonth + 1, 1))}
                  aria-label="Next month"
                  className="flex size-7 cursor-pointer items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 text-center">
              {DAY_LABELS.map((d) => (
                <div
                  key={d}
                  className="py-1 text-[10.5px] font-semibold uppercase tracking-wide text-slate-400"
                >
                  {d}
                </div>
              ))}
              {/* Leading spacers */}
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`sp-${i}`} />
              ))}
              {/* Day cells */}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  type="button"
                  disabled={isPast(day)}
                  onClick={() => handleDateClick(day)}
                  className={[
                    "mx-auto flex size-7 cursor-pointer items-center justify-center rounded-full text-[12px] font-medium transition-colors",
                    isSelected(day)
                      ? "bg-blue-600 text-white"
                      : isPast(day)
                        ? "cursor-not-allowed text-slate-300"
                        : isToday(day)
                          ? "bg-blue-100 font-bold text-blue-700"
                          : "text-slate-700 hover:bg-slate-200",
                  ].join(" ")}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div className="flex flex-col gap-2">
              <Label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Available Times
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() =>
                      setValue("time", slot, { shouldValidate: true })
                    }
                    className={[
                      "cursor-pointer rounded-lg border py-2 text-[13px] font-medium transition-all",
                      selectedTime === slot
                        ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {selectedTime && (
                <p className="flex items-center gap-1.5 text-[12.5px] font-medium text-green-600">
                  <Check className="size-3.5 shrink-0" aria-hidden="true" />
                  {selectedTime} selected
                </p>
              )}
            </div>
          )}
        </div>

        {/* Contact info footer */}
        <div className="flex flex-col gap-4 border-t border-slate-100 bg-white/60 p-7 sm:p-8">
          {(
            [
              {
                icon: Mail,
                bg: "bg-blue-50 text-blue-600",
                label: "Sales Inquiries",
                value: "sales@repprox.com",
                href: "mailto:sales@repprox.com",
              },
              {
                icon: Headset,
                bg: "bg-green-50 text-green-600",
                label: "Customer Support",
                value: "support@repprox.com",
                href: "mailto:support@repprox.com",
              },
              {
                icon: Clock,
                bg: "bg-slate-100 text-slate-500",
                label: "Global Response",
                value: "Typically within 24 hours.",
                href: null,
              },
            ] as const
          ).map(({ icon: Icon, bg, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div
                className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${bg}`}
              >
                <Icon className="size-[15px]" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-0.5 text-[13px]">
                <span className="font-semibold text-slate-700">{label}</span>
                {href ? (
                  <a href={href} className="text-blue-600 hover:underline">
                    {value}
                  </a>
                ) : (
                  <span className="text-slate-400">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
