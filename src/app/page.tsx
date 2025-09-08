"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ProductGrid from "@/components/products/ProductGrid";
import { pageTransition, fadeInUp } from "@/lib/animations";

const newArrivals = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 49,
    imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/1"
  },
  {
    id: "2", 
    name: "Urban Denim Jacket",
    price: 129,
    imageUrl: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/2"
  },
  {
    id: "3",
    name: "Classic White Sneakers", 
    price: 89,
    imageUrl: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/3"
  },
  {
    id: "4",
    name: "Minimalist Watch",
    price: 199,
    imageUrl: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    href: "/products/4"
  }
];

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header />
      <main>
        <HeroSection />
        <FeaturedCategories />
        
        {/* New Arrivals Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              New Arrivals
            </h2>
            <p className="text-gray-600 text-lg">
              Fresh styles just dropped
            </p>
          </motion.div>

          <ProductGrid products={newArrivals} />
        </section>
      </main>
    </motion.div>
  );
}