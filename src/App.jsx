import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import OrySustainabilityPage from "./components/sustainability/OryaSustainability";
import Contact from "./components/contact/Contact";
import Resources from "./components/resources/Resources";
import ScrollToTop from "./components/ScrollToTop";
import Solutions from "./components/solutions/Solutions";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sustainability" element={<OrySustainabilityPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
         <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;