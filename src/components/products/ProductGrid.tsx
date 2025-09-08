"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  href: string;
}

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export default function ProductGrid({ products, isLoading = false }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-blue border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={fadeInUp}
          custom={index}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}