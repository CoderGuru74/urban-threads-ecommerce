// src/lib/dummy-data.ts

// FIX: The Product interface is now defined here
export interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    href: string;
    category: 'men' | 'women' | 'accessories' | 't-shirts' | 'jackets' | 'pants' | 'shoes' | 'tops' | 'bottoms' | 'dresses';
  }
  
  export const menProducts: Product[] = [
      {
      id: "m1",
      name: "Classic White T-Shirt",
      price: 39,
      imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m1",
      category: "t-shirts",
    },
    {
      id: "m2",
      name: "Denim Jacket",
      price: 129,
      imageUrl: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m2",
      category: "jackets",
    },
    {
      id: "m3",
      name: "Cotton Polo Shirt",
      price: 59,
      imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m3",
      category: "t-shirts",
    },
    {
      id: "m4",
      name: "Casual Chinos",
      price: 79,
      imageUrl: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m4",
      category: "pants",
    },
    {
      id: "m5",
      name: "Black Hoodie",
      price: 89,
      imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m5",
      category: "jackets",
    },
    {
      id: "m6",
      name: "Leather Boots",
      price: 199,
      imageUrl: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m6",
      category: "shoes",
    }
  ];
  
  export const womenProducts: Product[] = [
    {
      id: "w1",
      name: "Elegant Blouse",
      price: 69,
      imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w1",
      category: "tops",
    },
    {
      id: "w2",
      name: "Summer Dress",
      price: 99,
      imageUrl: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w2",
      category: "dresses",
    },
    {
      id: "w3",
      name: "Denim Skirt",
      price: 59,
      imageUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w3",
      category: "bottoms",
    },
    {
      id: "w4",
      name: "Cardigan Sweater",
      price: 89,
      imageUrl: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w4",
      category: "tops",
    }
  ];
  