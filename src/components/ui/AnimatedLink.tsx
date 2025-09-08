"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  return (
    <Link href={href} className={cn("relative group", className)}>
      <motion.span
        className="text-charcoal group-hover:text-blue transition-colors duration-300 ease-out"
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-blue origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </Link>
  );
}