import React from "react";
import { Coffee, Handshake, Globe } from "lucide-react";

const cards = [
  {
    icon: Coffee,
    title: "Café",
    description: "Eco-friendly café concept",
  },
  {
    icon: Handshake,
    title: "Franchise",
    description: "Expand with a franchise model",
  },
  {
    icon: Globe,
    title: "Export Worldwide",
    description: "Take ORYA to the global market",
  },
];

export default function FutureOfOrya() {
  return (
    <section className="fe-section">
      <h2 className="fe-heading">
        <span className="fe-leaf" aria-hidden="true">
          🍃
        </span>
        The Future Expansion
        <span className="fe-leaf" aria-hidden="true">
          🍃
        </span>
      </h2>

      <div className="fe-grid">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div className="fe-card" key={card.title}>
              <div className="fe-icon-wrap">
                <Icon size={30} strokeWidth={1.6} className="fe-icon" />
              </div>
              <h3 className="fe-title">{card.title}</h3>
              <p className="fe-desc">{card.description}</p>
            </div>
          );
        })}
      </div>

      <style>{`
        .fe-section {
          --fe-green: #3f7d3a;
          --fe-green-dark: #2e5c2b;
          --fe-text: #4a4a4a;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 40px 24px;
          box-sizing: border-box;
        }

        .fe-heading {
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

        .fe-leaf {
          font-size: 16px;
        }

        .fe-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .fe-card {
          background: #fff;
          border: 1px solid #e7ece5;
          border-radius: 14px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .fe-card:hover {
          transform: scale(1.06);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);
        }

        .fe-icon-wrap {
          width: 64px;
          height: 64px;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #eef4ec;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .fe-card:hover .fe-icon-wrap {
          transform: scale(1.1);
        }

        .fe-icon {
          color: var(--fe-green);
        }

        .fe-title {
          color: var(--fe-green-dark);
          font-size: 17px;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .fe-desc {
          color: var(--fe-text);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        /* Tablet */
        @media (max-width: 800px) {
          .fe-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .fe-grid {
            grid-template-columns: 1fr;
          }

          .fe-heading {
            font-size: 18px;
          }

          .fe-card:hover {
            transform: scale(1.03);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fe-card,
          .fe-icon-wrap {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}