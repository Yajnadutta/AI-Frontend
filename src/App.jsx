import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/context/CartContext";

import Home from "./components/home/Home";
import About from "./components/about/About";
import OrySustainabilityPage from "./components/sustainability/OryaSustainability";
import Contact from "./components/contact/Contact";
import Resources from "./components/resources/Resources";
import ScrollToTop from "./components/ScrollToTop";
import Solutions from "./components/solutions/Solutions";
import ProductsPage from "./components/products/ProductsPage";
import Cart from "./components/products/Cart";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sustainability" element={<OrySustainabilityPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;