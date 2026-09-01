import type { ReactNode } from "react";

const inputCn =
  "w-full rounded-2xl border border-sand-300 bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-clay-400 focus:outline-none focus:ring-4 focus:ring-clay-500/10";

export function Field({
  label,
  htmlFor,
  hint,
  required,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-semibold text-ink-800">
        {label}
        {required && <span className="text-clay-600"> *</span>}
      </label>
      {children}
      {hint && <p className="mt-2 text-[12.5px] text-ink-400">{hint}</p>}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputCn} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputCn} min-h-32 resize-y ${props.className ?? ""}`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputCn} appearance-none ${props.className ?? ""}`} />;
}
