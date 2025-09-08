"use client";

import { motion } from "framer-motion";
import ProductGrid from "@/components/products/ProductGrid";
import { pageTransition, fadeInUp } from "@/lib/animations";

const accessoryProducts = [
  {
    id: "a1",
    name: "Leather Handbag",
    price: 149,
    imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/a1"
  },
  {
    id: "a2",
    name: "Minimalist Watch",
    price: 199,
    imageUrl: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/a2"
  },
  {
    id: "a3",
    name: "Classic Sunglasses",
    price: 79,
    imageUrl: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/a3"
  },
  {
    id: "a4",
    name: "Silk Scarf",
    price: 49,
    imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/a4"
  }
];

export default function AccessoriesPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <motion.div variants={fadeInUp} className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Accessories</h1>
          <p className="text-gray-600 text-lg">Complete your look with our curated accessories</p>
        </motion.div>

        <ProductGrid products={accessoryProducts} />
      </main>
    </motion.div>
  );
}