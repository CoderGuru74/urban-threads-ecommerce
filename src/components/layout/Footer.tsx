// src/components/layout/Footer.tsx

import Link from 'next/link';
import AnimatedLink from '../ui/AnimatedLink';
import AnimatedButton from '../ui/AnimatedButton';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-charcoal mb-4">Company</h3>
            <ul className="space-y-2">
              <li><AnimatedLink href="/about">About Us</AnimatedLink></li>
              <li><AnimatedLink href="/careers">Careers</AnimatedLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-charcoal mb-4">Help</h3>
            <ul className="space-y-2">
              <li><AnimatedLink href="/faq">FAQ</AnimatedLink></li>
              <li><AnimatedLink href="/contact">Contact Us</AnimatedLink></li>
              <li><AnimatedLink href="/shipping">Shipping & Returns</AnimatedLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-charcoal mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><AnimatedLink href="/terms">Terms of Service</AnimatedLink></li>
              <li><AnimatedLink href="/privacy">Privacy Policy</AnimatedLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-charcoal mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-2">Subscribe for the latest updates.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <AnimatedButton variant="primary" size="sm">Subscribe</AnimatedButton>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Urban Threads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}