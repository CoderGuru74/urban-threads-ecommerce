"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Heart, Eye } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  href: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Trigger cart animation
    window.dispatchEvent(new CustomEvent('cartUpdate'));
  };

  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <Link href={product.href} className="block">
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Hover Action Buttons */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 right-4 flex flex-col space-y-2"
              >
                <motion.button
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ delay: 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsWishlisted(!isWishlisted);
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                    isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-charcoal hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </motion.button>
                
                <motion.button
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ delay: 0.2 }}
                  className="w-10 h-10 bg-white text-charcoal rounded-full flex items-center justify-center shadow-lg hover:bg-charcoal hover:text-white transition-colors duration-300"
                >
                  <Eye className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-charcoal mb-2 group-hover:text-blue transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-charcoal mb-4">
            ${product.price}
          </p>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <AnimatedButton
          variant="outline"
          size="sm"
          className="w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </AnimatedButton>
      </div>
    </motion.div>
  );
}