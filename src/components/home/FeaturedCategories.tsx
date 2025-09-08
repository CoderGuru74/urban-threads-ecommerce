"use client";

import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function FeaturedCategories() {
  const categories = [
    {
      title: "Men's Collection",
      href: "/men",
      imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Women's Collection",
      href: "/women", 
      imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Accessories",
      href: "/accessories",
      imageUrl: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="text-center mb-16"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl font-bold text-charcoal mb-4"
        >
          Featured Collections
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600 text-lg"
        >
          Explore our curated selection of premium fashion
        </motion.p>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeInUp}
            custom={index}
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}