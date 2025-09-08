"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Header from "@/components/layout/Header";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { pageTransition, fadeInUp } from "@/lib/animations";

// Mock product data
const product = {
  id: "1",
  name: "Premium Cotton T-Shirt",
  price: 49,
  description: "Experience comfort and style with our premium cotton t-shirt. Made from 100% organic cotton, this shirt offers exceptional softness and durability. Perfect for casual wear or layering.",
  images: [
    "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Black", "White", "Navy", "Gray"]
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [addToCartState, setAddToCartState] = useState<"default" | "adding" | "added">("default");

  const handleImageChange = (index: number) => {
    if (index !== selectedImage) {
      setSelectedImage(index);
    }
  };

  const handleAddToCart = () => {
    setAddToCartState("adding");
    
    setTimeout(() => {
      setAddToCartState("added");
      // Trigger cart animation in header
      window.dispatchEvent(new CustomEvent('cartUpdate'));
      
      setTimeout(() => {
        setAddToCartState("default");
      }, 1500);
    }, 300);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleImageChange(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-blue' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-charcoal mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-blue">${product.price}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium text-charcoal mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 rounded-lg flex items-center justify-center font-medium transition-colors duration-300 ${
                      selectedSize === size
                        ? 'border-blue bg-blue text-white'
                        : 'border-gray-200 text-charcoal hover:border-blue'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium text-charcoal mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors duration-300 ${
                      selectedColor === color
                        ? 'border-blue bg-blue text-white'
                        : 'border-gray-200 text-charcoal hover:border-blue'
                    }`}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.div className="pt-4">
              <AnimatedButton
                size="lg"
                variant="primary"
                onClick={handleAddToCart}
                disabled={addToCartState === "adding"}
                className="w-full flex items-center justify-center"
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: addToCartState === "added" ? 0 : 1,
                    y: addToCartState === "added" ? -10 : 0
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {addToCartState === "adding" ? "Adding..." : "Add to Cart"}
                </motion.span>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: addToCartState === "added" ? 1 : 0,
                    scale: addToCartState === "added" ? 1 : 0,
                    y: addToCartState === "added" ? 0 : 10
                  }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="absolute"
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}