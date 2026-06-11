"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  ArrowUpRight,
  MessageSquare,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  Check,
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
import { Select } from "@/components/ui/select";

// ─── Static data ──────────────────────────────────────────────────────────────

type Option = { value: string; label: string };

const countryOptions: Option[] = Object.entries(countriesData)
  .map(([code, data]) => ({ value: code, label: data.name }))
  .sort((a, b) => a.label.localeCompare(b.label));

function buildTimezoneOptions(): Option[] {
  try {
    const ids = (Intl as { supportedValuesOf(k: string): string[] }).supportedValuesOf("timeZone");
    const now = new Date();
    return ids.map((tz) => {
      const parts = tz.split("/");
      const label =
        parts.length > 1
          ? `${parts[0]} / ${parts.slice(1).join(" / ").replace(/_/g, " ")}`
          : tz;
      const offset =
        new Intl.DateTimeFormat("en", { timeZone: tz, timeZoneName: "shortOffset" })
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

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// ─── SearchSelect ─────────────────────────────────────────────────────────────

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
        ? options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase()))
        : options,
    [options, query],
  );

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={containerRef} className="relative">
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
          "flex h-12 w-full cursor-pointer items-center justify-between rounded-sm border bg-paper px-4 text-[15px] transition-colors",
          hasError
            ? "border-accent"
            : open
              ? "border-ink ring-2 ring-accent/40"
              : "border-ink/20 hover:border-ink/40",
          value ? "text-ink" : "text-ink/40",
        ].join(" ")}
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <ChevronDown
          className={`ml-2 size-4 shrink-0 text-ink-soft transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-sm border border-ink/15 bg-card shadow-2xl shadow-ink/10">
          <div className="flex items-center gap-2 border-b border-ink/10 px-3 py-2.5">
            <Search className="size-3.5 shrink-0 text-ink-soft" aria-hidden="true" />
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
              className="flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink/40"
            />
          </div>
          <ul role="listbox" className="max-h-52 overflow-y-auto py-1 scrollbar-thin">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-center text-[13px] text-ink-soft">No results</li>
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
                      "flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left text-[14px] transition-colors",
                      opt.value === value
                        ? "bg-accent-soft font-medium text-accent-ink"
                        : "text-ink hover:bg-ink/[0.03]",
                    ].join(" ")}
                  >
                    <span className="truncate">{opt.label}</span>
                    {opt.value === value && (
                      <Check className="ml-2 size-3.5 shrink-0 text-accent-ink" aria-hidden="true" />
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

// ─── Meeting form ─────────────────────────────────────────────────────────────

function MeetingForm({ onSuccess }: { onSuccess: () => void }) {
  const userTz = React.useMemo(() => {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      return "UTC";
    }
  }, []);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [timezone, setTimezone] = React.useState(userTz);
  const [calDate, setCalDate] = React.useState(() => new Date());
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({});
  const [submitState, setSubmitState] = React.useState<"idle" | "submitting" | "error">("idle");

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
  const isSelected = (day: number) => selectedDate === dayKey(day);
  const isToday = (day: number) =>
    new Date(calYear, calMonth, day).toDateString() === today.toDateString();

  const handleDateClick = (day: number) => {
    if (isPast(day)) return;
    setSelectedDate(dayKey(day));
    setSelectedTime(null);
    setFieldErrors((e) => ({ ...e, date: "" }));
  };

  const validate = () => {
    const result = meetingSchema.safeParse({
      name,
      email,
      company,
      country,
      timezone,
      date: selectedDate ?? "",
      time: selectedTime ?? "",
      company_website: "",
    });
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      const errs: Record<string, string> = {};
      Object.entries(flat).forEach(([k, msgs]) => {
        if (msgs?.[0]) errs[k] = msgs[0];
      });
      setFieldErrors(errs);
      return false;
    }
    setFieldErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          country,
          timezone,
          date: selectedDate,
          time: selectedTime,
          company_website: "",
        }),
      });
      if (!res.ok) throw new Error();
      onSuccess();
    } catch {
      setSubmitState("error");
    }
  };

  const formattedDate = selectedDate
    ? new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Name + Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="m-name">Full name</Label>
          <Input
            id="m-name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!fieldErrors.name}
          />
          {fieldErrors.name && (
            <p role="alert" className="text-sm text-accent-ink">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="m-email">Work email</Label>
          <Input
            id="m-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!fieldErrors.email}
          />
          {fieldErrors.email && (
            <p role="alert" className="text-sm text-accent-ink">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company + Country */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="m-company">Company</Label>
          <Input
            id="m-company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            aria-invalid={!!fieldErrors.company}
          />
          {fieldErrors.company && (
            <p role="alert" className="text-sm text-accent-ink">
              {fieldErrors.company}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="m-country">Country</Label>
          <SearchSelect
            id="m-country"
            options={countryOptions}
            value={country}
            onChange={(v) => {
              setCountry(v);
              setFieldErrors((e) => ({ ...e, country: "" }));
            }}
            placeholder="Select country…"
            hasError={!!fieldErrors.country}
          />
          {fieldErrors.country && (
            <p role="alert" className="text-sm text-accent-ink">
              {fieldErrors.country}
            </p>
          )}
        </div>
      </div>

      {/* Timezone */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="m-tz">Your timezone</Label>
        <SearchSelect
          id="m-tz"
          options={timezoneOptions}
          value={timezone}
          onChange={setTimezone}
          placeholder="Select timezone…"
          hasError={!!fieldErrors.timezone}
        />
        {fieldErrors.timezone && (
          <p role="alert" className="text-sm text-accent-ink">
            {fieldErrors.timezone}
          </p>
        )}
      </div>

      {/* Calendar */}
      <div className="flex flex-col gap-2">
        <Label>Preferred date</Label>
        <div className="rounded-sm border border-ink/15 bg-paper p-4">
          {/* Month navigation */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[14px] font-semibold text-ink">{monthLabel}</span>
            <div className="flex gap-0.5">
              <button
                type="button"
                disabled={!canGoPrev}
                onClick={() => setCalDate(new Date(calYear, calMonth - 1, 1))}
                aria-label="Previous month"
                className="flex size-7 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-ink/5 disabled:cursor-not-allowed disabled:opacity-25"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setCalDate(new Date(calYear, calMonth + 1, 1))}
                aria-label="Next month"
                className="flex size-7 items-center justify-center rounded-sm text-ink-soft transition-colors hover:bg-ink/5"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Day-of-week headers */}
          <div className="mb-1 grid grid-cols-7 text-center">
            {DAY_LABELS.map((d) => (
              <div
                key={d}
                className="py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`sp-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                type="button"
                disabled={isPast(day)}
                onClick={() => handleDateClick(day)}
                className={[
                  "mx-auto flex size-8 items-center justify-center rounded-full text-[13px] font-medium transition-all",
                  isSelected(day)
                    ? "bg-accent text-white shadow-sm"
                    : isPast(day)
                      ? "cursor-not-allowed text-ink/20"
                      : isToday(day)
                        ? "bg-accent-soft font-bold text-accent-ink ring-1 ring-accent/30"
                        : "cursor-pointer text-ink hover:bg-ink/[0.06]",
                ].join(" ")}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        {fieldErrors.date && (
          <p role="alert" className="text-sm text-accent-ink">
            {fieldErrors.date}
          </p>
        )}
      </div>

      {/* Time slots — shown once date is picked */}
      {selectedDate && (
        <div className="flex flex-col gap-2">
          <Label>
            Time slot
            {formattedDate && (
              <span className="ml-1.5 font-normal text-ink-soft">— {formattedDate}</span>
            )}
          </Label>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => {
                  setSelectedTime(slot);
                  setFieldErrors((e) => ({ ...e, time: "" }));
                }}
                className={[
                  "rounded-sm py-2 text-[13px] font-medium transition-all",
                  selectedTime === slot
                    ? "bg-accent text-white shadow-sm"
                    : "border border-ink/15 bg-paper text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
                ].join(" ")}
              >
                {slot}
              </button>
            ))}
          </div>
          {fieldErrors.time && (
            <p role="alert" className="text-sm text-accent-ink">
              {fieldErrors.time}
            </p>
          )}
        </div>
      )}

      {/* Confirmation badge */}
      {selectedDate && selectedTime && (
        <div className="flex items-center gap-2.5 rounded-sm border border-green-200 bg-green-50 px-4 py-2.5 dark:border-green-800/40 dark:bg-green-950/40">
          <Check
            className="size-4 shrink-0 text-green-600 dark:text-green-400"
            aria-hidden="true"
          />
          <span className="text-[13px] font-medium text-green-700 dark:text-green-400">
            {formattedDate} · {selectedTime} ·{" "}
            {timezone.replace(/_/g, " ").split("/").slice(1).join(" / ") || timezone}
          </span>
        </div>
      )}

      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="m-hp">Leave this field blank</label>
        <input id="m-hp" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={submitState === "submitting"}
        >
          {submitState === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Booking…
            </>
          ) : (
            <>
              <CalendarDays className="size-4" aria-hidden="true" />
              Request this slot
            </>
          )}
        </Button>
        {submitState === "error" && (
          <p role="alert" className="text-sm text-accent-ink">
            Something went wrong — please try again.
          </p>
        )}
      </div>
    </form>
  );
}

