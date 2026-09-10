import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styling/Home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BusinessBanner from "../../components/home/BusinessBanner";
import Slide1 from "../../assets/slide1.jpeg";
import Slide2 from "../../assets/slide2.jpeg";
import Slide3 from "../../assets/slide3.jpeg";
import Slide4 from "../../assets/slide4.jpeg";
import Certification_01 from "../../assets/Certification_01.jpeg";
import Certification_02 from "../../assets/Certification_02.jpeg";
import Certification_03 from "../../assets/Certification_03.jpeg";
import Certification_04 from "../../assets/Certification_04.jpeg";
import Orya_Does_Logo from "../../assets/orya-does-logo.png";
import oryaProducts from "../../assets/orya-products.png";
import AnimatedSection from "../../components/home/AnimatedSection";
import {
  Leaf,
  Recycle,
  Sprout,
  Wheat,
  Package,
  PackagePlus,
  ShoppingBag,
  MessageCircle,
  FileText,
} from "lucide-react";
import DealerBanner from "./DealerBanner";
const WhatsAppIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h.01a7.94 7.94 0 0 0 5.54-13.58zm-5.55 12.2h-.01a6.6 6.6 0 0 1-3.35-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 0 1 10.24-8.2 6.55 6.55 0 0 1 1.94 4.67 6.62 6.62 0 0 1-6.6 6.63zm3.6-4.95c-.2-.1-1.16-.57-1.34-.64-.18-.07-.31-.1-.44.1-.13.2-.5.63-.62.76-.11.13-.23.14-.42.05a5.4 5.4 0 0 1-2.7-2.36c-.2-.35.2-.32.58-1.07.06-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.62s.7 1.88.8 2.01c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.16-.47 1.32-.93.16-.46.16-.85.11-.93-.05-.09-.18-.14-.38-.24z"/>
  </svg>
);

