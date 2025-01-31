import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/reset.css';
import './style/global.css';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Define the Product interface (or type)
interface Product {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  BeforePrice?: number;
  // ... other product properties
}

// Define the shape of the context state
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

// Cria o contexto para o carrinho
const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {}, // default no-op function
});

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} foi adicionado ao carrinho!`); // Ou outra lógica
  };

  return (
    <Router>
      <CartContext.Provider value={{ cart, addToCart }}>
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>

          <Footer />
        </div>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
export { CartContext };
