import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styling/Header.css";
import oryaLogo from "../assets/orya-logo.jpeg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // helper: is current path inside this section (for dropdown parents)
  const isSectionActive = (prefix) => location.pathname.startsWith(prefix);

  return (
    <header className="main-header">
      <div className="header-container">

        {/* ================= LOGO ================= */}
        <Link to="/" className="orya-logo">
          <img
            src={oryaLogo}
            alt="ORYA Bio-Solutions"
            className="orya-logo-image"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className={`header-nav ${mobileMenu ? "mobile-active" : ""}`}>

          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMobileMenu(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMobileMenu(false)}
          >
            About ORYA
          </NavLink>

          {/* PRODUCTS DROPDOWN */}
          <div className="nav-dropdown">
            <span
              className={`dropdown-title ${isSectionActive("/products") ? "nav-active" : ""}`}
            >
              Products
            </span>
          </div>

          {/* SOLUTIONS DROPDOWN */}
          <div className="nav-dropdown">
            <span
              className={`dropdown-title ${isSectionActive("/solutions") ? "nav-active" : ""}`}
            >
              Solutions <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <NavLink to="/solutions/hotels" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Hotels
              </NavLink>
              <NavLink to="/solutions/hospitality" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Hospitality
              </NavLink>
              <NavLink to="/solutions/restaurant-hotels-catering" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Restaurants & Hotels Catering
              </NavLink>
              <NavLink to="/solutions/retail-ecommerce" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Retail & E-commerce
              </NavLink>
              <NavLink to="/solutions/corporates-institutions" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Corporates & Institutions
              </NavLink>
              <NavLink to="/solutions/bulk-wholesale" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Bulk & Wholesale
              </NavLink>
              <NavLink to="/solutions/custom-solutions" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Custom Solutions
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/sustainability"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMobileMenu(false)}
          >
            Sustainability
          </NavLink>

          {/* RESOURCES DROPDOWN */}
          <div className="nav-dropdown">
            <span
              className={`dropdown-title ${isSectionActive("/resources") ? "nav-active" : ""}`}
            >
              Resources <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <NavLink to="/resources/blog" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Blog & Insights
              </NavLink>
              <NavLink to="/resources/product-catalogue" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Product Catalogue
              </NavLink>
              <NavLink to="/resources/downloads" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Downloads
              </NavLink>
              <NavLink to="/resources/faqs" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                FAQs
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMobileMenu(false)}
          >
            Contact
          </NavLink>

        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="header-right">
          <Link to="/cart" className="cart-icon">
            <span className="cart-symbol">🛒</span>
            <span className="cart-count">0</span>
          </Link>

          <Link to="/dealer" className="dealer-button">
            Become a Partner
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;