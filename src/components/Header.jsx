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
              

              <Link to="/products/packaging">
                Sustainable Packaging
              </Link>

              <Link to="/products/food">
                Natural Food
              </Link>

              <Link to="/products/agri-waste">
                Special Collection
              </Link>
            </div>
          </div>


          {/* SOLUTIONS DROPDOWN */}
          <div className="nav-dropdown">
            <span className="dropdown-title">
              Solutions <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <Link to="/solutions/hotels">
                Hotels
              </Link>

              <Link to="/solutions/hospitality">
                Hospitality
              </Link>

              <Link to="/solutions/restaurant-hotels-catering">
                Restaurants & Hotels Catering
              </Link>

              <Link to="/solutions/retail-ecommerce">
                Retail & E-commerce
              </Link>
              <Link to="/solutions/corporates-institutions">
               Corporates & Institutions
              </Link>
               <Link to="/solutions/bulk-wholesale">
               Bulk & Wholesale
              </Link>
              <Link to="/solutions/custom-solutions">
               Custom Solutions
              </Link>
            </div>
          </div>


          <Link to="/sustainability" onClick={() => setMobileMenu(false)}>
            Sustainability
          </Link>

          {/* <Link to="/value-chain" onClick={() => setMobileMenu(false)}>
            Value Chain
          </Link>  */}


          {/* RESOURCES DROPDOWN */}
          <div className="nav-dropdown">
            <span className="dropdown-title">
              Resources <span>⌄</span>
            </span>

            <div className="dropdown-menu">
              <Link to="/resources/blog">
                Blog & Insights 
              </Link>

              <Link to="/resources/product-catalogue">
                Product Catalogue
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
            Become a Partner
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