import React from "react";
import { Handshake } from "lucide-react";
import ctabanner from "../../assets/ctabanner.jpg";
export default function CTABanner() {
  return (
    <section className="cta-section">
      <div className="cta-image-wrap">
        <img
          src={ctabanner}
          alt="A young seedling growing from soil"
          className="cta-image"
          loading="lazy"
        />
      </div>

      <div className="cta-panel">
        <h2 className="cta-heading">Let's Build a Sustainable Future Together</h2>
        <p className="cta-text">
          From sustainable packaging to natural food and agriculture-linked
          value chains, ORYA is working towards practical solutions for a
          better tomorrow.
        </p>

        <div className="cta-actions">
          <button className="cta-btn cta-btn-light">Explore Our Products</button>
          <button className="cta-btn cta-btn-outline">
            <Handshake size={18} strokeWidth={1.8} />
            Become a Partner
          </button>
        </div>
      </div>

      <style>{`
       .cta-section {
    --cta-green-dark: #1b3519; /* Matched to the darker shades on the left/edges */
    --cta-green: #254d23;      /* Matched to the mid-tones on the right */

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          display: grid;
          grid-template-columns: 1fr 2.4fr;
          margin: 0 auto;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          margin-bottom: 20px;
        }

        .cta-image-wrap {
          overflow: hidden;
        }

        .cta-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          min-height: 220px;
        }

        .cta-panel {
          background: linear-gradient(120deg, var(--cta-green-dark), var(--cta-green));
          color: #fff;
          padding: 40px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }

        .cta-heading {
          font-size: 26px;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }

        .cta-text {
          font-size: 14.5px;
          line-height: 1.6;
          color: #dfe9dc;
          margin: 0;
          max-width: 60ch;
        }

        .cta-actions {
          display: flex;
          gap: 14px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .cta-btn {
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 24px;
          border-radius: 8px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.25s ease, background 0.25s ease;
          border: none;
        }

        .cta-btn-light {
          background: #eef4dd;
          color: var(--cta-green-dark);
        }

        .cta-btn-light:hover {
          background: #ffffff;
          transform: scale(1.05);
        }

        .cta-btn-outline {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255, 255, 255, 0.7);
        }

        .cta-btn-outline:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: scale(1.05);
        }

        /* Tablet */
        @media (max-width: 900px) {
          .cta-section {
            grid-template-columns: 1fr;
          }

          .cta-image {
            min-height: 180px;
          }

          .cta-panel {
            padding: 32px 28px;
          }

          .cta-heading {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .cta-actions {
            flex-direction: column;
          }

          .cta-btn {
            justify-content: center;
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-btn {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}