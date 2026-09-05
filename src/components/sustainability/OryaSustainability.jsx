import React from "react";
import { Link } from "react-router-dom";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styling/Home.css";
import "../../styling/About.css";
import "../../styling/sustainability.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatWeDo from "../../components/about/WhatWeDo";
import BusinessPillars from "../../components/about/BusinessPillars";
import Ourapproach from "../../components/about/Ourapproach";
import Futureoforya from "../../components/about/Futureoforya";
import VisionMission from "../../components/about/VisionMission";
import CTABanner from "../../components/about/CTABanner";
import Certification_01 from "../../assets/Certification_01.jpeg";
import Certification_02 from "../../assets/Certification_02.jpeg";
import Certification_03 from "../../assets/Certification_03.jpeg";
import Certification_04 from "../../assets/Certification_04.jpeg";
import WhoWeAreImage from "../../assets/who-we-are.PNG";
import AnimatedSection from "../../components/home/AnimatedSection";
import SustainabilityBanner from "../../assets/sustainability_banner.png";
import SeedlingImage from "../../assets/seedling-growth.png";
const OrySustainabilityPage = () => {

const FEATURES = [
  {
    id: "materials",
    title: "Better Materials",
    description:
      "Explore alternatives based on renewable, natural or responsibly selected materials.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21c-4.5-1-8-4.5-8-10 0-3.5 2-6 5-7 1 3 1 5 3 7 1.5 1.5 2 3.5 2 5 0 2-1 4-2 5Z" />
        <path d="M12 21c1-3 3-5 6-6" />
      </svg>
    ),
  },
  {
    id: "waste",
    title: "Less Waste",
    description:
      "Choose products designed to reduce dependence on conventional single-use materials and unnecessary waste.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 10 4.5 6h5" />
        <path d="M4.5 6C6 3.6 8.6 2 11.5 2c2 0 3.8.8 5.1 2.1" />
        <path d="M17 5l2 4-4.5 1" />
        <path d="M19 4.5C21 6.6 22 9 21.3 12" />
        <path d="M17 19l4-.5-1 4.5" />
        <path d="M21 18.5c-1.6 2.4-4.2 4-7.1 4-2 0-3.8-.8-5.1-2.1" />
        <path d="M7 21l-2-4 4.5-1" />
        <path d="M5 20.5C3 18.4 2 16 2.7 13" />
      </svg>
    ),
  },
  {
    id: "circular",
    title: "Circular Thinking",
    description:
      "Consider the complete journey — from sourcing and production to use and responsible end-of-life.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.6" />
        <path d="M4 4v4.6h4.6" />
        <path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.4" />
        <path d="M20 20v-4.6h-4.6" />
      </svg>
    ),
  },
];
const certificates = [
  { id: 1, image: Certification_01, alt: "Certification 1" },
  { id: 2, image: Certification_02, alt: "Certification 2" },
  { id: 3, image: Certification_03, alt: "Certification 3" },
  { id: 4, image: Certification_04, alt: "Certification 4" },
];
 const PRINCIPLES = [
  {
    id: "materials",
    title: "Responsible Materials",
    description: (
      <>
        We seek materials that can provide practical alternatives with
        emphasis on plant-based, renewable, biodegradable, compostable or
        recyclable options where appropriate.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21c-4.5-1-8-4.5-8-10 0-3.5 2-6 5-7 1 3 1 5 3 7 1.5 1.5 2 3.5 2 5 0 2-1 4-2 5Z" />
        <path d="M12 21c1-3 3-5 6-6" />
      </svg>
    ),
  },
  {
    id: "efficiency",
    title: "Resource Efficiency",
    description: (
      <>
        We encourage thoughtful product and packaging choices that use
        materials efficiently while maintaining the required performance and{" "}
        <strong>functionality</strong>.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 13.5a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V19.7a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H2.3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.04 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H8.4a1.7 1.7 0 0 0 1.04-1.56V2.3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.09a1.7 1.7 0 0 0 1.56 1.04h.09a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04Z" />
      </svg>
    ),
  },
  {
    id: "waste",
    title: "Waste Reduction",
    description: (
      <>
        We support solutions that can help <strong>reduce unnecessary waste
        and</strong> dependence on conventional single-use materials.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 7h16" />
        <path d="M9 7V4.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7" />
        <path d="M6 7l1 12.5A2 2 0 0 0 9 21.5h6a2 2 0 0 0 2-2L18 7" />
        <path d="M10 11v6" />
        <path d="M14 11v6" />
      </svg>
    ),
  },
  {
    id: "circular",
    title: "Circular Thinking",
    description: (
      <>
        We look beyond the point of purchase and consider how materials move
        through their lifecycle — including reuse, recycling, composting or
        other appropriate recovery pathways.
      </>
    ),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8.5 15a3.5 3.5 0 1 1 0-7c3 0 4.5 3.5 7 3.5a3.5 3.5 0 1 0 0-7" />
        <path d="M15.5 9a3.5 3.5 0 1 1 0 7c-3 0-4.5-3.5-7-3.5a3.5 3.5 0 1 0 0 7" />
      </svg>
    ),
  },
];

  const valueChain = [
    {
      icon: "🌱",
      title: "Agriculture",
      subtitle: "& Nature",
    },
    {
      icon: "🍃",
      title: "Responsible",
      subtitle: "Sourcing",
    },
    {
      icon: "🌿",
      title: "Agri / Natural",
      subtitle: "Resources",
    },
    {
      icon: "⚙️",
      title: "Value",
      subtitle: "Addition",
    },
    {
      icon: "🏭",
      title: "Processing",
      subtitle: "",
    },
    {
      icon: "📦",
      title: "Sustainable",
      subtitle: "Packaging",
    },
    {
      icon: "🏷️",
      title: "Branding",
      subtitle: "",
    },
    {
      icon: "🚚",
      title: "Distribution",
      subtitle: "",
    },
    {
      icon: "👥",
      title: "Consumer",
      subtitle: "",
    },
  ];



  return (
    <div className="home">

        {/* ================= HEADER ================= */}

    <Header />

      {/* ================= SUSTAINABILITY BANNER ================= */}

 <section className="orya-sustainability-hero">
      <img
        src={SustainabilityBanner}
        alt="ORYA sustainable packaging - bagasse plate, container, wooden cutlery and paper bag"
        className="orya-sustainability-hero__media"
      />
 
      <div className="orya-sustainability-hero__scrim" aria-hidden="true"></div>
 
      <div className="orya-sustainability-hero__content">
        <h1 className="orya-sustainability-hero__title">
          Sustainable Solutions for a Better Planet.
        </h1>
 
        <p className="orya-sustainability-hero__lead">
          We believe everyday products can perform their purpose while
          creating a more responsible path for people and the planet.
        </p>
 
        <p className="orya-sustainability-hero__description">
          From plant-based packaging alternatives to thoughtfully selected
          natural products, ORYA BIO-SOLUTIONS brings together solutions
          designed to reduce environmental impact and support a more
          sustainable future.
        </p>
 
        <div className="orya-sustainability-hero__actions">
          <a href="#solutions" className="orya-sustainability-hero__btn orya-sustainability-hero__btn--primary">
            Explore Sustainable Solutions
            <svg
              className="orya-sustainability-hero__btn-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
 
          <a href="#contact" className="orya-sustainability-hero__btn orya-sustainability-hero__btn--ghost">
            Talk to ORYA
          </a>
        </div>
 
        <ul className="orya-sustainability-hero__meta">
          <li className="orya-sustainability-hero__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 3c-4 3-6 6-6 9a6 6 0 0 0 12 0c0-3-2-6-6-9Z" />
            </svg>
            People
          </li>
          <li className="orya-sustainability-hero__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="9" cy="8" r="3" />
              <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
              <circle cx="17" cy="9" r="2.4" />
              <path d="M15.5 20c.2-2.2 1.7-3.8 4-4.2" />
            </svg>
            Products
          </li>
          <li className="orya-sustainability-hero__meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21V10" />
              <path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7Z" />
              <path d="M12 14c0-3-2.5-5.5-6-5.5C6 11.5 8.5 14 12 14Z" />
            </svg>
            A Healthier Planet
          </li>
        </ul>
      </div>
    </section>

{/* ================= WHY SUSTAINABILITY MATTERS ================= */}

<AnimatedSection
  as="section"
  animation="fade-up"
>
 
 <section className="orya-resources">
      <img
        src={SeedlingImage}
        alt="A young seedling with two green leaves growing from soil"
        className="orya-resources__media"
      />
 
      <div className="orya-resources__scrim" aria-hidden="true"></div>
 
      <div className="orya-resources__content">
        <div className="orya-resources__inner">
          <p className="orya-resources__eyebrow">Why Sustainability Matters</p>
          <h2 className="orya-resources__title">
            Rethinking the Way We Use Resources
          </h2>
 
          <p className="orya-resources__text">
            Modern consumption has created enormous pressure on natural
            resources and waste-management systems. At ORYA, we believe the
            transition toward more responsible materials and products begins
            with better everyday choices.
          </p>
          <p className="orya-resources__text">
            Our approach is simple: reduce unnecessary environmental impact,
            use resources more thoughtfully, and support solutions that can
            fit into a more circular future.
          </p>
 
          <div className="orya-resources__cards">
            {FEATURES.map((feature) => (
              <div className="orya-resources__card" key={feature.id}>
                <span className="orya-resources__card-icon">{feature.icon}</span>
                <div>
                  <h3 className="orya-resources__card-title">{feature.title}</h3>
                  <p className="orya-resources__card-text">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
</AnimatedSection>


     {/* ================= OUR APPROACH ================= */}
     <AnimatedSection as="section" animation="fade-up">
  <section className="orya-approach">
      <div className="orya-approach__intro">
        <p className="orya-approach__eyebrow">Our Approach</p>
        <h2 className="orya-approach__title">Sustainability by Design</h2>
        <p className="orya-approach__subtitle">
          We integrate sustainability into the way we choose, develop and
          deliver our products.
        </p>
      </div>
 
      <div className="orya-approach__grid">
        {PRINCIPLES.map((item) => (
          <div className="orya-approach__card" key={item.id}>
            <span className="orya-approach__icon">{item.icon}</span>
            <h3 className="orya-approach__card-title">{item.title}</h3>
            <p className="orya-approach__card-text">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

     </AnimatedSection>
    


      {/* ================= CIRCULAR VALUE CHAIN ================= */}
<AnimatedSection as="section" className="value-chain-section" animation="fade-up">
 <section className="value-chain-section">

        <div className="section-heading">
          <span className="leaf">🍃</span>
          <h2>Our Circular Value Chain</h2>
          <span className="leaf">🍃</span>
     <br/>
        </div>
<p className="chain-bottom" style={{ marginTop: '-25px' }}>
          🍃 From Farm & Nature to Responsible Consumption 🍃
        </p>
        <div className="value-chain">

          {valueChain.map((item, index) => (
            <React.Fragment key={index}>

              <div className="chain-item">

                <div className="chain-icon">
                  {item.icon}
                </div>

                <strong>{item.title}</strong>

                {item.subtitle && (
                  <span>{item.subtitle}</span>
                )}

              </div>

              {index < valueChain.length - 1 && (
                <div className="chain-arrow">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>

        <p className="chain-bottom">
          🍃 Creating value from agricultural resources and returning goodness to the planet. 🍃
        </p>

      </section>

</AnimatedSection>
     {/* ================= OUR BUSINESS PILLARS ================= */}
     <AnimatedSection as="section" className="value-chain-section" animation="fade-up">
   <BusinessPillars/>
     </AnimatedSection>


      {/* ================= VISION & MISSION ================= */}
      <AnimatedSection as="section" className="value-chain-section" animation="fade-up">
     <VisionMission/>
      </AnimatedSection>



      {/* ================= Certificate ================= */}
<section className="certificate-section">
  <div className="section-heading" style={{ marginBottom: "10px",marginTop: "30px" }}>
    <span className="leaf">🍃</span>
    <h2>Certificate</h2>
    <span className="leaf">🍃</span>
  </div>

  <div className="marquee-wrap">
    <div className="marquee-track">
      {certificates.map((cert) => (
        <div className="certificate-card" key={`a-${cert.id}`}>
          <img src={cert.image} alt={cert.alt} loading="lazy" />
        </div>
      ))}
      {certificates.map((cert) => (
        <div className="certificate-card" key={`b-${cert.id}`}>
          <img src={cert.image} alt={cert.alt} loading="lazy" />
        </div>
      ))}
    </div>
  </div>
</section>

<AnimatedSection as="section" className="value-chain-section" animation="fade-up">
<Ourapproach/> 

</AnimatedSection>

<AnimatedSection as="section" className="value-chain-section" animation="fade-up">
<Futureoforya/> 
</AnimatedSection>

<CTABanner/>



        {/* ================= FOOTER ================= */}

            <Footer />
    </div>
  );
};

export default OrySustainabilityPage;