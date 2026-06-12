import { logoutAction } from "@/actions/admin/auth";
import { getSession } from "@/lib/session";
import { LogOut } from "lucide-react";

export async function AdminHeader() {
  const session = await getSession();

  return (
    <header className="h-16 border-b border-blue-100/50 bg-white/60 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-20">
      <div />
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-800">{session?.email ?? "Admin"}</p>
          <p className="text-xs text-slate-400">Administrator</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2081ED] to-blue-400 flex items-center justify-center text-white text-sm font-semibold shadow-sm shadow-blue-200">
          {(session?.email?.[0] ?? "A").toUpperCase()}
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </form>
      </div>
    </header>
  );
}
