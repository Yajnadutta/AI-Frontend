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
import "../../styling/solutions.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/home/AnimatedSection";
import solutionsBannerImage from "../../assets/solutions_banner.png";
import packagingImg from "../../assets/solutions_card01.png";
import foodImg from "../../assets/what-we-do-card2.png";
import agriWasteImg from "../../assets/what-we-do-card3.png";
import valueChainImg from "../../assets/value-chain.jpeg";
import hydrationImg from "../../assets/hydration.jpg";
import imgRestaurants from '../../assets/restaurants.jpg';
import imgHotels from '../../assets/hotels.jpg';
import imgCafes from '../../assets/cafes.jpg';
import imgRetail from '../../assets/retail.jpg';
import imgCorporates from '../../assets/corporates.jpg';
import imgInstitutions from '../../assets/institutions.jpg';
import imgAgriculture from '../../assets/agriculture.jpg';
import imgECommerce from '../../assets/ecommerce.jpg';
import imgIndustries from '../../assets/industries.jpg';
import bannerBg from '../../assets/banner-clean.jpg';
import { 
 ArrowRight,
  Leaf, 
  Package, 
  MessageCircle,
  Recycle, Tractor, GlassWater,
   FileEdit,
  Sprout,
  Share2,
  ShieldCheck,
  PackageCheck,
  Truck,
   ArrowDown,
  Lightbulb,
  Handshake,
} from "lucide-react";

const SOLUTIONS = [
  {
    icon: Package,
    image: packagingImg,
    title: "Sustainable Packaging Solutions",
    body: "Eco-friendly packaging made from renewable resources for a greener future.",
    items: [
      "Bagasse Products",
      "Bamboo Products",
      "Banana Fibre Products",
      "Coconut Products",
      "Biodegradable Bags",
      "Eco Cutlery & Spoons",
      "Honeycomb Packaging",
      "Custom Packaging",
    ],
    linkLabel: "Explore Packaging Solutions",
    href: "#packaging",
  },
  {
    icon: Leaf,
    image: foodImg,
    title: "Natural & Traditional Food Solutions",
    body: "Bringing authentic, natural and traditional foods from our roots to your table.",
    items: ["Phula Badi", "Spices", "Millets", "Dry Foods", "Traditional Foods", "Regional Specialties"],
    linkLabel: "Explore Natural Food",
    href: "#natural-food",
  },
  {
    icon: Recycle,
    image: agriWasteImg,
    title: "Circular & Agri-Waste Solutions",
    body: "Transforming agri-waste and renewable resources into useful, sustainable and impactful products.",
    items: [
      "Agri-Waste Based Products",
      "By-Product Utilization",
      "Resource Optimization",
      "Sustainable Innovation",
      "Waste to Value",
    ],
    linkLabel: "Explore Circular Solutions",
    href: "#circular",
  },
  {
    icon: Tractor,
    image: valueChainImg,
    title: "Agriculture & Value Chain Solutions",
    body: "Connecting agriculture with processing, packaging, distribution and markets for better opportunities.",
    items: ["Sourcing & Procurement", "Processing Support", "Value Addition", "Packaging Solutions", "Market Linkage"],
    linkLabel: "Explore Value Chain",
    href: "#value-chain",
  },
  {
    icon: GlassWater,
    image: hydrationImg,
    title: "Sustainable Hydration Solutions",
    body: "Responsible alternatives to conventional plastic for a healthier planet.",
    items: ["Bamboo / Natural Bottles", "Paper-Based Bottles", "Plant-Based Bottles", "Glass Bottles", "Stainless Steel Bottles"],
    linkLabel: "Explore Hydration",
    href: "#hydration",
  },
];

const solutionsData = [
  { id: 1, name: 'Restaurants', image: imgRestaurants },
  { id: 2, name: 'Hotels', image: imgHotels },
  { id: 3, name: 'Cafés', image: imgCafes },
  { id: 4, name: 'Retail', image: imgRetail },
  { id: 5, name: 'Corporates', image: imgCorporates },
  { id: 6, name: 'Institutions', image: imgInstitutions },
  { id: 7, name: 'Agriculture', image: imgAgriculture },
  { id: 8, name: 'E-commerce', image: imgECommerce },
  { id: 9, name: 'Industries', image: imgIndustries },
];
const STEPS = [
  { icon: FileEdit, label: "Requirement" },
  { icon: Sprout, label: "Product / Material Selection" },
  { icon: Share2, label: "Sourcing" },
  { icon: ShieldCheck, label: "Quality Check" },
  { icon: PackageCheck, label: "Packaging / Customisation" },
  { icon: Truck, label: "Bulk Supply" },
  { icon: Truck, label: "Delivery" },
];

