import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Header.css";
import oryaLogo from "../assets/orya-logo.jpeg";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

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
        {/* <Link to="/" className="orya-logo">
          <div className="logo-main">
            <span className="logo-o">O</span>
            <span>RYA</span>
          </div>

          <div className="logo-subtitle">
            BIO-SOLUTIONS
          </div>
        </Link> */}


        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className={`header-nav ${mobileMenu ? "mobile-active" : ""}`}>

          <Link to="/" onClick={() => setMobileMenu(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMobileMenu(false)}>
            About ORYA
          </Link>


          {/* PRODUCTS DROPDOWN */}
          <div className="nav-dropdown">
            <span className="dropdown-title">
              Products <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <Link to="/products">
                All Products
              </Link>

              <Link to="/products/packaging">
                Sustainable Packaging
              </Link>

              <Link to="/products/food">
                Natural Food
              </Link>

              <Link to="/products/agri-waste">
                Agri-Waste Products
              </Link>
            </div>
          </div>


          {/* SOLUTIONS DROPDOWN */}
          <div className="nav-dropdown">
            <span className="dropdown-title">
              Solutions <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <Link to="/solutions/business">
                Business Solutions
              </Link>

              <Link to="/solutions/sourcing">
                Sustainable Sourcing
              </Link>

              <Link to="/solutions/value-chain">
                Value Chain
              </Link>
            </div>
          </div>


          <Link to="/sustainability" onClick={() => setMobileMenu(false)}>
            Sustainability
          </Link>

          <Link to="/value-chain" onClick={() => setMobileMenu(false)}>
            Value Chain
          </Link>


          {/* RESOURCES DROPDOWN */}
          <div className="nav-dropdown">
            <span className="dropdown-title">
              Resources <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <Link to="/resources/blog">
                Blog
              </Link>

              <Link to="/resources/downloads">
                Downloads
              </Link>

              <Link to="/resources/faqs">
                FAQs
              </Link>
            </div>
          </div>


          <Link to="/contact" onClick={() => setMobileMenu(false)}>
            Contact
          </Link>

        </nav>


        {/* ================= RIGHT SIDE ================= */}
        <div className="header-right">

          {/* CART */}
          <Link to="/cart" className="cart-icon">
            <span className="cart-symbol">🛒</span>
            <span className="cart-count">0</span>
          </Link>


          {/* DEALER BUTTON */}
          <Link to="/dealer" className="dealer-button">
            Become a Dealer
          </Link>


          {/* MOBILE MENU */}
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