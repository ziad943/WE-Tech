import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('we-tech-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('we-tech-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border border-white/10 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar cartCount={cartCount} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products.filter(p => p.featured)} onAddToCart={handleAddToCart} />} />
            <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/products/:id" element={<ProductDetails products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={<Cart 
              cartItems={cartItems} 
              onUpdateQuantity={handleUpdateQuantity} 
              onRemoveItem={handleRemoveItem} 
            />} />
            <Route path="/checkout" element={<Checkout 
              cartItems={cartItems} 
              onClearCart={handleClearCart} 
            />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

