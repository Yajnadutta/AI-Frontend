import React from "react";
import { Leaf, Recycle, Globe, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
// Keep this image next to the component (or update the path)
import sustainableBg from "../../assets/sustainable_choices_bg.png";

/**
 * SustainableChoicesSection
 * Two stacked blocks:
 *  1. "Learn About Sustainable Choices" — real photo background with an
 *     overlaid heading, description, a 3-item feature row, and a
 *     handwritten-style tagline on the right.
 *  2. A dark-green CTA bar — "Can't Find What You're Looking For?" with
 *     two actions (Send an Enquiry / Chat on WhatsApp).
 *
 * Usage:
 *   <SustainableChoicesSection />
 */
const FEATURES = [
  {
    icon: Leaf,
    title: "Materials",
    description: "Understanding renewable and responsible materials.",
  },
  {
    icon: Recycle,
    title: "Circularity",
    description: "Turning resources and by-products into value.",
  },
  {
    icon: Globe,
    title: "Responsible Consumption",
    description: "Making better choices for people and the planet.",
  },
];

export default function SustainableChoicesSection() {
  return (
    <section className="sustain">
      <style>{`
        .sustain {
          --ink: #16281f;
          --green-900: #143f24;
          --green-700: #1f6b3a;
        }
 
        /* =========================================================
           1. Learn About Sustainable Choices (image, text baked in)
        ========================================================= */
        .learn {
          width: 100%;
          line-height: 0; /* removes the tiny gap under inline images */
        }
        .learn img {
          display: block;
          width: 100%;
          height: auto;
        }
 
        /* =========================================================
           2. CTA bar
        ========================================================= */
        .cta {
          position: relative;
          background: linear-gradient(120deg, #143f24 0%, #1d5c34 100%);
          overflow: hidden;
          padding: clamp(20px, 3vw, 30px) clamp(20px, 5vw, 56px);
        }
 
        .cta__leaf {
          position: absolute;
          color: rgba(255, 255, 255, 0.16);
          pointer-events: none;
        }
        .cta__leaf--bl {
          width: clamp(60px, 9vw, 120px);
          height: clamp(60px, 9vw, 120px);
          left: -10px;
          bottom: -18px;
          transform: rotate(-18deg);
        }
        .cta__leaf--br {
          width: clamp(50px, 7vw, 96px);
          height: clamp(50px, 7vw, 96px);
          right: 26%;
          bottom: -14px;
          transform: rotate(12deg);
        }
 
        .cta__inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
 
        .cta__text { flex: 1; min-width: 260px; }
        .cta__title {
          margin: 0 0 6px;
          font-weight: 800;
          font-size: clamp(18px, 2vw, 24px);
          color: #fff;
        }
        .cta__desc {
          margin: 0;
          font-size: clamp(12.5px, 1vw, 14.5px);
          color: rgba(255, 255, 255, 0.82);
        }
 
        .cta__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
 
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: clamp(12.5px, 1vw, 14.5px);
          padding: 12px 20px;
          border-radius: 7px;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
        }
        .cta-btn:active { transform: translateY(1px); }
        .cta-btn svg { width: 16px; height: 16px; }
 
        .cta-btn--solid {
          background: #fff;
          color: var(--green-700);
          border: none;
          text-decoration: none;
        }
        .cta-btn--solid:hover { background: #eef3e3; }
 
        .cta-btn--outline {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255, 255, 255, 0.7);
          text-decoration: none;
        }
        .cta-btn--outline:hover {
          background: rgba(255, 255, 255, 0.12);
        }
 
        /* =========================================================
           Responsive
        ========================================================= */
        @media (max-width: 640px) {
          .cta__inner { flex-direction: column; align-items: flex-start; }
          .cta__actions { width: 100%; }
          .cta-btn { flex: 1; justify-content: center; }
        }
      `}</style>
 
      {/* ---------------- Learn About Sustainable Choices ---------------- */}
      <div className="learn">
        <img src={sustainableBg} alt="Learn about sustainable choices: materials, circularity and responsible consumption" />
      </div>
 
      {/* ---------------- CTA bar ---------------- */}
      <div className="cta">
        <Leaf className="cta__leaf cta__leaf--bl" strokeWidth={1.2} />
        <Leaf className="cta__leaf cta__leaf--br" strokeWidth={1.2} />
 
        <div className="cta__inner">
          <div className="cta__text">
            <h3 className="cta__title">Can't Find What You're Looking For?</h3>
            <p className="cta__desc">
              Tell us what you need and our team will help you find the right
              product, information or solution.
            </p>
          </div>
 
          <div className="cta__actions">
            <Link to="/contact#send-requirement" className="cta-btn cta-btn--solid">
              Send an Enquiry <ArrowRight />
            </Link>
             <a
                href="https://wa.me/917809903359"
               className="cta-btn cta-btn--outline"
                target="_blank"
                rel="noreferrer"
              > 

              <MessageCircle /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
 
