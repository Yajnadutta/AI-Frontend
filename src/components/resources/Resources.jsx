import React from "react";
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
import ResourceBanner from "../../components/resources/ResourceBanner";
import ExploreResources from "../../components/resources/ExploreResources";
import ResourcesSection from "../../components/resources/ResourcesSection";
import SustainableChoicesSection from "../../components/resources/SustainableChoicesSection";
import ScrollToHashElement from "../../components/ScrollToHashElement";

const Resources = ({}) => {
  return (
    <div className="home">
      {/* scrolls to #blog-insights / #product-catalogue / #downloads / #faqs
          whenever the URL hash changes (e.g. from the header dropdown) */}
      <ScrollToHashElement />

      {/* ================= HEADER ================= */}

      <Header />

      {/* ================= Resource BANNER ================= */}

      <ResourceBanner />
      {/* ================= EXPLORE RESOURCES ================= */}

      <AnimatedSection as="section" animation="fade-up">
        <ExploreResources />
      </AnimatedSection>

      {/* =================  ORYA CATELOG,FAQ & DOWNLOADS ================= */}
      <AnimatedSection as="section" animation="fade-up">
        <ResourcesSection />
      </AnimatedSection>

      {/* ================= Looking for sustainable solutions for your business? ================= */}
      <AnimatedSection as="section" animation="fade-up">
        <SustainableChoicesSection />
      </AnimatedSection>

      {/* ================= FOOTER ================= */}

      <Footer />
    </div>
  );
};

export default Resources;