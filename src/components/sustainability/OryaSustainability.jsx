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
import better_choice_banner from "../../assets/better_choice_banner.jpg";
import AnimatedSection from "../../components/home/AnimatedSection";
import SustainabilityBanner from "../../assets/sustainability_banner.png";
import SeedlingImage from "../../assets/seedling-growth.png";
import SugarcaneImage from "../../assets/material_01.png";
import BagasseImage from "../../assets/material_02.png";
import PackagingImage from "../../assets/material_03.png";
import IngredientsImage from "../../assets/what-we-do-card2.png";
import packagingImage from "../../assets/packaging.png";
import foodImage from "../../assets/food.png";
import circular_future from "../../assets/circular_future.jpg";
import { ArrowRight,
   Lightbulb, 
  RefreshCw, 
  Leaf, 
  Trash2, 
  Globe ,
 CheckCircle2, 
  Globe2, 
  UtensilsCrossed, 
  TreePine, 
  FileText
} from "lucide-react";
const STEPS = [
  {
    id: "sugarcane",
    image: SugarcaneImage,
    alt: "Freshly cut sugarcane stalks",
    title: "Sugarcane",
    caption: "A renewable resource",
  },
  {
    id: "bagasse",
    image: BagasseImage,
    alt: "Bagasse fibre after sugarcane processing",
    title: "Bagasse",
    caption: "Transformed into useful materials",
  },
  {
    id: "packaging",
    image: PackagingImage,
    alt: "Sustainable bagasse packaging containers",
    title: "Sustainable Packaging",
    caption: "For everyday use",
  },
  {
    id: "ingredients",
    image: IngredientsImage,
    alt: "Bowls of natural dry food ingredients",
    title: "Natural Ingredients",
    caption: "Thoughtful choices for a better tomorrow",
  },
];
 
function StepArrow() {
  return (
    <div className="orya-material-story__arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="12" x2="20" y2="12" />
        <polyline points="13 5 20 12 13 19" />
      </svg>
    </div>
  );
}
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
    


      {/* ================= OUR MATERIAL STORY ================= */}
<AnimatedSection as="section" animation="fade-up">
<section className="orya-material-story">
      <div className="orya-material-story__intro">
        <p className="orya-material-story__eyebrow">Our Material Story</p>
        <h2 className="orya-material-story__title">
          From Nature-Inspired Materials to Everyday Solutions
        </h2>
        <p className="orya-material-story__subtitle">
          We carefully select <strong>products and materials based</strong> on
          their intended application, environmental attributes,{" "}
          <strong>performance and available certification</strong> or
          supporting documentation.
        </p>
      </div>
 
      <div className="orya-material-story__row">
        {STEPS.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="orya-material-story__step">
              <img
                src={step.image}
                alt={step.alt}
                className="orya-material-story__image"
              />
              <h3 className="orya-material-story__step-title">{step.title}</h3>
              <p className="orya-material-story__step-caption">{step.caption}</p>
            </div>
 
            {index < STEPS.length - 1 && <StepArrow />}
          </React.Fragment>
        ))}
      </div>
    </section>

