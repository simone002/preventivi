import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "primary" | "success";
  className?: string;
}

export function Badge({ children, variant = "accent", className }: BadgeProps) {
  const variants = {
    accent: "bg-[#C8973A] text-white",
    primary: "bg-[#1B3A4B] text-white",
    success: "bg-emerald-500 text-white",
  };

  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
