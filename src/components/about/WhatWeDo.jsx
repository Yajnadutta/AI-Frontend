import React from "react";
import what_we_do_card1 from "../../assets/what-we-do-card1.png";
import what_we_do_card2 from "../../assets/what-we-do-card2.png";
import what_we_do_card3 from "../../assets/what-we-do-card3.png";
import what_we_do_card4 from "../../assets/what-we-do-card4.png";
const cards = [
  {
    title: "Sustainable Packaging",
    description:
      "Bagasse, bamboo, banana fibre, coconut-based products, biodegradable bags, cutlery and sustainable packaging solutions.",
    image:
      what_we_do_card1,
  },
  {
    title: "Natural Food",
    description:
      "Phula Badi, spices, millets, dry foods and traditional products sourced and presented with care.",
    image:
      what_we_do_card2,
  },
  {
    title: "Circular Products",
    description:
      "Products and materials created using renewable resources and agricultural by-products wherever suitable.",
    image:
      what_we_do_card3,
  },
  {
    title: "Agriculture & Value Chain",
    description:
      "Connecting sourcing, processing, packaging, branding and distribution to create stronger value chains.",
    image:
      what_we_do_card4,
  },
];

export default function WhatWeDo() {
  return (
    <section className="wwd-section">
      <h2 className="wwd-heading">
        <span className="wwd-leaf" aria-hidden="true">
          🍃
        </span>
        What We Do
        <span className="wwd-leaf" aria-hidden="true">
          🍃
        </span>
      </h2>

      <div className="wwd-grid">
        {cards.map((card) => (
          <div className="wwd-card" key={card.title}>
            <div className="wwd-image-wrap">
              <img
                src={card.image}
                alt={card.title}
                className="wwd-image"
                loading="lazy"
              />
            </div>
            <h3 className="wwd-card-title">{card.title}</h3>
            <p className="wwd-card-desc">{card.description}</p>
          </div>
        ))}
      </div>

      <style>{`
        .wwd-section {
          --wwd-green: #3f7d3a;
          --wwd-text: #4a4a4a;
          --wwd-radius: 14px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          margin: 0 auto;
          padding: 40px 24px;
          box-sizing: border-box;
        }

        .wwd-heading {
          text-align: center;
          font-weight: 700;
          font-size: 30px;
          letter-spacing: 0.5px;
          color: #075b2b;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 0 32px;
        }

        .wwd-leaf {
          font-size: 16px;
        }

        .wwd-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .wwd-card {
          background: #ffffff;
          border-radius: var(--wwd-radius);
          padding: 14px 14px 22px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .wwd-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        .wwd-image-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 16px;
        }

        .wwd-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

       

        .wwd-card-title {
          color: var(--wwd-green);
          font-size: 17px;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .wwd-card-desc {
          color: var(--wwd-text);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .wwd-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .wwd-grid {
            grid-template-columns: 1fr;
          }

          .wwd-heading {
            font-size: 22px;
          }

          .wwd-card:hover {
            transform: scale(1.03);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wwd-card,
          .wwd-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
