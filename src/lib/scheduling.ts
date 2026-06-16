export const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];

export const DEFAULT_ENABLED_SLOTS: string[] = [...TIME_SLOTS];
export const DEFAULT_AVAILABLE_DAYS: number[] = [1, 2, 3, 4, 5]; // Mon–Fri

/** Convert a "YYYY-MM-DD" date + "hh:mm AM/PM" slot + IANA timezone to a UTC Date. */
export function slotToUtc(date: string, slot: string, timezone: string): Date {
  const [year, month, day] = date.split("-").map(Number);
  const [time, meridiem] = slot.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;

  // Get UTC offset for the timezone at the given local date/time
  const localIso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  // Build a UTC date by calculating the offset
  const utcGuess = new Date(`${localIso}Z`);
  const parts = Object.fromEntries(
    formatter.formatToParts(utcGuess).map((p) => [p.type, p.value]),
  );
  const tzLocal = new Date(
    `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:${parts.second}Z`,
  );
  const diff = utcGuess.getTime() - tzLocal.getTime();
  return new Date(utcGuess.getTime() + diff);
}

/** Format a UTC meeting time for display in the given IANA timezone. */
export function formatMeetingDatetime(utcDate: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(utcDate);
}

/** Extract the local slot string (e.g. "10:00 AM") from a stored UTC date. */
export function formatSlotInTimezone(utcDate: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(utcDate);
}
