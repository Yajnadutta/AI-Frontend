import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styling/Home.css";
import "../../styling/About.css";
import "../../styling/contact.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/home/AnimatedSection";
import contactBannerImage from "../../assets/slide1.jpeg";
import plantImage from "../../assets/plant_image.jpg";
import { ArrowRight,
  Leaf, 
  Globe ,
  Users, Briefcase,
  ArrowDown,
  Package, Building2, Handshake, Coffee,
  MapPin, Phone, Mail, MessageCircle,
  Clock, Navigation
} from "lucide-react";

 const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=ORYA%20Bio-Solutions%2C%20Keonjhar%2C%20Odisha&t=&z=13&ie=UTF8&iwloc=&output=embed";
 
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=ORYA+Bio-Solutions,+Keonjhar,+Odisha";
 
const WHATSAPP_URL = "https://wa.me/917809903359";

const ENQUIRY_TYPES = [
  "Product Enquiry",
  "Bulk / B2B Enquiry",
  "Dealer / Partnership",
  "Export Enquiry",
  "Future Business Opportunities",
];
 
const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  enquiryType: "",
  product: "",
  quantity: "",
  location: "",
  message: "",
};
 
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+\d][\d\s-]{6,}$/;
const Contact = ( {
  mapSrc = MAP_EMBED_SRC,
  directionsUrl = DIRECTIONS_URL,
  whatsappUrl = WHATSAPP_URL,
}) => {
const [form, setForm] = useState(initialForm);
 
  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };
 
  const validate = () => {
    if (!form.fullName.trim()) {
      toast.error("Please enter your full name.");
      return false;
    }
    if (!form.email.trim() || !emailPattern.test(form.email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!form.phone.trim() || !phonePattern.test(form.phone.trim())) {
      toast.error("Please enter a valid phone / WhatsApp number.");
      return false;
    }
    if (!form.enquiryType) {
      toast.error("Please select an enquiry type.");
      return false;
    }
    if (!form.product.trim()) {
      toast.error("Please tell us the product or requirement.");
      return false;
    }
    if (!form.message.trim()) {
      toast.error("Please add a message with your requirement details.");
      return false;
    }
    return true;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
 
    // Replace with your actual submit call (API / email service etc.)
    toast.success("Enquiry submitted. Our team will get back to you soon.");
    setForm(initialForm);
  };
 

const features = [
  { icon: Leaf, label: "Sustainable Solutions" },
  { icon: Users, label: "Partnerships" },
  { icon: Briefcase, label: "Business Enquiries" },
];

const items = [
  {
    icon: Package,
    title: "Product Enquiry",
    body: "Ask about products, specifications and availability.",
  },
  {
    icon: Building2,
    title: "Bulk / B2B Enquiry",
    body: "For wholesale, institutional and business requirements.",
  },
  {
    icon: Handshake,
    title: "Dealer / Partnership",
    body: "Explore dealership and business partnership opportunities.",
  },
  {
    icon: Globe,
    title: "Export Enquiry",
    body: "Enquire about international supply and export opportunities.",
  },
  {
    icon: Coffee,
    title: "Future Business Opportunities",
    body: "Café, franchise and other ORYA expansion opportunities.",
  },
];


const opportunities = [
  { icon: Coffee, label: "ORYA Café" },
  { icon: Handshake, label: "Franchise" },
  { icon: Globe, label: "Export Worldwide" },
];


  return (
    <div className="home">

        {/* ================= HEADER ================= */}

    <Header />

      {/* ================= CONTACT BANNER ================= */}

  <section
      className="connect-banner"
      style={{ backgroundImage: `url(${contactBannerImage})` }}
    >
      <div className="connect-banner-overlay" />
 
      <div className="connect-banner-inner">
        <h1 className="connect-banner-heading">
          Let&apos;s connect &amp;
          <span className="connect-banner-heading-accent">
            Build something better
          </span>
        </h1>
 
        <p className="connect-banner-body">
          Whether you are looking for sustainable products, bulk supplies,
          partnerships or new business opportunities, we&apos;d be happy to
          hear from you.
        </p>
 
        <ul className="connect-banner-features">
          {features.map(({ icon: Icon, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <span className="feature-divider" aria-hidden="true" />}
              <li className="feature-item">
                <Icon size={16} strokeWidth={2} aria-hidden="true" />
                {label}
              </li>
            </React.Fragment>
          ))}
        </ul>
 
        <a href="#enquiry" className="connect-banner-cta">
          Send an enquiry <ArrowDown size={16} strokeWidth={2} />
        </a>
      </div>
    </section>
{/* ================= How can we help you? ================= */}

<AnimatedSection
  as="section"
  animation="fade-up"
>
 <section className="help-section">
 
      <div className="help-section-header">
        <h2 className="help-section-heading">How can we help you?</h2>
        <div className="help-section-divider">
          <span className="divider-line" />
          <Leaf size={14} strokeWidth={2} aria-hidden="true" />
          <span className="divider-line" />
        </div>
      </div>
 
      <div className="help-card-grid">
        {items.map(({ icon: Icon, title, body }) => (
          <div className="help-card" key={title}>
            <div className="help-card-icon-wrap">
              <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
            </div>
            <h3 className="help-card-title">{title}</h3>
            <p className="help-card-body">{body}</p>
            <a href="#enquire" className="help-card-link">
              Enquire <ArrowRight size={15} strokeWidth={2} className="link-arrow" />
            </a>
          </div>
        ))}
      </div>
    </section>
</AnimatedSection>


     {/* ================= Connect with ORYA ================= */}
     <AnimatedSection as="section" animation="fade-up">
  <section className="contact-section">
      <ToastContainer position="top-right" autoClose={3500} />
 
      <div className="contact-grid">
        {/* left: connect info */}
        <div className="connect-card">
          <h2 className="panel-heading">Connect with ORYA</h2>
          <span className="panel-underline" />
 
          <div className="connect-row">
            <div className="connect-icon">
              <MapPin size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="connect-details">
              <p className="connect-label">Visit us</p>
              <p className="connect-text">
                <strong>ORYA Bio-Solutions</strong>
                <br />
                Naranpur, Keonjhar &ndash; 758014, Odisha, India
              </p>
            </div>
          </div>
 
          <div className="connect-divider" />
 
          <div className="connect-row">
            <div className="connect-icon">
              <Phone size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="connect-details">
              <p className="connect-label">Call us</p>
              <p className="connect-text">+91 78099 03359</p>
            </div>
            <a href="tel:+917809903359" className="connect-btn">
              Call ORYA
            </a>
          </div>
 
          <div className="connect-divider" />
 
          <div className="connect-row">
            <div className="connect-icon">
              <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="connect-details">
              <p className="connect-label">Email us</p>
              <p className="connect-text">hello@oryabio.in</p>
            </div>
            <a href="mailto:hello@oryabio.in" className="connect-btn">
              Email us
            </a>
          </div>
 
          <div className="connect-divider" />
 
          <div className="connect-row">
            <div className="connect-icon">
              <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="connect-details">
              <p className="connect-label">WhatsApp</p>
              <p className="connect-text">Chat with ORYA</p>
            </div>
            <a
              href="https://wa.me/917809903359"
              target="_blank"
              rel="noreferrer"
              className="connect-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
 
        {/* right: enquiry form */}
        <div className="form-card">
          <h2 className="panel-heading">Send us your requirement</h2>
          <span className="panel-underline" />
          <p className="form-intro">
            Tell us what you are looking for and our team will get back to
            you.
          </p>
 
          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Full Name *"
                value={form.fullName}
                onChange={handleChange("fullName")}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Company / Organisation"
                value={form.company}
                onChange={handleChange("company")}
                className="form-input"
              />
 
              <input
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange("email")}
                className="form-input"
              />
              <input
                type="tel"
                placeholder="Phone / WhatsApp *"
                value={form.phone}
                onChange={handleChange("phone")}
                className="form-input"
              />
 
              <select
                value={form.enquiryType}
                onChange={handleChange("enquiryType")}
                className="form-input form-select"
              >
                <option value="">Select Enquiry Type *</option>
                {ENQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Product / Requirement *"
                value={form.product}
                onChange={handleChange("product")}
                className="form-input"
              />
 
              <input
                type="text"
                placeholder="Approx. Quantity"
                value={form.quantity}
                onChange={handleChange("quantity")}
                className="form-input"
              />
              <input
                type="text"
                placeholder="City / State / Country"
                value={form.location}
                onChange={handleChange("location")}
                className="form-input"
              />
 
              <textarea
                placeholder="Message / Requirement Details *"
                value={form.message}
                onChange={handleChange("message")}
                className="form-input form-textarea"
                rows={4}
              />
            </div>
 
            <button type="submit" className="submit-btn">
              Submit Enquiry <ArrowRight size={16} strokeWidth={2} />
            </button>
          </form>
        </div>
      </div>
    </section>

     </AnimatedSection>
    


      {/* ================= MAP ================= */}
<AnimatedSection as="section" animation="fade-up">
<section className="find-orya">
 
      <div className="find-orya-grid">
        {/* Map card */}
        <div className="panel map-panel">
          <h2 className="panel-title">Find ORYA</h2>
          <div className="map-frame">
            <iframe
              title="ORYA Bio-Solutions location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            />
          </div>
          <a href={directionsUrl} target="_blank" rel="noreferrer" className="directions-btn">
            <Navigation size={15} strokeWidth={2} />
            Get Directions
          </a>
        </div>
 
        {/* Business hours card */}
        <div className="panel hours-panel">
          <div className="hours-heading">
            <Clock size={18} strokeWidth={1.8} aria-hidden="true" />
            <h2 className="panel-title">Business Hours</h2>
          </div>
          <span className="panel-underline" />
 
          <div className="hours-block">
            <p className="hours-days">Monday &ndash; Saturday</p>
            <p className="hours-time">9:00 AM &ndash; 6:00 PM</p>
          </div>
 
          <div className="hours-divider" />
 
          <div className="hours-block">
            <p className="hours-days">Sunday</p>
            <p className="hours-time hours-closed">Closed</p>
          </div>
        </div>
 
        {/* WhatsApp card */}
        <div className="panel whatsapp-panel">
          <svg
            className="whatsapp-leaves"
            viewBox="0 0 160 220"
            aria-hidden="true"
          >
            <path
              d="M80 220 C80 160 70 120 40 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <ellipse cx="52" cy="150" rx="18" ry="9" transform="rotate(-30 52 150)" fill="currentColor" />
            <ellipse cx="35" cy="120" rx="16" ry="8" transform="rotate(-20 35 120)" fill="currentColor" />
            <ellipse cx="65" cy="105" rx="15" ry="7.5" transform="rotate(20 65 105)" fill="currentColor" />
            <ellipse cx="42" cy="80" rx="14" ry="7" transform="rotate(-15 42 80)" fill="currentColor" />
          </svg>
 
          <h2 className="whatsapp-title">Prefer WhatsApp?</h2>
          <p className="whatsapp-body">
            For quick product and business enquiries, connect with us
            directly on WhatsApp.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-btn">
            <MessageCircle size={16} strokeWidth={2} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

</AnimatedSection>
     {/* ================= Looking for sustainable solutions for your business? ================= */}
     <AnimatedSection as="section" animation="fade-up">
      <section className="opp-banner">
 
      <svg className="opp-leaves opp-leaves--left" viewBox="0 0 120 200" aria-hidden="true">
        <path d="M20 200 C20 140 30 100 55 70" fill="none" stroke="currentColor" strokeWidth="3" />
        <ellipse cx="42" cy="130" rx="16" ry="8" transform="rotate(25 42 130)" fill="currentColor" />
        <ellipse cx="58" cy="100" rx="15" ry="7.5" transform="rotate(-15 58 100)" fill="currentColor" />
        <ellipse cx="38" cy="80" rx="14" ry="7" transform="rotate(20 38 80)" fill="currentColor" />
      </svg>
 
      <div className="opp-grid">
        {/* left: business quote */}
        <div className="opp-panel opp-business">
          <div className="business-icon-wrap">
            <Building2 size={38} strokeWidth={1.4} aria-hidden="true" />
          </div>
          <div className="business-copy">
            <h2 className="opp-heading">
              Looking for sustainable solutions for your business?
            </h2>
            <p className="opp-body">
              From bulk packaging requirements to natural food products and
              customised solutions, ORYA works with businesses, institutions,
              distributors and other organisations.
            </p>
            <div className="business-actions">
              <a href="#quote" className="btn btn-solid">
                Request a Business Quote
              </a>
              <a href="#partner" className="btn btn-outline">
                Become a Partner
              </a>
            </div>
          </div>
        </div>
 
        <div className="opp-divider" aria-hidden="true" />
 
        {/* right: future opportunities */}
        <div className="opp-panel opp-future">
          <h2 className="opp-heading opp-heading--center">
            Explore future opportunities with ORYA
          </h2>
 
          <div className="future-icons">
            {opportunities.map(({ icon: Icon, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span className="future-dots" aria-hidden="true">&middot;&middot;&middot;</span>}
                <div className="future-item">
                  <div className="future-icon-circle">
                    <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <span className="future-label">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
 
          <a href="#opportunities" className="explore-link">
            Explore Opportunities <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div>
      </div>
 
      {plantImage && (
        <div className="opp-plant">
          <img src={plantImage} alt="Sapling growing in a plant pot" />
        </div>
      )}
    </section>
     </AnimatedSection>


        {/* ================= FOOTER ================= */}

            <Footer />
    </div>
  );
};

export default Contact;