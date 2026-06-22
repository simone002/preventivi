import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "dark" | "bordered";
}

export function Card({
  children,
  className,
  hover = true,
  variant = "default",
}: CardProps) {
  const variants = {
    default: "bg-white shadow-sm border border-gray-100",
    dark: "bg-[#0F2231] text-white",
    bordered: "bg-white border-2 border-[#1B3A4B]",
  };

  return (
    <div
      className={cn(
        "rounded-sm overflow-hidden transition-all duration-300",
        variants[variant],
        hover && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
