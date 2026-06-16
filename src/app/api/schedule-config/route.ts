import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { DEFAULT_ENABLED_SLOTS, DEFAULT_AVAILABLE_DAYS } from "@/lib/scheduling";

export const runtime = "nodejs";

export async function GET() {
  try {
    const config = await db.scheduleConfig.findUnique({ where: { id: "main" } });
    return NextResponse.json({
      availableDays: config?.availableDays ?? DEFAULT_AVAILABLE_DAYS,
      enabledSlots: config?.enabledSlots ?? DEFAULT_ENABLED_SLOTS,
    });
  } catch {
    return NextResponse.json({
      availableDays: DEFAULT_AVAILABLE_DAYS,
      enabledSlots: DEFAULT_ENABLED_SLOTS,
    });
  }
}
