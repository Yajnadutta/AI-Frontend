import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./components/about/About";
import OrySustainabilityPage from "./components/sustainability/OryaSustainability";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sustainability" element={<OrySustainabilityPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;