const WHY_ORYA = [
  {
    icon: Leaf,
    title: "Nature-Focused",
    body: "Solutions inspired by nature.",
  },
  {
    icon: Recycle,
    title: "Sustainable Materials",
    body: "Using renewable, responsible materials.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    body: "Innovating for a better and sustainable future.",
  },
  {
    icon: Handshake,
    title: "Responsible Partnerships",
    body: "Building long-term, ethical relationships.",
  },
  {
    icon: Sprout,
    title: "Value Chain Approach",
    body: "Creating value at every step from nature to market.",
  },
];

const APPROACH_STEPS = [
  { icon: Leaf, label: "Natural Resources" },
  { icon: Sprout, label: "Responsible Sourcing" },
  { icon: Recycle, label: "Processing" },
  { icon: Handshake, label: "Value Addition" },
  { icon: Lightbulb, label: "Sustainable Packaging" },
  { icon: Leaf, label: "Distribution" },
  { icon: Sprout, label: "Market" },
  { icon: Handshake, label: "Consumer" },
];

const featuresData = [
  {
    id: 1,
    title: 'Eco-Friendly Products',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V18" />
        <path d="M12 10C13 8 16 8 17 11C15 13 13 13 12 15" />
        <path d="M12 10C11 8 8 8 7 11C9 13 11 13 12 15" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Wide Product Range',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Pan-India Supply',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Quality Assured',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="16 10 11 15 8 12" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Bulk Availability',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16.5V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.5" />
        <path d="M3 12h18v3H3z" />
        <path d="M4.5 12V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v8" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Timely Delivery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Better Planet Better Tomorrow',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M6.5 7.5h11M4.5 16.5h15" />
      </svg>
    )
  }
];
const Solutions = ( {
      exploreHref = "#solutions",
  whatsappUrl = "https://wa.me/917809903359",
  ctaHref = "#business-solution"
}) => {


  return (
    <div className="home">

        {/* ================= HEADER ================= */}

    <Header />

      {/* ================= CONTACT BANNER ================= */}

 <section
      className="solutions-banner"
      style={{ backgroundImage: `url(${solutionsBannerImage})` }}
    >
      <div className="solutions-banner-overlay" />

      <div className="solutions-banner-inner">
        <p className="solutions-eyebrow">Nature &middot; Innovation &middot; Growth</p>

        <h1 className="solutions-heading">
          <span className="solutions-heading-line solutions-heading-line--bold">
            Sustainable Solutions
          </span>
          <span className="solutions-heading-line">For a Better Tomorrow</span>
        </h1>

        <p className="solutions-body">
          Practical, responsible and nature-inspired solutions for
          businesses, communities and sustainable value chains.
        </p>

        <div className="solutions-actions">
          <a href={exploreHref} className="solutions-btn solutions-btn--solid">
            Explore Our Solutions <ArrowRight size={17} strokeWidth={2} />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="solutions-btn solutions-btn--outline"
          >
            Talk to ORYA <MessageCircle size={17} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
{/* ================= Our Solutions ================= */}
 <AnimatedSection as="section" animation="fade-up">
<section className="solutions-section">
      <div className="solutions-header">
        <h2 className="solutions-heading">Our Solutions</h2>
        <span className="solutions-underline" />
      </div>

      <div className="solutions-grid">
        {SOLUTIONS.map(({ icon: Icon, image, title, body, items, linkLabel, href }) => (
          <article className="solution-card" key={title}>
            <div className="solution-icon-circle">
              <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h3 className="solution-title">{title}</h3>

            {image && (
              <div className="solution-image-wrap">
                <img src={image} alt="" className="solution-image" loading="lazy" />
              </div>
            )}

            <p className="solution-body">{body}</p>

            <ul className="solution-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a href={href} className="solution-link">
              {linkLabel}
              <ArrowRight size={15} strokeWidth={2} className="solution-link-arrow" />
            </a>
          </article>
        ))}
      </div>
    </section>

 </AnimatedSection>
{/* ================= Solutions For Every Business ================= */}
 <AnimatedSection as="section" animation="fade-up">

<section className="business-container">
      <h2 className="business-heading">SOLUTIONS FOR EVERY BUSINESS</h2>
      <div className="business-grid">
        {solutionsData.map((item) => (
          <div key={item.id} className="business-solution-card">
            <div className="business-image-wrapper">
              <img src={item.image} alt={`${item.name} business solution`} />
            </div>
            <p className="business-solution-title">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
 </AnimatedSection>

{/* ================= Custom Business Solutions ================= */}
 <AnimatedSection as="section" animation="fade-up">

 <section className="cbs-strip">
      <div className="cbs-inner">
        <div className="cbs-intro">
          <h2 className="cbs-heading">Custom Business Solutions</h2>
          <p className="cbs-body">
            Every business has unique requirements. ORYA works with you to
            provide the right sustainable products and sourcing solutions.
          </p>
          <a href={ctaHref} className="cbs-cta">
            Request a Business Solution <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>

        <ol className="cbs-steps">
          {STEPS.map(({ icon: Icon, label }, i) => (
            <React.Fragment key={label}>
              <li className="cbs-step">
                <span className="cbs-step-icon">
                  <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="cbs-step-label">{label}</span>
              </li>

              {i < STEPS.length - 1 && (
                <li className="cbs-connector" aria-hidden="true">
                  <ArrowRight size={18} strokeWidth={2} className="cbs-arrow-h" />
                  <ArrowDown size={18} strokeWidth={2} className="cbs-arrow-v" />
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>
    </section>
 </AnimatedSection>


 <AnimatedSection as="section" animation="fade-up">

<section className="woa-section">
      <div className="woa-grid">
        {/* ---------- Why ORYA Solutions ---------- */}
        <div className="woa-panel">
          <h2 className="woa-heading">Why ORYA Solutions?</h2>

          <div className="woa-why-list">
            {WHY_ORYA.map(({ icon: Icon, title, body }) => (
              <div className="woa-why-item" key={title}>
                <span className="woa-why-icon">
                  <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="woa-why-title">{title}</h3>
                <p className="woa-why-body">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Our Sustainable Approach ---------- */}
        <div className="woa-panel">
          <h2 className="woa-heading woa-heading--center">
            Our Sustainable Approach
          </h2>

          <ol className="woa-steps">
            {APPROACH_STEPS.map(({ icon: Icon, label }, i) => (
              <React.Fragment key={label}>
                <li className="woa-step">
                  <span className="woa-step-icon">
                    <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="woa-step-label">{label}</span>
                </li>

                {i < APPROACH_STEPS.length - 1 && (
                  <li className="woa-connector" aria-hidden="true">
                    <ArrowRight size={16} strokeWidth={2} />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>

          <p className="woa-caption">
            We aim to create value at every stage while encouraging
            responsible sourcing, sustainable materials and stronger
            connections between agriculture, products and markets.
          </p>
        </div>
      </div>
    </section>
 </AnimatedSection>

 {/* ================= LET'S BUILD A SUSTAINABLE FUTURE TOGETHER ================= */}
 <AnimatedSection as="section" animation="fade-up">

<section 
      className="business-banner-container" 
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="business-banner-overlay">
        <div className="business-banner-content">
          
          <div className="business-banner-text-side">
            <h2 className="business-banner-heading">
              LET'S BUILD A SUSTAINABLE FUTURE TOGETHER
            </h2>
            <p className="business-banner-subtext">
              Whether you are a manufacturer, farmer, retailer, restaurant, distributor, 
              institution or business buyer — let's explore opportunities to create 
              sustainable value together.
            </p>
          </div>

          <div className="business-banner-actions-side">
            <button className="business-banner-btn" onClick={() => alert('Partner flow')}>
              <svg className="business-banner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Become a Partner
            </button>
            
            <button className="business-banner-btn" onClick={() => alert('Enquiry flow')}>
              <svg className="business-banner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Request an Enquiry
            </button>
          </div>

        </div>
      </div>
    </section>
 </AnimatedSection>

  {/* ================= BUSINESS FEATURES ================= */}
 <AnimatedSection as="section" animation="fade-up">

<div className="business-features-bar">
      <div className="business-features-list">
        {featuresData.map((feature) => (
          <div key={feature.id} className="business-feature-item">
            <div className="business-feature-icon-box">
              {feature.icon}
            </div>
            <span className="business-feature-text">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
 </AnimatedSection>

        {/* ================= FOOTER ================= */}

            <Footer />
    </div>
  );
};

export default Solutions;