"use client";

import { useTransition, useState } from "react";
import { Trash2, Loader2, AlertTriangle } from "lucide-react";

interface DeleteButtonProps {
  action: () => Promise<void>;
  label?: string;
}

export function DeleteButton({ action, label = "Item" }: DeleteButtonProps) {
  const [pending, start] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    start(async () => {
      await action();
      setIsOpen(false);
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        disabled={pending}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 disabled:opacity-50 transition-colors border border-red-100 cursor-pointer"
      >
        {pending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
        {pending ? "Deleting…" : `Delete`}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Delete {label}</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Are you sure you want to delete this {label.toLowerCase()}? This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                onClick={() => setIsOpen(false)}
                disabled={pending}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={pending}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors disabled:opacity-60 shadow-sm shadow-red-600/20 cursor-pointer"
              >
                {pending && <Loader2 className="w-4 h-4 animate-spin" />}
                {pending ? "Deleting…" : "Yes, delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
