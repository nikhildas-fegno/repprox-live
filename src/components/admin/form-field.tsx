import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  error?: string[];
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({ label, name, error, required, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error?.map((e) => (
        <p key={e} className="text-xs text-red-500">{e}</p>
      ))}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-[#2081ED] focus:ring-2 focus:ring-[#2081ED]/10 transition-all disabled:opacity-60";

export function TextInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(inputCls, className)} {...props} />;
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={5} className={cn(inputCls, "resize-y", className)} {...props} />;
}

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(inputCls, className)} {...props}>
      {children}
    </select>
  );
}

export function FormActions({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-3 pt-2">{children}</div>;
}
