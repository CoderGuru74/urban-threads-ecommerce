// src/lib/dummy-data.ts

// ... (The Product interface and womenProducts array remain the same) ...

export const menProducts: Product[] = [
    {
      id: "m1",
      name: "Classic White T-Shirt",
      price: 39,
      imageUrl: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m1",
      category: "t-shirts", // <-- Added category
    },
    {
      id: "m2",
      name: "Denim Jacket",
      price: 129,
      imageUrl: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m2",
      category: "jackets", // <-- Added category
    },
    {
      id: "m3",
      name: "Cotton Polo Shirt",
      price: 59,
      imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m3",
      category: "t-shirts", // <-- Added category
    },
    {
      id: "m4",
      name: "Casual Chinos",
      price: 79,
      imageUrl: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m4",
      category: "pants", // <-- Added category
    },
    {
      id: "m5",
      name: "Black Hoodie",
      price: 89,
      imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop", // Placeholder image
      href: "/products/m5",
      category: "jackets", // <-- Added category
    },
    {
      id: "m6",
      name: "Leather Boots",
      price: 199,
      imageUrl: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/m6",
      category: "shoes", // <-- Added category
    }
  ];