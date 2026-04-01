import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const products = [
  {
    id: '1',
    name: 'WE Tech Laptop Pro',
    description: 'High-performance laptop for developers and students. Features a 15-inch display, 16GB RAM, and 512GB SSD.',
    price: 1299.99,
    image: '/images/photo-1496181133206-80ce9b88a853.avif',
    category: 'Laptops',
    featured: true
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    description: 'Stay connected with notifications, fitness tracking, and heart rate monitoring.',
    price: 249.99,
    image: '/images/photo-1541807084-5c52b6b84594.avif',
    category: 'Accessories',
    featured: true
  },
  {
    id: '3',
    name: 'Noise Cancelling Headphones',
    description: 'Premium sound quality with active noise cancellation for immersive listening.',
    price: 349.99,
    image: '/images/photo-1505740420928-5aac64646d1d.avif',
    category: 'Audio',
    featured: true
  },
  {
    id: '4',
    name: 'Mechanical Keyboard RGB',
    description: 'Tactile mechanical switches with customizable RGB lighting for the ultimate typing experience.',
    price: 129.99,
    image: '/images/photo-1504410269892-74c063a5d8d3.avif',
    category: 'Accessories'
  },
  {
    id: '5',
    name: 'Ultra-Wide Monitor 34"',
    description: 'Boost your productivity with a massive ultra-wide curved display.',
    price: 599.99,
    image: '/images/photo-1509276972460-8530e2f4a1d4.avif',
    category: 'Monitors'
  },
  {
    id: '6',
    name: 'Wireless Gaming Mouse',
    description: 'High-precision sensor with zero-latency wireless connection.',
    price: 79.99,
    image: '/images/photo-1558841026-9d4c9a0a0e6e.avif',
    category: 'Accessories'
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/products", (req, res) => {
    res.json(products);
  });

  app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  });

  app.post("/api/checkout", (req, res) => {
    const { items, total, customer } = req.body;
    console.log("New Order Received:", { items, total, customer });
    res.json({ success: true, orderId: `ORD-${Math.floor(Math.random() * 1000000)}` });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