</AnimatedSection>
     {/* ================= Two Paths. One Sustainable Vision. ================= */}
     <AnimatedSection as="section" animation="fade-up">
    <section className="two-paths-section">

      {/* Heading */}
      <div className="two-paths-header">
        <h2>
          Two Paths. One Sustainable Vision.
        </h2>

        <p>
          Different products. A shared commitment to a more responsible future.
        </p>
      </div>


      {/* Two Cards */}
      <div className="two-paths-grid">

        {/* LEFT - PACKAGING */}
        <div className="path-card packaging-card">

          <div className="path-content">
            <h3>
              Sustainable
              <br />
              Packaging
            </h3>

            <p>
              Practical alternatives to conventional packaging,
              selected to support responsible material use and
              waste reduction.
            </p>

            <a href="/products" className="path-button green-button">
              <span>Explore Packaging</span>
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="path-image-wrapper">
            <img
              src={packagingImage}
              alt="Sustainable Packaging"
              className="path-image"
            />
          </div>

        </div>


        {/* RIGHT - FOOD */}
        <div className="path-card food-card">

          <div className="path-content">
            <h3>
              Natural Dry
              <br />
              Food Products
            </h3>

            <p>
              Thoughtfully selected natural products with an emphasis
              on quality, responsible sourcing and a more conscious
              approach to everyday consumption.
            </p>

            <a href="/products" className="path-button brown-button">
              <span>Explore Natural Products</span>
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="path-image-wrapper">
            <img
              src={foodImage}
              alt="Natural Dry Food Products"
              className="path-image"
            />
          </div>

        </div>

      </div>

    </section>
     </AnimatedSection>


      {/* ================= CIRCULAR ECONOMY ================= */}
      <AnimatedSection as="section"  animation="fade-up">
      <div className="dashboard-container">
      
      {/* LEFT SECTION: CIRCULAR ECONOMY */}
      <section className="dashboard-section section-left">
        <span className="section-tagline">CIRCULAR ECONOMY</span>
        <h2 className="section-title">Moving from Linear to Circular</h2>
        <p className="section-description">
          Sustainability doesn't end when a product is sold. We believe better solutions consider what happens before, during and after use.
        </p>
          <img
              src={circular_future}
              alt="Circular Future"
              style={{ width: "100%"}}
              
            />
      </section>

      {/* RIGHT SECTION: SUSTAINABILITY CRITERIA & PRIORITIES */}
      <section className="dashboard-section section-right">
        <span className="section-tagline">KNOW THE DIFFERENCE</span>
        <h2 className="section-title">Sustainability Starts with the Right Choice</h2>

        {/* Choice Grid */}
        <div className="choices-grid">
          <div className="choice-card">
            <div className="choice-icon-wrapper"><RefreshCw size={28} className="lucide-green" /></div>
            <h3>Recyclable</h3>
            <p>Designed to enter an appropriate recycling stream where collection and processing systems exist.</p>
          </div>

          <div className="choice-card">
            <div className="choice-icon-wrapper"><Leaf size={28} className="lucide-green" /></div>
            <h3>Biodegradable</h3>
            <p>A material characteristic that describes biological breakdown under specified conditions; it should not automatically be interpreted as compostable.</p>
          </div>

          <div className="choice-card">
            <div className="choice-icon-wrapper"><Leaf size={28} className="lucide-green rotated" /></div>
            <h3>Compostable</h3>
            <p>Designed to break down under defined composting conditions and standards.</p>
          </div>
        </div>

        {/* Priorities Section */}
        <div className="priorities-wrapper">
          <h3 className="priorities-title">Our Sustainability Priorities</h3>
          <div className="priorities-grid">
            <div className="priority-item">
              <div className="priority-icon"><Leaf size={20} /></div>
              <p>Responsible Material Selection</p>
            </div>
            <div className="priority-item">
              <div className="priority-icon"><Trash2 size={20} /></div>
              <p>Waste Reduction</p>
            </div>
            <div className="priority-item">
              <div className="priority-icon"><RefreshCw size={20} /></div>
              <p>Circularity</p>
            </div>
            <div className="priority-item">
              <div className="priority-icon"><Globe size={20} /></div>
              <p>Lower Environmental Impact</p>
            </div>
            <div className="priority-item">
              <div className="priority-icon"><Lightbulb size={20} /></div>
              <p>Innovation</p>
            </div>
          </div>
        </div>
      </section>

    </div>
      </AnimatedSection>



      {/* ================= Sustainability You Can Verify ================= */}
