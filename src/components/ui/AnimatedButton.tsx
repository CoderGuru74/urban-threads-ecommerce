"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

export default function AnimatedButton({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  onClick,
  disabled = false
}: AnimatedButtonProps) {
  const baseClasses = "font-medium rounded-lg transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-charcoal text-white hover:bg-charcoal/90",
    secondary: "bg-blue text-white hover:bg-blue/90",
    outline: "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        boxShadow: disabled ? "none" : "0 4px 20px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}