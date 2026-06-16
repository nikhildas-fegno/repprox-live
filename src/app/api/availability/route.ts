import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { TIME_SLOTS, DEFAULT_ENABLED_SLOTS, DEFAULT_AVAILABLE_DAYS, slotToUtc } from "@/lib/scheduling";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const timezone = searchParams.get("timezone") ?? "UTC";

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date." }, { status: 400 });
  }

  try {
    const config = await db.scheduleConfig.findUnique({ where: { id: "main" } });
    const enabledSlots = config?.enabledSlots ?? DEFAULT_ENABLED_SLOTS;
    const availableDays = config?.availableDays ?? DEFAULT_AVAILABLE_DAYS;

    const [year, month, day] = date.split("-").map(Number);
    const dayOfWeek = new Date(year, month - 1, day).getDay();
    const dayAllowed = availableDays.includes(dayOfWeek);

    const slotUtcTimes = TIME_SLOTS.map((slot) => slotToUtc(date, slot, timezone));

    const booked = dayAllowed
      ? await db.demoMeeting.findMany({
          where: {
            scheduledAt: { in: slotUtcTimes },
            status: { in: ["SCHEDULED", "RESCHEDULED"] },
          },
          select: { scheduledAt: true },
        })
      : [];

    const bookedMs = new Set(booked.map((m) => m.scheduledAt.getTime()));

    const slots = TIME_SLOTS.map((slot, i) => ({
      slot,
      available: dayAllowed && enabledSlots.includes(slot) && !bookedMs.has(slotUtcTimes[i].getTime()),
    }));

    return NextResponse.json({ slots, availableDays });
  } catch (err) {
    console.error("[availability] DB error:", err);
    // Return slots as unavailable on error — better to block than to show a
    // booked slot as free. The form shows "No available slots" which is safe.
    return NextResponse.json({
      slots: TIME_SLOTS.map((slot) => ({ slot, available: false })),
      availableDays: DEFAULT_AVAILABLE_DAYS,
    }, { status: 200 });
  }
}
