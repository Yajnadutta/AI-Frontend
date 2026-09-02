import React from "react";
import { Link } from "react-router-dom";
import "../styling/Footer.css";

import oryaLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= COMPANY ================= */}
        <div className="footer-company">

          <Link to="/" className="footer-logo">
            <img
              src={oryaLogo}
              alt="ORYA Bio-Solutions"
            />
          </Link>

          <p className="footer-tagline">
            Sustainable Packaging • Natural Food •
            Circular Value Chains
          </p>

          <p className="footer-description">
            Building a better tomorrow through sustainable solutions.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="footer-social">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="YouTube">
              ▶
            </a>

          </div>

        </div>


        {/* ================= QUICK LINKS ================= */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About ORYA</Link>
          <Link to="/products">Products</Link>
          <Link to="/solutions">Solutions</Link> 
          <Link to="/sustainability">Sustainability</Link> 
          {/* <Link to="/value-chain">Value Chain</Link> */}
         <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* ================= PRODUCTS ================= */}
        <div className="footer-column">

          <h3>Our Products</h3>

          <Link to="/products/packaging">
            Sustainable Packaging
          </Link>

          <Link to="/products/food">
            Natural Food
          </Link>

          <Link to="/products/agri-waste">
            Agri-Waste Products
          </Link>

          {/* <Link to="/products/biodegradable-bags">
            Biodegradable Bags
          </Link>

          <Link to="/products/bamboo">
            Bamboo Products
          </Link>

          <Link to="/products/bagasse">
            Bagasse Products
          </Link> */}

          <Link to="/products/sustainable-sourcing">
            Sustainable Sourcing
          </Link>

        </div>


        {/* ================= BUSINESS ================= */}
        <div className="footer-column">

          <h3>For Businesses</h3>

          <Link to="/bulk-orders">
            Bulk Orders
          </Link>

          {/* <Link to="/dealer">
            Dealer Enquiry
          </Link> */}

          <Link to="/wholesale">
            Wholesale
          </Link>

          <Link to="/custom-solutions">
            Custom Solutions
          </Link>

          <Link to="/partner">
            Partnerships
          </Link>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-item">

            <span className="contact-icon">
              📍
            </span>

            <p>
             
              Naranpur, Keonjhar -
              758014,
              <br />
              Odisha, India
            </p>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              ✉
            </span>

            <a href="mailto:Hello@oryabio.in">
              Hello@oryabio.in
            </a>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              🌐
            </span>

            <a
              href="https://www.oryabio.in"
              target="_blank"
              rel="noreferrer"
            >
              www.oryabio.in
            </a>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              📞
            </span>

            <a href="tel:+917809903359">
              7809903359
            </a>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <p>
          © 2026 ORYA BIO-SOLUTIONS. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;