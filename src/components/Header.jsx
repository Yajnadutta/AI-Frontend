import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styling/Header.css";
import oryaLogo from "../assets/orya-logo.jpeg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // helper: is current path inside this section (for dropdown parents)
  const isSectionActive = (prefix) => location.pathname.startsWith(prefix);

  // helper: is this Resources anchor the one currently in view (path + hash match)
  const isResourceAnchorActive = (hash) =>
    location.pathname === "/resources" && location.hash === hash;

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

         
          <div className="nav-dropdown">
            <span
              className={`dropdown-title ${isSectionActive("/products") ? "nav-active" : ""}`}
            >
              Products
            </span>
          </div>

     

          <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                onClick={() => setMobileMenu(false)}
              >
                Solutions
              </NavLink>
          {/* <div className="nav-dropdown">
            <span
              className={`dropdown-title ${isSectionActive("/solutions") ? "nav-active" : ""}`}
            >
              Solutions 
              <span>⌄</span> 
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
          </div> */}

          <NavLink
            to="/sustainability"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMobileMenu(false)}
          >
            Sustainability
          </NavLink>

          {/* RESOURCES DROPDOWN */}
          {/*
            These four items all live as sections on the single /resources
            page (see Resources.jsx), so they link to in-page anchors
            (/resources#id) instead of separate routes. ScrollToHashElement
            (rendered inside Resources.jsx) handles the actual scrolling,
            including when you're already on /resources and just switching
            anchors.
          */}
          <div className="nav-dropdown">
            <span
              className={`dropdown-title ${isSectionActive("/resources") ? "nav-active" : ""}`}
            >
              Resources <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <Link
                to="/resources#blog-insights"
                className={isResourceAnchorActive("#blog-insights") ? "nav-active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                Blog & Insights
              </Link>
              <Link
                to="/resources#product-catalogue"
                className={isResourceAnchorActive("#product-catalogue") ? "nav-active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                Product Catalogue
              </Link>
              <Link
                to="/resources#downloads"
                className={isResourceAnchorActive("#downloads") ? "nav-active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                Downloads
              </Link>
              <Link
                to="/resources#faqs"
                className={isResourceAnchorActive("#faqs") ? "nav-active" : ""}
                onClick={() => setMobileMenu(false)}
              >
                FAQs
              </Link>
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