import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsConditionsModal from "./TermsConditionsModal";
import "../styling/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import oryaLogo from "../assets/footer-logo.png";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

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
          {/* <div className="footer-social">

            <a href="#" aria-label="Facebook" target="_blank" rel="noreferrer">
              f
            </a>

            <a href="https://www.instagram.com/oryabio?stkn=dDlqOWQxOGFpdzY4" aria-label="Instagram" target="_blank" rel="noreferrer">
              ◎
            </a>

            <a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              in
            </a>

          </div> */}
{/* SOCIAL MEDIA */}
<div className="footer-social">
  <a href="#" aria-label="Facebook" target="_blank" rel="noreferrer">
    <FaFacebookF size={16} />
  </a>
  <a href="https://www.instagram.com/oryabio?stkn=dDlqOWQxOGFpdzY4" aria-label="Instagram" target="_blank" rel="noreferrer">
    <FaInstagram size={16} />
  </a>
  <a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer">
    <FaLinkedinIn size={16} />
  </a>
  <a href="#" aria-label="YouTube" target="_blank" rel="noreferrer">
    <FaYoutube size={16} />
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
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* ================= PRODUCTS ================= */}
        <div className="footer-column">

          <h3>Our Products</h3>

          <Link to="/products">
            Sustainable Packaging
          </Link>

          <Link to="/products">
            Natural Food
          </Link>

          <Link to="/products">
            Agri-Waste Products
          </Link>

          <Link to="/products/sustainable-sourcing">
            Sustainable Sourcing
          </Link>

        </div>


        {/* ================= BUSINESS ================= */}
        <div className="footer-column">

          <h3>For Businesses</h3>

          <Link to="/contact#send-requirement">
            Bulk Orders
          </Link>

          <Link to="/contact#send-requirement">
            Wholesale
          </Link>

          <Link to="/contact#send-requirement">
            Custom Solutions
          </Link>

          <Link to="/contact#send-requirement">
            Partnerships
          </Link>

        </div>


        {/* ================= CONTACT ================= */}
        <div className="footer-contact">

          <h3>Contact Us</h3>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <p>
              Naranpur, Keonjhar -
              758014,
              <br />
              Odisha, India
            </p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <a href="mailto:Hello@oryabio.in">
              Hello@oryabio.in
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">🌐</span>
            <a
              href="https://www.oryabio.in"
              target="_blank"
              rel="noreferrer"
            >
              www.oryabio.in
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
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

          <Link
            onClick={(e) => {
              e.preventDefault();
              setPrivacyOpen(true);
            }}
          >
            Privacy Policy
          </Link>

          <span>|</span>

          <Link
            onClick={(e) => {
              e.preventDefault();
              setTermsOpen(true);
            }}
          >
            Terms &amp; Conditions
          </Link>

        </div>

        <PrivacyPolicyModal
          isOpen={privacyOpen}
          onClose={() => setPrivacyOpen(false)}
        />

        <TermsConditionsModal
          isOpen={termsOpen}
          onClose={() => setTermsOpen(false)}
        />

      </div>

    </footer>
  );
};

export default Footer;