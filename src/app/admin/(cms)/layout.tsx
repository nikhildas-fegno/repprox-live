import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { AdminSidebar } from "@/components/admin/sidebar";
import { AdminHeader } from "@/components/admin/header";

export default async function CmsLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f3ff] text-ink flex">
      <AdminSidebar />
      <div className="flex-1 ml-60 relative min-h-screen">
        <AdminHeader />
        <main className="pt-16 px-8 pb-8 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
