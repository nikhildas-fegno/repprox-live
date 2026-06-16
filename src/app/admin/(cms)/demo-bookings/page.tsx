import React from "react";
import { db } from "@/lib/db";
import { PageHeader } from "@/components/admin/page-header";
import { ScheduleSettings } from "./_components/schedule-settings";
import { MeetingActions } from "./_components/meeting-actions";
import { TIME_SLOTS, DEFAULT_AVAILABLE_DAYS, formatMeetingDatetime } from "@/lib/scheduling";
import { Calendar, CheckCircle2, XCircle, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DEFAULT_ENABLED_SLOTS = [...TIME_SLOTS];
const PAGE_SIZE = 15;

type Filter = "all" | "upcoming" | "today" | "completed" | "cancelled";
type DemoStatus = "SCHEDULED" | "COMPLETED" | "CANCELLED" | "RESCHEDULED";

type MeetingRow = {
  id: string;
  leadId: string;
  scheduledAt: Date;
  timezone: string;
  status: string;
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
  lead: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    country: string;
    teamSize: string;
    painPoints: string[];
    message: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
};

const FILTER_LABELS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "upcoming", label: "Upcoming" },
  { value: "today", label: "Today" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

const STATUS_STYLES: Record<string, string> = {
  SCHEDULED: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  RESCHEDULED: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  COMPLETED: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  CANCELLED: "bg-slate-100 text-slate-500 ring-1 ring-slate-200",
};

export default async function DemoBookingsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const pageStr = typeof sp.page === "string" ? sp.page : undefined;
  const search = typeof sp.search === "string" ? sp.search : "";
  const rawFilter = typeof sp.filter === "string" ? sp.filter : "all";

  const page = Math.max(1, Number(pageStr ?? 1));
  const filter: Filter = (["all", "upcoming", "today", "completed", "cancelled"].includes(rawFilter)
    ? rawFilter
    : "all") as Filter;

  const now = new Date();
  const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(); todayEnd.setHours(23, 59, 59, 999);

  const searchWhere = search.trim()
    ? {
        lead: {
          OR: [
            { firstName: { contains: search, mode: "insensitive" as const } },
            { lastName: { contains: search, mode: "insensitive" as const } },
            { email: { contains: search, mode: "insensitive" as const } },
            { company: { contains: search, mode: "insensitive" as const } },
          ],
        },
      }
    : undefined;

  const filterWhere = {
    upcoming:  { status: { in: ["SCHEDULED", "RESCHEDULED"] as DemoStatus[] }, scheduledAt: { gte: now } },
    today:     { scheduledAt: { gte: todayStart, lte: todayEnd } },
    completed: { status: "COMPLETED" as DemoStatus },
    cancelled: { status: "CANCELLED" as DemoStatus },
    all:       {},
  }[filter];

  const where = { ...searchWhere, ...filterWhere };

  let total = 0, upcomingCount = 0, completedCount = 0, cancelledCount = 0, filteredCount = 0;
  let meetings: MeetingRow[] = [];
  let scheduleConfig: { enabledSlots: string[]; availableDays: number[] } | null = null;
  let dbError = false;

  try {
    const results = await Promise.all([
      db.demoMeeting.count(),
      db.demoMeeting.count({ where: { status: { in: ["SCHEDULED", "RESCHEDULED"] as DemoStatus[] }, scheduledAt: { gte: now } } }),
      db.demoMeeting.count({ where: { status: "COMPLETED" as DemoStatus } }),
      db.demoMeeting.count({ where: { status: "CANCELLED" as DemoStatus } }),
      db.demoMeeting.findMany({
        where,
        include: { lead: true },
        orderBy: { scheduledAt: "asc" },
        skip: (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
      }) as unknown as Promise<MeetingRow[]>,
      db.demoMeeting.count({ where }),
      db.scheduleConfig.findUnique({ where: { id: "main" } }) as unknown as Promise<{ enabledSlots: string[]; availableDays: number[] } | null>,
    ]);
    total         = results[0] as number;
    upcomingCount = results[1] as number;
    completedCount = results[2] as number;
    cancelledCount = results[3] as number;
    meetings      = results[4] as MeetingRow[];
    filteredCount = results[5] as number;
    scheduleConfig = results[6] as { enabledSlots: string[]; availableDays: number[] } | null;
  } catch {
    dbError = true;
  }

  const totalPages = Math.max(1, Math.ceil(filteredCount / PAGE_SIZE));
  const enabledSlots = scheduleConfig?.enabledSlots ?? DEFAULT_ENABLED_SLOTS;
  const availableDays = scheduleConfig?.availableDays ?? DEFAULT_AVAILABLE_DAYS;

  function pageUrl(p: number) {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    if (filter !== "all") params.set("filter", filter);
    if (search) params.set("search", search);
    const q = params.toString();
    return `/admin/demo-bookings${q ? `?${q}` : ""}`;
  }

  function filterUrl(f: Filter) {
    const params = new URLSearchParams();
    if (f !== "all") params.set("filter", f);
    if (search) params.set("search", search);
    const q = params.toString();
    return `/admin/demo-bookings${q ? `?${q}` : ""}`;
  }

  return (
    <div className="w-full space-y-6">
      <PageHeader
        title="Demo Bookings"
        description="Manage meeting requests and configure your booking schedule"
      />

      {dbError && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          <strong>Database migration pending.</strong> Run{" "}
          <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-xs">
            npx prisma migrate deploy
          </code>{" "}
          to create the demo-bookings tables, then reload.
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Meetings",  value: total,          icon: Calendar,     color: "text-blue-600 bg-blue-50" },
          { label: "Upcoming",        value: upcomingCount,  icon: Clock,        color: "text-amber-600 bg-amber-50" },
          { label: "Completed",       value: completedCount, icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
          { label: "Cancelled",       value: cancelledCount, icon: XCircle,      color: "text-slate-500 bg-slate-100" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl border border-slate-200 px-5 py-4 flex items-center gap-4">
            <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg", color)}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Schedule settings */}
      <ScheduleSettings initialSlots={enabledSlots} initialDays={availableDays} />

      {/* Meetings table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-1 flex-wrap">
            {FILTER_LABELS.map(({ value, label }) => (
              <Link
                key={value}
                href={filterUrl(value)}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  filter === value ? "bg-[#2081ED] text-white" : "text-slate-600 hover:bg-slate-100",
                )}
              >
                {label}
              </Link>
            ))}
          </div>
          <form method="GET" action="/admin/demo-bookings" className="flex items-center gap-2">
            {filter !== "all" && <input type="hidden" name="filter" value={filter} />}
            <input
              name="search"
              defaultValue={search}
              placeholder="Search name, email, company…"
              className="h-8 rounded-lg border border-slate-200 bg-slate-50 px-3 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 w-56"
            />
            <button type="submit" className="h-8 rounded-lg bg-slate-100 hover:bg-slate-200 px-3 text-[13px] text-slate-600 transition-colors cursor-pointer">
              Search
            </button>
          </form>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60">
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide whitespace-nowrap">Lead</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide whitespace-nowrap">Company</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide whitespace-nowrap">Team</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide whitespace-nowrap">Scheduled</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide whitespace-nowrap">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {meetings.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-slate-400">
                    No meetings found.
                  </td>
                </tr>
              )}
              {meetings.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/60 transition-colors align-top">
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-800">{m.lead.firstName} {m.lead.lastName}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{m.lead.email}</p>
                    <p className="text-xs text-slate-400">{m.lead.country}</p>
                  </td>
                  <td className="px-4 py-3 text-slate-600 max-w-[140px] truncate">{m.lead.company}</td>
                  <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">{m.lead.teamSize}</td>
                  <td className="px-4 py-3">
                    <p className="text-slate-700 text-[13px] whitespace-nowrap">
                      {formatMeetingDatetime(m.scheduledAt, m.timezone)}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{m.timezone}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", STATUS_STYLES[m.status] ?? STATUS_STYLES.SCHEDULED)}>
                      {m.status.charAt(0) + m.status.slice(1).toLowerCase()}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <MeetingActions meetingId={m.id} currentStatus={m.status} meetingTimezone={m.timezone} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100 bg-slate-50/40">
            <p className="text-xs text-slate-500">
              Page {page} of {totalPages} &mdash; {filteredCount} result{filteredCount !== 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-1">
              {page > 1 && (
                <Link href={pageUrl(page - 1)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 transition-colors">← Prev</Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                .map((p, idx, arr) => (
                  <React.Fragment key={p}>
                    {idx > 0 && arr[idx - 1] !== p - 1 && <span className="px-1 text-slate-400 text-xs">…</span>}
                    <Link
                      href={pageUrl(p)}
                      className={cn("rounded-lg px-3 py-1.5 text-xs transition-colors", p === page ? "bg-[#2081ED] text-white" : "border border-slate-200 text-slate-600 hover:bg-slate-100")}
                    >
                      {p}
                    </Link>
                  </React.Fragment>
                ))}
              {page < totalPages && (
                <Link href={pageUrl(page + 1)} className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 transition-colors">Next →</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
