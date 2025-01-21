const ensureAuthenticated = require("../Middlewares/Auth");

const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  console.log("-----Logged in user detail-----", req.user);

  const products = [
    {
      id: 1,
      name: "Mobile",
      price: 12000,
      description:
        "Latest smartphone with high-resolution camera and long battery life.",
      category: "Electronics",
      imageUrl: "https://example.com/images/mobile.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      price: 70000,
      description:
        "Powerful laptop with fast processor and ample storage for all your needs.",
      category: "Electronics",
      imageUrl: "https://example.com/images/laptop.jpg",
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 5000,
      description:
        "Stylish smartwatch with fitness tracking and notification features.",
      category: "Wearables",
      imageUrl: "https://example.com/images/smartwatch.jpg",
    },
    {
      id: 4,
      name: "Headphones",
      price: 3000,
      description:
        "Noise-cancelling headphones for an immersive audio experience.",
      category: "Accessories",
      imageUrl: "https://example.com/images/headphones.jpg",
    },
  ];

  res.status(200).json(products);
});

module.exports = router;
