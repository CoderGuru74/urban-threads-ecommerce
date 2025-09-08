"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import AnimatedLink from "../ui/AnimatedLink";
import { fadeInUp, slideDown } from "@/lib/animations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartAnimation, setCartAnimation] = useState(false);

  // Simulate cart count updates
  useEffect(() => {
    const handleCartUpdate = () => {
      setCartAnimation(true);
      setCartCount(prev => prev + 1);
      setTimeout(() => setCartAnimation(false), 600);
    };

    // Listen for cart updates (you'd implement this with your cart logic)
    window.addEventListener('cartUpdate', handleCartUpdate);
    return () => window.removeEventListener('cartUpdate', handleCartUpdate);
  }, []);

  const navigationLinks = [
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sale", href: "/sale" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.h1 
              className="text-2xl font-bold text-charcoal"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Urban Threads
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <AnimatedLink key={link.name} href={link.href}>
                {link.name}
              </AnimatedLink>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-charcoal hover:text-blue transition-colors duration-300"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-charcoal hover:text-blue transition-colors duration-300"
            >
              <User className="w-5 h-5" />
            </motion.button>

            {/* Animated Cart Icon */}
            <motion.button
              className="relative text-charcoal hover:text-blue transition-colors duration-300"
              animate={cartAnimation ? { 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              } : {}}
              transition={{ duration: 0.6 }}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-charcoal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideDown}
              className="md:hidden py-4 border-t border-gray-100"
            >
              <nav className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AnimatedLink href={link.href}>
                      {link.name}
                    </AnimatedLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}