import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const variants = {
  primary:
    "bg-[#1B3A4B] text-white hover:bg-[#2D5F78] border border-transparent shadow-md hover:shadow-lg",
  outline:
    "bg-transparent text-[#1B3A4B] border border-[#1B3A4B] hover:bg-[#1B3A4B] hover:text-white",
  ghost:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white",
  accent:
    "bg-[#C8973A] text-white hover:bg-[#E8B85A] border border-transparent shadow-md hover:shadow-lg",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 rounded-sm cursor-pointer",
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
