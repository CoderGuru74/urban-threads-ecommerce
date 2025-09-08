// src/app/women/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductGrid from "@/components/products/ProductGrid";
import { pageTransition, fadeInUp } from "@/lib/animations";
import { womenProducts } from "@/lib/dummy-data"; // <-- Import from central file

export default function WomenPage() {
  const [products, setProducts] = useState(womenProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = async (filter: string) => {
    if (filter === selectedFilter) return;
    
    setIsLoading(true);
    setSelectedFilter(filter);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (filter === "all") {
      setProducts(womenProducts);
    } else {
      const filteredProducts = womenProducts.filter(
        (product) => product.category === filter
      );
      setProducts(filteredProducts);
    }
    
    setIsLoading(false);
  };

  const filters = [
    { id: "all", label: "All Items" },
    { id: "tops", label: "Tops" },
    { id: "bottoms", label: "Bottoms" },
    { id: "dresses", label: "Dresses" },
  ];

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
          <h1 className="text-4xl font-heading font-bold text-charcoal mb-4">
            Women&apos;s Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Elegant styles for the modern woman
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'border-blue bg-blue text-white shadow-md'
                  : 'border-gray-200 text-charcoal hover:border-blue hover:text-blue'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <ProductGrid products={products} isLoading={isLoading} />
      </main>
    </motion.div>
  );
}