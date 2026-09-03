import React from "react";
import { Leaf, Lightbulb, Wheat, Handshake, Award } from "lucide-react";
import our_business_pillar from "../../assets/our_business_pillar.png";
const pillars = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Making responsible choices for products, materials and supply chains.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Exploring better materials, formats and solutions for changing needs.",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description:
      "Creating stronger connections between agricultural resources, producers and markets.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Building transparent, dependable and long-term business relationships.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Focusing on reliable products, consistent sourcing and customer requirements.",
  },
];

export default function BusinessPillars() {
  return (
    <section className="bp-section">
      <h2 className="bp-heading">
        <span className="bp-leaf" aria-hidden="true">
          🍃
        </span>
        Our Business Pillars
        <span className="bp-leaf" aria-hidden="true">
          🍃
        </span>
      </h2>

      <div className="bp-layout">
        <div className="bp-panel">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div className="bp-pillar" key={pillar.title}>
                <div className="bp-icon-wrap">
                  <Icon size={30} strokeWidth={1.5} className="bp-icon" />
                </div>
                <h3 className="bp-title">{pillar.title}</h3>
                <p className="bp-desc">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bp-image-wrap">
          <img
            src={our_business_pillar}
            alt="Coconut shell and bamboo products"
            className="bp-image"
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        .bp-section {
          --bp-green: #3f7d3a;
          --bp-text: #4a4a4a;
          --bp-bg: #f4f4ef;
          --bp-border: #e2e2da;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 40px 24px;
          box-sizing: border-box;
        }

        .bp-heading {
          text-align: center;
          font-weight: 700;
          font-size: 30px;
          letter-spacing: 0.5px;
          color: #075b2b;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 0 28px;
        }

        .bp-leaf {
          font-size: 16px;
        }

        .bp-layout {
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: 20px;
          align-items: stretch;
        }

        .bp-panel {
          background: var(--bp-bg);
          border-radius: 10px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }

        .bp-pillar {
          padding: 26px 18px;
          text-align: center;
          border-right: 1px solid var(--bp-border);
          transition: transform 0.3s ease, background 0.3s ease;
          cursor: pointer;
          border-radius: 10px;
        }

        .bp-pillar:last-child {
          border-right: none;
        }

        .bp-pillar:hover {
          transform: scale(1.06);
          background: #ffffff;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          z-index: 1;
        }

        .bp-icon-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 12px;
        }

        .bp-icon {
          color: var(--bp-green);
          transition: transform 0.3s ease;
        }

        .bp-pillar:hover .bp-icon {
          transform: scale(1.12);
        }

        .bp-title {
          color: var(--bp-green);
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .bp-desc {
          color: var(--bp-text);
          font-size: 12.5px;
          line-height: 1.5;
          margin: 0;
        }

        .bp-image-wrap {
          border-radius: 10px;
          overflow: hidden;
          min-height: 220px;
        }

        .bp-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .bp-image-wrap:hover .bp-image {
          transform: scale(1.05);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .bp-layout {
            grid-template-columns: 1fr;
          }

          .bp-image-wrap {
            min-height: 260px;
            order: -1;
          }

          .bp-panel {
            grid-template-columns: repeat(3, 1fr);
          }

          .bp-pillar:nth-child(3n) {
            border-right: none;
          }

          .bp-pillar:nth-child(-n + 3) {
            border-bottom: 1px solid var(--bp-border);
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .bp-panel {
            grid-template-columns: repeat(2, 1fr);
          }

          .bp-pillar:nth-child(3n) {
            border-right: 1px solid var(--bp-border);
          }

          .bp-pillar:nth-child(2n) {
            border-right: none;
          }

          .bp-pillar:nth-child(-n + 3) {
            border-bottom: 1px solid var(--bp-border);
          }

          .bp-pillar:nth-child(n + 4) {
            border-bottom: none;
          }

          .bp-heading {
            font-size: 18px;
          }

          .bp-pillar:hover {
            transform: scale(1.03);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-pillar,
          .bp-icon,
          .bp-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
