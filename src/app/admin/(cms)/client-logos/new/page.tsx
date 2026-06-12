import { PageHeader } from "@/components/admin/page-header";
import ClientLogoForm from "../client-logo-form";

export default function NewClientLogoPage() {
  return (
    <div className="w-full max-w-xl">
      <PageHeader title="New Client Logo" />
      <ClientLogoForm />
    </div>
  );
}