// ─── ContactForm ──────────────────────────────────────────────────────────────

type MsgState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [tab, setTab] = React.useState<"message" | "meeting">("message");
  const [msgState, setMsgState] = React.useState<MsgState>("idle");
  const [meetingDone, setMeetingDone] = React.useState(false);

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

  if (msgState === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-sm border border-accent/25 bg-accent-soft p-8 sm:p-10"
      >
        <CheckCircle2 aria-hidden="true" className="size-9 text-accent-ink" />
        <h3 className="font-display text-2xl font-medium tracking-tight">Message received.</h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
          Thanks for reaching out — someone from our team will follow up at the email you provided
          within one business day.
        </p>
        <Button variant="outline" onClick={() => setMsgState("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  if (meetingDone) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-sm border border-accent/25 bg-accent-soft p-8 sm:p-10"
      >
        <CheckCircle2 aria-hidden="true" className="size-9 text-accent-ink" />
        <h3 className="font-display text-2xl font-medium tracking-tight">
          Demo request confirmed.
        </h3>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
          We&rsquo;ve received your meeting request and will confirm the slot at your email within
          one business day.
        </p>
        <Button variant="outline" onClick={() => setMeetingDone(false)}>
          Book another slot
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Tab switcher */}
      <div className="mb-8 flex gap-1 rounded-sm border border-ink/10 bg-ink/[0.02] p-1">
        {(["message", "meeting"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={[
              "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-[2px] py-2.5 text-[13px] font-semibold transition-all duration-200",
              tab === t ? "bg-ink text-paper shadow-sm" : "text-ink-soft hover:text-ink",
            ].join(" ")}
          >
            {t === "message" ? (
              <MessageSquare className="size-[15px]" aria-hidden="true" />
            ) : (
              <CalendarDays className="size-[15px]" aria-hidden="true" />
            )}
            {t === "message" ? "Send a message" : "Book a demo"}
          </button>
        ))}
      </div>

      {tab === "message" ? (
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
                {teamSizeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
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

          <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              variant="accent"
              size="lg"
              disabled={msgState === "submitting"}
            >
              {msgState === "submitting" ? (
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
            {msgState === "error" && (
              <p role="alert" className="text-sm text-accent-ink">
                Something went wrong on our end — please try again, or email us directly.
              </p>
            )}
          </div>
        </form>
      ) : (
        <MeetingForm onSuccess={() => setMeetingDone(true)} />
      )}
    </div>
  );
}
