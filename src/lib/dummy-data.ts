// src/lib/dummy-data.ts

// ... (Product interface and menProducts array remain the same) ...

export const womenProducts: Product[] = [
    {
      id: "w1",
      name: "Elegant Blouse",
      price: 69,
      imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w1",
      category: "tops", // <-- Added category
    },
    {
      id: "w2",
      name: "Summer Dress",
      price: 99,
      imageUrl: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w2",
      category: "dresses", // <-- Added category
    },
    {
      id: "w3",
      name: "Denim Skirt",
      price: 59,
      imageUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w3",
      category: "bottoms", // <-- Added category
    },
    {
      id: "w4",
      name: "Cardigan Sweater",
      price: 89,
      imageUrl: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      href: "/products/w4",
      category: "tops", // <-- Added category
    }
  ];