"use client";

import React from "react";
import { completeMeeting, cancelMeeting } from "@/actions/admin/demo-bookings";

type Confirm = "complete" | "cancel" | null;

export function MeetingActions({
  meetingId,
  currentStatus,
}: {
  meetingId: string;
  currentStatus: string;
  meetingTimezone: string;
}) {
  const [busy, setBusy] = React.useState(false);
  const [confirm, setConfirm] = React.useState<Confirm>(null);
  const [err, setErr] = React.useState<string | null>(null);

  const run = async (fn: () => Promise<{ error?: string }>) => {
    setBusy(true);
    setErr(null);
    const res = await fn();
    setBusy(false);
    if (res.error) { setErr(res.error); return; }
    setConfirm(null);
  };

  if (["COMPLETED", "CANCELLED"].includes(currentStatus)) return null;

  return (
    <>
      <div className="flex flex-col gap-1.5 items-end">
        <div className="flex gap-1.5">
          <button
            type="button"
            disabled={busy}
            onClick={() => { setErr(null); setConfirm("complete"); }}
            className="rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 disabled:opacity-50 transition-colors cursor-pointer"
          >
            Complete
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => { setErr(null); setConfirm("cancel"); }}
            className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 disabled:opacity-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
        {err && <p className="text-[11px] text-red-500">{err}</p>}
      </div>

      {/* Confirmation dialog */}
      {confirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setConfirm(null); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              {confirm === "complete" ? "Mark as completed?" : "Cancel this meeting?"}
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              {confirm === "complete"
                ? "This will mark the demo as completed. This action cannot be undone."
                : "This will cancel the booking and free up the time slot. This action cannot be undone."}
            </p>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setConfirm(null)}
                disabled={busy}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-colors cursor-pointer"
              >
                Go back
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() =>
                  run(() =>
                    confirm === "complete"
                      ? completeMeeting(meetingId)
                      : cancelMeeting(meetingId)
                  )
                }
                className={[
                  "rounded-lg px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 transition-colors cursor-pointer",
                  confirm === "complete"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-red-600 hover:bg-red-700",
                ].join(" ")}
              >
                {busy ? "Saving…" : confirm === "complete" ? "Yes, complete" : "Yes, cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
