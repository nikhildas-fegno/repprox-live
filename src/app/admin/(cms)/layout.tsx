import { AdminSidebar } from "@/components/admin/sidebar";
import { AdminHeader } from "@/components/admin/header";

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f7ff] via-white to-[#e8f3ff] text-ink flex">
      <AdminSidebar />
      <div className="flex-1 ml-60 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