<AnimatedSection as="section"  animation="fade-up">
<div className="verify-container">
      
      {/* LEFT SECTION: VERIFICATION & CERTIFICATIONS */}
      <section className="verify-section left-panel">
        <h2 className="verify-title">Sustainability You Can Verify</h2>
        <p className="verify-subtitle">
          We believe environmental claims should be supported by evidence. Wherever applicable, 
          we work with products supported by relevant certifications, test reports and supplier documentation.
        </p>

        <div className="cards-row">
          {/* Card 1 */}
          <div className="cert-card">
            <div className="cert-icon-container circle-frame">
              <CheckCircle2 size={32} className="icon-green" />
            </div>
            <span className="cert-label font-bold">CPCB</span>
            <span className="cert-sublabel">Compliant</span>
            <span className="cert-context">(where applicable)</span>
          </div>

          {/* Card 2 */}
          <div className="cert-card">
            <div className="cert-icon-container">
              <Globe2 size={40} className="icon-blue" />
            </div>
            <span className="cert-label font-bold">ISO</span>
            <span className="cert-sublabel">Standards</span>
            <span className="cert-context">(where applicable)</span>
          </div>

          {/* Card 3 */}
          <div className="cert-card">
            <div className="cert-icon-container">
              <UtensilsCrossed size={36} className="icon-dark" />
            </div>
            <span className="cert-label font-bold">Food Contact</span>
            <span className="cert-sublabel">Safe Materials</span>
          </div>

          {/* Card 4 */}
          <div className="cert-card">
            <div className="cert-icon-container">
              <TreePine size={38} className="icon-green-dark" />
            </div>
            <span className="cert-label font-bold">FSC</span>
            <span className="cert-sublabel">Responsible Sourcing</span>
            <span className="cert-context">(where applicable)</span>
          </div>

          {/* Card 5 */}
          <div className="cert-card">
            <div className="cert-icon-container">
              <FileText size={36} className="icon-dark" />
            </div>
            <span className="cert-label font-bold">Test Reports</span>
            <span className="cert-sublabel">& Documentation</span>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION: UN SUSTAINABLE DEVELOPMENT GOALS */}
      <section className="verify-section right-panel">
        <h2 className="verify-title">Contributing to the Sustainable Development Goals</h2>
        <p className="verify-subtitle">Our solutions can contribute to:</p>

        <div className="sdg-grid">
          {/* SDG 12 */}
          <div className="sdg-block sdg-12">
            <div className="sdg-header">
              <span className="sdg-number">12</span>
              <span className="sdg-text">RESPONSIBLE CONSUMPTION AND PRODUCTION</span>
            </div>
            <div className="sdg-graphic">
              {/* Infinity loop / circular design simulation */}
              <div className="infinity-loop">🔄</div>
            </div>
          </div>

          {/* SDG 13 */}
          <div className="sdg-block sdg-13">
            <div className="sdg-header">
              <span className="sdg-number">13</span>
              <span className="sdg-text">CLIMATE ACTION</span>
            </div>
            <div className="sdg-graphic">
              <div className="climate-globe">🌍</div>
            </div>
          </div>

          {/* SDG 14 */}
          <div className="sdg-block sdg-14">
            <div className="sdg-header">
              <span className="sdg-number">14</span>
              <span className="sdg-text">LIFE BELOW WATER</span>
            </div>
            <div className="sdg-graphic">
              <div className="water-waves">〰️〰️</div>
              <div className="fish-icon">🐟</div>
            </div>
          </div>

          {/* SDG 15 */}
          <div className="sdg-block sdg-15">
            <div className="sdg-header">
              <span className="sdg-number">15</span>
              <span className="sdg-text">LIFE ON LAND</span>
            </div>
            <div className="sdg-graphic">
              <div className="land-tree">🌳</div>
              <div className="birds-fly">🕊️</div>
            </div>
          </div>
        </div>
      </section>

    </div>

</AnimatedSection>
      {/* ================= Our promise ================= */}
<AnimatedSection as="section"  animation="fade-up">
 <section className="promise-banner" style={{ backgroundImage: `url(${better_choice_banner})` }}>
      <div className="promise-banner-overlay" />
 
      <div className="promise-banner-inner">
        <div className="promise-banner-copy">
          <p className="promise-banner-eyebrow">Our promise</p>
          <h1 className="promise-banner-heading">
            Better choices. Thoughtfully made. Responsibly delivered.
          </h1>
          <p className="promise-banner-body">
            We don&apos;t believe sustainability is about claiming perfection.
            It is about making better choices, asking better questions,
            improving continuously and being transparent about what our
            products can &mdash; and cannot &mdash; claim. That&apos;s the
            standard we want ORYA to stand for.
          </p>
        </div>
 
        <div className="promise-banner-card">
          <h2 className="card-heading">Ready to make a better choice?</h2>
          <p className="card-body">
            Explore sustainable solutions for your business, home or
            organisation.
          </p>
          <div className="card-actions">
            <a href="#solutions" className="btn btn-solid">
              Explore solutions <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a href="#quote" className="btn btn-outline">
              Request a quote
            </a>
          </div>
        </div>
      </div>
    </section>
</AnimatedSection>



        {/* ================= FOOTER ================= */}

            <Footer />
    </div>
  );
};

export default OrySustainabilityPage;