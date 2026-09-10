import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styling/Header.css";
import { useCart } from "../components/context/CartContext";
import oryaLogo from "../assets/orya-logo.jpeg";
import PartnerForm from "../components/home/PartnerForm";
const Header = () => {
const [mobileMenu, setMobileMenu] = useState(false);
const [showPartnerModal, setShowPartnerModal] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

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

         
         <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                onClick={() => setMobileMenu(false)}
              >
                Products
              </NavLink>

     

          <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                onClick={() => setMobileMenu(false)}
              >
                Solutions
              </NavLink>
        

          <NavLink
            to="/sustainability"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
            onClick={() => setMobileMenu(false)}
          >
            Sustainability
          </NavLink>

         
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
            <span className="cart-count">{cartCount}</span>
          </Link>

         <button
            type="button"
            className="dealer-button"
            onClick={() => {
              setShowPartnerModal(true);
              setMobileMenu(false);
            }}
          >
            Become a Partner
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>

      </div>
      {showPartnerModal && (
  <div
    className="partner-modal-overlay"
    onClick={() => setShowPartnerModal(false)}
  >
    <div
      className="partner-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <PartnerForm
        onClose={() => setShowPartnerModal(false)}
      />
    </div>
  </div>
)}
    </header>
  );
};

export default Header;