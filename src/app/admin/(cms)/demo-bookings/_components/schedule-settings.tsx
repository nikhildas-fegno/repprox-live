"use client";

import React from "react";
import { updateScheduleConfig } from "@/actions/admin/demo-bookings";
import { TIME_SLOTS } from "@/lib/scheduling";

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function ScheduleSettings({
  initialSlots,
  initialDays,
}: {
  initialSlots: string[];
  initialDays: number[];
}) {
  const [slots, setSlots] = React.useState<string[]>(initialSlots);
  const [days, setDays] = React.useState<number[]>(initialDays);
  const [saving, setSaving] = React.useState(false);
  const [msg, setMsg] = React.useState<{ ok: boolean; text: string } | null>(null);

  const toggleSlot = (slot: string) =>
    setSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot],
    );

  const toggleDay = (d: number) =>
    setDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d].sort((a, b) => a - b),
    );

  const handleSave = async () => {
    setSaving(true);
    setMsg(null);
    const res = await updateScheduleConfig(slots, days);
    setSaving(false);
    setMsg(res.error ? { ok: false, text: res.error } : { ok: true, text: "Schedule saved." });
    setTimeout(() => setMsg(null), 3000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h2 className="text-sm font-semibold text-slate-800 mb-4">Booking Schedule</h2>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Available days */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Available Days</p>
          <div className="flex gap-1.5 flex-wrap">
            {DAY_NAMES.map((name, i) => (
              <button
                key={i}
                type="button"
                onClick={() => toggleDay(i)}
                className={[
                  "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                  days.includes(i)
                    ? "bg-[#2081ED] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200",
                ].join(" ")}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Available time slots */}
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Time Slots</p>
          <div className="flex gap-1.5 flex-wrap">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => toggleSlot(slot)}
                className={[
                  "rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                  slots.includes(slot)
                    ? "bg-[#2081ED] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200",
                ].join(" ")}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-[#2081ED] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1a6fd4] disabled:opacity-60 transition-colors cursor-pointer"
        >
          {saving ? "Saving…" : "Save Schedule"}
        </button>
        {msg && (
          <span className={`text-xs font-medium ${msg.ok ? "text-emerald-600" : "text-red-500"}`}>
            {msg.text}
          </span>
        )}
      </div>
    </div>
  );
}
