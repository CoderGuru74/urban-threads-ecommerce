// src/app/women/page.tsx
"use client";

import { motion } from "framer-motion";
import ProductGrid from "@/components/products/ProductGrid";
import { womenProducts } from "@/lib/dummy-data";
import { pageTransition, fadeInUp } from "@/lib/animations";

export default function WomenPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <main>
        <motion.div variants={fadeInUp} className="text-center mb-12">
          {/* FIX 1: The apostrophe in "Women's" is now correct */}
          <h1 className="text-4xl font-heading font-bold text-charcoal">
            Women&apos;s Collection
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Effortless elegance and contemporary design.
          </p>
        </motion.div>

        <ProductGrid products={womenProducts} />
      </main>
    </motion.div>
  );
}