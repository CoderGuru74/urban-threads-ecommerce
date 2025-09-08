"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  href: string;
  imageUrl: string;
}

export default function CategoryCard({ title, href, imageUrl }: CategoryCardProps) {
  return (
    <Link href={href} className="block relative group overflow-hidden rounded-lg h-80">
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
        style={{ backgroundImage: `url(${imageUrl})` }}
        whileHover={{ scale: 1.1 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 ease-out"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h3
          className="text-white text-2xl font-bold text-center px-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
      </div>
    </Link>
  );
}