import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styling/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide1 from "../assets/slide1.jpeg";
import Slide2 from "../assets/slide2.jpeg";
import Slide3 from "../assets/slide3.jpeg";
import Slide4 from "../assets/slide4.jpeg";
import AnimatedSection from "../components/AnimatedSection";
const Home = () => {
  const heroSlides = [
    {
      image: Slide1,
      title: "Sustainable Solutions for a Better Tomorrow",
      description:
        "From agricultural resources to sustainable products — connecting responsible sourcing, circular materials, sustainable packaging and natural food.",
    },
    {
      image: Slide2,
      title: "From Nature to Responsible Consumption",
      description:
        "Building sustainable value chains through natural resources, responsible sourcing and eco-friendly products.",
    },
    {
      image: Slide3,
      title: "Building a Greener Future",
      description:
        "Sustainable packaging and natural food solutions designed for businesses and communities.",
    },
    {
      image: Slide4,
      title: "Building a Greener Future",
      description:
        "Sustainable packaging and natural food solutions designed for businesses and communities.",
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
    // {
    //   title: "Agriculture & Value Chain",
    //   image: Slide1,
    //   description: "Connecting farmers to markets and beyond.",
    // },
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

  const businessTypes = [
    "Hotels",
    "Restaurants",
    "Catering",
    "Retail",
    "Corporates",
    "Institutions",
    "Food Businesses",
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
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>

              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >

                <div className="hero-overlay"></div>

                <div className="hero-content">

                  <p className="hero-small-title">
                    Sustainable Packaging • Natural Food • Circular Value Chains
                  </p>

                  <h1>{slide.title}</h1>

                  <p className="hero-description">
                    {slide.description}
                  </p>

                  <div className="hero-buttons">

                    <Link
                      to="/products"
                      className="btn btn-primary"
                    >
                      Explore Products
                    </Link>

                    <Link
                      to="/partner"
                      className="btn btn-outline"
                    >
                      Partner With ORYA
                    </Link>

                    <a
                      href="https://wa.me/917809903359"
                      className="btn btn-whatsapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>

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

          <p>
            One platform. Two connected worlds.
          </p>
        </div>

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
            <span>ORYA</span>
            <small>BIO-SOLUTIONS</small>
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
          <span>🍃</span>
          <h2>Our Circular Value Chain</h2>
          <span>🍃</span>

          <p>
            From Farm & Nature to Responsible Consumption
          </p>
        </div>

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
     


      {/* ================= BUSINESS ================= */}
<AnimatedSection as="section" className="business-section" animation="fade-left">

   <section className="business-section">

        <div className="business-content">

          <div className="business-left">

            <h2>For Businesses</h2>

            <p>
              Sustainable solutions for every need
            </p>

            <div className="business-types">

              {businessTypes.map((type, index) => (
                <div className="business-type" key={index}>

                  <div className="business-icon">
                    {["🏨", "🍴", "☕", "🛒", "🏢", "🏛️", "🌱"][index]}
                  </div>

                  <span>{type}</span>

                </div>
              ))}

            </div>

          </div>


          <div className="business-right">

            <h3>Bulk Enquiries & Business Orders</h3>

            <p>
              Partner with ORYA for quality, sustainable and reliable solutions.
            </p>

            <Link to="/contact" className="business-btn">
              Request an Enquiry
            </Link>

          </div>

        </div>

      </section>
</AnimatedSection>
   


      {/* ================= PRODUCT CATEGORIES ================= */}

 <section className="section">

        <div className="section-heading">
          <span>🍃</span>
          <h2>Our Product Categories</h2>
          <span>🍃</span>
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
          <span>🍃</span>
          <h2>Why Choose ORYA?</h2>
          <span>🍃</span>
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

     


      {/* ================= ABOUT ================= */}
    <section className="about-section">

        <div className="about-image">

          <img
            src={Slide1}
            alt="ORYA"
          />

        </div>

        <div className="about-content">

          <h2>About ORYA</h2>

          <h3>Building a Greener Value Chain</h3>

          <p>
            ORYA BIO-SOLUTIONS is a sustainability-driven enterprise
            focused on sustainable packaging, natural food and circular
            solutions.
          </p>

          <p>
            We connect agriculture, natural resources, responsible
            sourcing and modern innovation to build a better future for
            people and the planet.
          </p>

          <Link to="/about" className="btn btn-primary">
            Know More About ORYA
          </Link>

        </div>


        <div className="values-list">

          <div>
            💡
            <span>Innovation</span>
          </div>

          <div>
            🌱
            <span>Sustainability</span>
          </div>

          <div>
            🤝
            <span>Integrity</span>
          </div>

          <div>
            ⭐
            <span>Quality</span>
          </div>

        </div>

      </section>


  


      {/* ================= DEALER ================= */}
<AnimatedSection as="section" className="dealer-section" animation="fade-up">

   <section className="dealer-section">

        <div className="dealer-icon">
          👥
        </div>

        <div className="dealer-text">

          <h2>Become a Dealer / Partner</h2>

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
            Become a Dealer
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

      </section>
</AnimatedSection>
   
        {/* ================= FOOTER ================= */}

            <Footer />
    </div>
  );
};

export default Home;