const Home = () => {
const heroSlides = [
  {
    image: Slide1,
    title: "Sustainable Solutions for a Better Planet",
    description:
      "Eco-friendly alternatives to plastic using bagasse, bamboo, banana fibre,coconut and other biodegradable materials.",
    categoryId: "plastic-alternatives",
  },
  {
    image: Slide2,
    title: "Sustainable Hydration Without Plastic.",
    description:
      "Discover thoughtfully designed alternatives to conventional plastic bottles using bamboo and natural materials, paper-based solutions and emerging plant-based materials.",
    categoryId: "bottles",
  },
  {
    image: Slide3,
    title: "From Nature, Crafted for a Sustainable Tomorrow.",
    description:
      "Transforming renewable and agricultural resources into useful, responsible products while supporting a more circular economy.",
    categoryId: "circular-materials",
  },
  {
    image: Slide4,
    title: "Natural Food Pure. Wholesome. Authentic.",
    description:
      "Traditional and natural foods sourced responsibly and presented with sustainable packaging.",
    categoryId: "natural-food",
  },
];
const product_categories = [
  {
    id: "plastic-alternatives",
    highlights: [
      { icon: Recycle, text: "Plastic Alternatives" },
      { icon: Recycle, text: "Compostable Products" },
      { icon: Sprout, text: "Biodegradable Materials" },
      { icon: Wheat, text: "Renewable Resources" },
    ],
  },
  {
    id: "bottles",
    highlights: [
      { icon: Package, text: "Bamboo / Natural-Material Bottles" },
      { icon: PackagePlus, text: "Paper Bottles" },
      { icon: Recycle, text: "Corn / Plant-Based Bottles" },
      { icon: Sprout, text: "Plastic-Free Alternatives" },
    ],
  },
  {
    id: "circular-materials",
    highlights: [
      { icon: Sprout, text: "Bamboo Products" },
      { icon: Leaf, text: "Banana Fibre" },
      { icon: Package, text: "Coconut Products" },
      { icon: Recycle, text: "Circular Materials" },
    ],
  },
  {
    id: "natural-food",
    highlights: [
      { icon: Leaf, text: "Keonjhar Badi" },
      { icon: Wheat, text: "Spices" },
      { icon: Wheat, text: "Millets" },
      { icon: Package, text: "Dry Foods" },
      { icon: Package, text: "Traditional Products" },
    ],
  },
];
const certificates = [
  { id: 1, image: Certification_01, alt: "Certification 1" },
  { id: 2, image: Certification_02, alt: "Certification 2" },
  { id: 3, image: Certification_03, alt: "Certification 3" },
  { id: 4, image: Certification_04, alt: "Certification 4" },
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
    }
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

      {/* ================= HERO CAROUSEL ================= */}

      <section className="hero-section">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    loop={true}
    className="hero-swiper"
  >
    {heroSlides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="hero-slide">
          <img
            src={slide.image}
            alt={slide.title}
            className="hero-image"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            

            <h1>{slide.title}</h1>

            <p className="hero-description">{slide.description}</p>
<div className="hero-highlights">
              {product_categories
                .find((category) => category.id === slide.categoryId)
                ?.highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div className="hero-highlight" key={i}>
                      <Icon size={22} strokeWidth={1.8} />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
            </div>
            <div className="hero-buttons">
  <Link to="/products" className="btn btn-primary">
    <ShoppingBag size={18} strokeWidth={2} />
    Explore Products
  </Link>
  <a
    href="https://wa.me/917809903359"
    className="btn btn-whatsapp"
    target="_blank"
    rel="noreferrer"
  >
   <WhatsAppIcon size={25} />
    Chat on WhatsApp
  </a>
  <Link to="/contact#send-requirement" className="btn btn-whatsapp">
    <FileText size={18} strokeWidth={2} />
    Request a Quote
  </Link>
</div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      {/* ================= WHAT ORYA DOES ================= */}
<AnimatedSection as="section" className="section" animation="fade-up">
 <section className="section">

        <div className="section-heading">
          <span>🍃</span>
          <h2>What ORYA Does</h2>
          <span>🍃</span>

         
        </div>
 <p className="chain-bottom" style={{ marginTop: '-25px' }}>
            One platform. Two connected worlds.
          </p>
        <div className="what-orya">

          <div className="what-card packaging-card">

            <div className="circle-icon">
              🌿
            </div>

            <div>
              <h3>Sustainable Packaging</h3>

              <p>
                Eco-friendly alternatives for a cleaner and greener future.
              </p>

              <div className="features-grid">
                <span>✓ Bagasse Products</span>
                <span>✓ Wooden / Biodegradable Cutlery</span>
                <span>✓ Bamboo Products</span>
                <span>✓ Honeycomb Packaging</span>
                <span>✓ Banana Fibre Products</span>
                <span>✓ Compostable Solutions</span>
                <span>✓ Coconut Products</span>
                <span>✓ Custom Eco Packaging</span>
              </div>

              <Link to="/products/packaging" className="small-btn">
                View Packaging Products
              </Link>
            </div>

          </div>


          <div className="orya-logo-circle">
            <img src={Orya_Does_Logo} alt="ORYA Does" />
            {/* <span>ORYA</span>
            <small>BIO-SOLUTIONS</small> */}
          </div>


          <div className="what-card food-card">

            <div className="circle-icon">
              🌾
            </div>

            <div>
              <h3>Natural Food</h3>

              <p>
                Wholesome, natural and traditional foods from nature.
              </p>

              <div className="features-grid">
                <span>✓ Phula Badi</span>
                <span>✓ Dry Foods</span>
                <span>✓ Spices</span>
                <span>✓ Natural & Traditional Products</span>
                <span>✓ Millets</span>
              </div>

              <Link to="/products/food" className="small-btn brown" style={{ marginTop: '28px' }}>
                View Food Products
              </Link>
            </div>

          </div>

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
          {/* <p>
            From Farm & Nature to Responsible Consumption
          </p> */}
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
     


   
<BusinessBanner/>

      {/* ================= PRODUCT CATEGORIES ================= */}

 <section className="section">

        <div className="section-heading">
          <span className="leaf">🍃</span>
          <h2>Our Product Categories</h2>
          <span className="leaf">🍃</span>
        </div>


        <div className="category-grid">

          {categories.map((category, index) => (

            <div className="category-card" key={index}>

              <img
                src={category.image}
                alt={category.title}
              />

              <div className="category-content">

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <Link to="/products">
                  Explore →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

     


      {/* ================= WHY CHOOSE ORYA ================= */}


 <section className="why-section">

        <div className="section-heading">
          <span className="leaf">🍃</span>
          <h2>Why Choose ORYA?</h2>
          <span className="leaf">🍃</span>
        </div>

        <div className="why-grid">

          <div className="why-item">
            <span>🌿</span>
            <strong>100%</strong>
            <p>Eco-friendly Products</p>
          </div>

          <div className="why-item">
            <span>👥</span>
            <strong>1000+</strong>
            <p>Happy Customers</p>
          </div>

          <div className="why-item">
            <span>📦</span>
            <strong>50+</strong>
            <p>Products & Solutions</p>
          </div>

          <div className="why-item">
            <span>🚚</span>
            <strong>Pan India</strong>
            <p>Delivery Network</p>
          </div>

          <div className="why-item">
            <span>🌍</span>
            <strong>Sustainable</strong>
            <p>Impact for a Better Planet</p>
          </div>

        </div>

      </section>

     


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

  
    {/* ================= Certificate ================= */}
<section className="certificate-section">
  <div className="section-heading" style={{ marginBottom: "10px",marginTop: "30px" }}>
    <span className="leaf">🍃</span>
    <h2>About ORYA</h2>
    <span className="leaf">🍃</span>
  </div>

  <section className="about-orya">
      <div className="about-orya__image-wrap">
        <img
          src={oryaProducts}
          alt="ORYA sustainable packaging products including bowls, containers and bottles"
          className="about-orya__image"
        />
      </div>
 
      <div className="about-orya__content">
        <h2 className="about-orya__title">Building a Greener Value Chain</h2>
 
        <p className="about-orya__paragraph">
          ORYA BIO-SOLUTIONS is a sustainability-driven enterprise focused on
          sustainable packaging, natural food and circular solutions.
        </p>
 
        <p className="about-orya__paragraph">
          We connect agriculture, natural resources, responsible sourcing and
          modern innovation to build a better future for people and the
          planet.
        </p>
        <p className="about-orya__paragraph">
          Every product we make is designed to return to the earth, not sit in it. From farm by-products to your table and back to the soil — that's the cycle we're building.
        </p>
        <p className="about-orya__paragraph">
         Our packaging is made from natural fibres like bagasse, areca leaf and bamboo — fully biodegradable, compostable, and free from plastic lining. Every piece is built to perform like conventional packaging, without the environmental cost.
        </p>
      </div>
    </section>
</section>

      {/* ================= DEALER ================= */}
{/* <AnimatedSection as="section" className="dealer-section" animation="fade-up"> */}

   {/* <section className="dealer-section">

        <div className="dealer-icon">
          👥
        </div>

        <div className="dealer-text">

          <h2>Become a Partner</h2>

          <p>
            Join ORYA's growing network and be a part of the
            sustainable revolution.
          </p>

        </div>

        <div className="dealer-benefits">

          <span>✓ Attractive Dealer Benefits</span>
          <span>✓ Wide Product Range</span>
          <span>✓ Growing Market Demand</span>
          <span>✓ Marketing & Support</span>

        </div>

        <div className="dealer-buttons">

          <Link to="/dealer" className="btn btn-primary">
            Become a Partner
          </Link>

          <a
            href="https://wa.me/917809903359"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            WhatsApp
          </a>

        </div>

      </section> */}
<DealerBanner/>


{/* </AnimatedSection> */}
   
        {/* ================= FOOTER ================= */}

            <Footer />
    </div>
  );
};

export default Home;