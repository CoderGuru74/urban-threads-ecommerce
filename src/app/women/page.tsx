"use client";

import { motion } from "framer-motion";
import ProductGrid from "@/components/products/ProductGrid";
import { pageTransition, fadeInUp } from "@/lib/animations";

const womenProducts = [
  {
    id: "w1",
    name: "Elegant Blouse",
    price: 69,
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/w1"
  },
  {
    id: "w2",
    name: "Summer Dress",
    price: 99,
    imageUrl: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/w2"
  },
  {
    id: "w3",
    name: "Denim Skirt",
    price: 59,
    imageUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/w3"
  },
  {
    id: "w4",
    name: "Cardigan Sweater",
    price: 89,
    imageUrl: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/w4"
  }
];

export default function WomenPage() {
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
          <h1 className="text-4xl font-bold text-charcoal mb-4">Women's Collection</h1>
          <p className="text-gray-600 text-lg">Elegant styles for the modern woman</p>
        </motion.div>

        <ProductGrid products={womenProducts} />
      </main>
    </motion.div>
  );
}