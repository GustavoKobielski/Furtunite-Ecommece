import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'; // Pagina Home
import About from './pages/About/About'; // Pagina About
import Contact from './pages/Contact/Contact'; // Pagina Contact
import Shop from './pages/Shop/Shop'; // Pagina Shop

function App() {
  return (
    <Router>
      <div>
        {/* Navbar aq */}

        <Routes>
          <Route path="/" element={<Home />} />          {/* Página Home */}
          <Route path="/about" element={<About />} />    {/* Página About */}
          <Route path="/contact" element={<Contact />} />{/* Página Contact */}
          <Route path="/shop" element={<Shop />} />      {/* Página Shop */}
        </Routes>

        {/* Footer aq */}
      </div>
    </Router>
  )
}

export default App
