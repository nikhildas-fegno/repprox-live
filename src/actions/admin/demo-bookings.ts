"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

type Result = { error?: string };

export async function completeMeeting(meetingId: string): Promise<Result> {
  try {
    await db.demoMeeting.update({
      where: { id: meetingId },
      data: { status: "COMPLETED" },
    });
    revalidatePath("/admin/demo-bookings");
    return {};
  } catch {
    return { error: "Failed to update meeting." };
  }
}

export async function cancelMeeting(meetingId: string): Promise<Result> {
  try {
    await db.demoMeeting.update({
      where: { id: meetingId },
      data: { status: "CANCELLED" },
    });
    revalidatePath("/admin/demo-bookings");
    return {};
  } catch {
    return { error: "Failed to cancel meeting." };
  }
}

export async function updateScheduleConfig(
  enabledSlots: string[],
  availableDays: number[],
): Promise<Result> {
  try {
    await db.scheduleConfig.upsert({
      where: { id: "main" },
      create: { id: "main", enabledSlots, availableDays },
      update: { enabledSlots, availableDays },
    });
    revalidatePath("/admin/demo-bookings");
    return {};
  } catch {
    return { error: "Failed to save schedule config." };
  }
}
