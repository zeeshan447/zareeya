import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Zeeshan",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Usama",
      email: "guest@example.com",
      password: bcrypt.hashSync("asdf", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "White potato",
      category: "Vegetables",
      image: "/images/d1.jpg",
      price: 120,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Apples",
      category: "Fruits",
      image: "/images/d2.jpg",
      price: 100,
      countInStock: 10,
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Onions",
      category: "Vegetables",
      image: "/images/d3.jpg",
      price: 220,
      countInStock: 10,
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Tomatos",
      category: "Vegetables",
      image: "/images/d4.jpg",
      price: 78,
      countInStock: 10,
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Orange",
      category: "Fruits",
      image: "/images/d5.jpg",
      price: 65,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lettuce",
      category: "Vegetables",
      image: "/images/d6.jpg",
      price: 139,
      countInStock: 10,
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};
export default data;
