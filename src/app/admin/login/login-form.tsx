"use client";

import { useActionState } from "react";
import { loginAction } from "@/actions/admin/auth";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const initialState: { error?: string } = {};

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white mb-4 shadow-lg overflow-hidden">
            <Image src="/logo.png" alt="Repprox" width={48} height={48} className="object-contain" />
          </div>
          <h1 className="text-xl font-semibold text-white">Repprox Admin</h1>
          <p className="text-sm text-slate-400 mt-1">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-[#1e293b] rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <form action={action} className="space-y-5">
            {state?.error && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                {state.error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder=""
                className="w-full rounded-lg bg-[#0f172a] border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#2081ED] focus:ring-2 focus:ring-[#2081ED]/20 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••••"
                className="w-full rounded-lg bg-[#0f172a] border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#2081ED] focus:ring-2 focus:ring-[#2081ED]/20 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-semibold py-2.5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {pending && <Loader2 className="w-4 h-4 animate-spin" />}
              {pending ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
