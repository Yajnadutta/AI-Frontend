import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styling/Home.css";
import "../../styling/About.css";
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
import AboutBanner from "../../assets/about-banner.PNG";

const About = () => {


const certificates = [
  { id: 1, image: Certification_01, alt: "Certification 1" },
  { id: 2, image: Certification_02, alt: "Certification 2" },
  { id: 3, image: Certification_03, alt: "Certification 3" },
  { id: 4, image: Certification_04, alt: "Certification 4" },
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
const categories = [
    {
      title: "Sustainable Packaging",
      image: "https://images.pexels.com/photos/12725398/pexels-photo-12725398.jpeg",
      description: "Eco-friendly packaging for a plastic-free future.",
    },
    {
      title: "Natural Food",
      image: "https://images.pexels.com/photos/35974369/pexels-photo-35974369.jpeg",
      description: "Natural, healthy and traditional food products.",
    },
    {
      title: "Agri-Waste Products",
      image: "https://images.pexels.com/photos/32405786/pexels-photo-32405786.jpeg",
      description: "Turning agricultural waste into valuable products.",
    },
    {
      title: "Sustainable Sourcing",
      image: "https://images.pexels.com/photos/38384711/pexels-photo-38384711.jpeg",
      description: "Responsibly sourced for a better tomorrow.",
    },
  ];


  return (
    <div className="home">

        {/* ================= HEADER ================= */}

    <Header />

      {/* ================= HERO CAROUSEL ================= */}

    <section className="about-banner">
  <img src={AboutBanner} alt="About ORYA - eco-friendly products" className="about-banner-image" />

  <div className="about-banner-overlay"></div>

  <div className="about-banner-content">
    <h1>About ORYA</h1>
    <p className="about-banner-subtitle">Building a Greener Value Chain</p>

    <div className="about-banner-divider">
      ORYA BIO-SOLUTIONS is a sustainability-driven enterprise focused on sustainable packaging, natural food and circular solutions.

We connect agriculture, natural resources, responsible sourcing and modern innovation to build a better future for people and the planet.
    </div>

    <p className="about-banner-tagline">
      Nature <span className="dot">•</span> Innovation <span className="dot">•</span> Growth
    </p>
  </div>
</section>

{/* ================= WHO WE ARE ================= */}

<AnimatedSection
  as="section"
  className="who-we-are-section"
  animation="fade-up"
>
 <section class="who-we-are-section">
 
  <div class="who-we-are-container">
 
    <div class="who-we-are-content">
 
      <div class="who-we-are-label">
        <span class="who-leaf">&#127811;</span>
        <span>WHO WE ARE</span>
      </div>
 
      <span class="who-we-are-title">
        Connecting Nature,
        <br />
        Innovation &amp; Opportunity
      </span>
 
      <p>
        ORYA BIO-SOLUTIONS is a sustainability-focused enterprise working
        across sustainable packaging, natural food, circular/agri-waste
        products and responsible sourcing.
      </p>
 
      <p>
        We connect nature, innovation and agriculture to create practical
        solutions that reduce dependence on conventional plastic and
        build stronger sustainable value chains.
      </p>
 
      <div class="who-we-are-features">
 
        <div class="who-feature">
          <div class="who-feature-icon">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M16 18h22l10 8v22H16z" />
              <path d="M16 18l10 8h22" />
              <path d="M26 26v22" />
              <path d="M48 26v22" />
              <path d="M42 38h8" />
              <path d="M46 34v8" />
            </svg>
          </div>
          <span>Sustainable<br />Packaging</span>
        </div>
 
        <div class="who-feature">
          <div class="who-feature-icon">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 48V28" />
              <path d="M32 38c-10-1-16-7-15-16 9 0 15 5 15 16z" />
              <path d="M32 43c10-1 16-7 15-16-9 0-15 5-15 16z" />
              <circle cx="32" cy="20" r="4" />
              <path d="M32 7v5M22 10l3 4M42 10l-3 4" />
            </svg>
          </div>
          <span>Natural<br />Food</span>
        </div>
 
        <div class="who-feature">
          <div class="who-feature-icon">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="32" r="20" />
              <path d="M32 18c7 5 7 11 0 14-7-3-7-9 0-14z" />
              <path d="M18 32c5-7 11-7 14 0-3 7-9 7-14 0z" />
              <path d="M32 46c-7-5-7-11 0-14 7 3 7 9 0 14z" />
              <path d="M46 32c-5 7-11 7-14 0 3-7 9-7 14 0z" />
            </svg>
          </div>
          <span>Circular<br />Products</span>
        </div>
 
        <div class="who-feature">
          <div class="who-feature-icon">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M32 49V25" />
              <path d="M32 34c-9-1-14-6-14-14 9 0 14 5 14 14z" />
              <path d="M32 29c9-1 14-6 14-14-9 0-14 5-14 14z" />
              <path d="M20 49h24" />
              <path d="M24 49c0-8 3-13 8-17" />
              <path d="M40 49c0-8-3-13-8-17" />
            </svg>
          </div>
          <span>Agriculture &amp;<br />Value Chain</span>
        </div>
 
        <div class="who-feature">
          <div class="who-feature-icon">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M48 14C31 15 19 23 18 39c11 2 22-4 30-25z" />
              <path d="M18 48c7-11 14-18 25-25" />
              <path d="M29 38l-1-8" />
              <path d="M37 30l-7-1" />
            </svg>
          </div>
          <span>Responsible<br />Sourcing</span>
        </div>
 
      </div>
    </div>
 
    <div class="who-we-are-image">
      <img
        src={WhoWeAreImage}
        alt="ORYA sustainable agriculture"
      />
    </div>
 
  </div>
 
</section>
 
</AnimatedSection>

     {/* ================= WHAT WE DO ================= */}
     <AnimatedSection as="section" className="value-chain-section" animation="fade-up">
 <WhatWeDo />

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

export default About;