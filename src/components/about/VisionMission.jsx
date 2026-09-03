import React from "react";
import { Eye, Target } from "lucide-react";
import vision_and_mission from "../../assets/vision-and-mission.png";
export default function VisionMission() {
  return (
    <section className="vm-section">
      <h2 className="vm-heading-title">
  <span className="vm-leaf" aria-hidden="true">
    🍃
  </span>
  Vision &amp; Mission
  <span className="vm-leaf" aria-hidden="true">
    🍃
  </span>
</h2>
      <div className="vm-layout">
        <div className="vm-content">
          <div className="vm-block">
            <div className="vm-label">
              <Eye size={20} strokeWidth={1.8} className="vm-icon" />
              <h3 className="vm-heading">Our Vision</h3>
            </div>
            <p className="vm-text">
              To lead the global transition toward circular bio-solutions by
              integrating agricultural ecosystems with sustainable, modern
              industrial manufacturing.
            </p>
          </div>

          <div className="vm-block">
            <div className="vm-label">
              <Target size={20} strokeWidth={1.8} className="vm-icon" />
              <h3 className="vm-heading">Our Mission</h3>
            </div>
            <p className="vm-text">
              To eliminate single-use plastics by delivering premium,
              cost-effective, compostable packaging and natural food products
              backed by ethical sourcing and uncompromising quality.
            </p>
          </div>
        </div>

        <div className="vm-image-wrap">
          <img
            src={vision_and_mission}
            alt="Farmers tending to a young crop field"
            className="vm-image"
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        .vm-heading-title {
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


        .vm-section {
          --vm-green: #3f7d3a;
          --vm-green-dark: #2e5c2b;
          --vm-text: #4a4a4a;
          --vm-tint: #eef4ec;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 48px 24px;
          box-sizing: border-box;
        }

        .vm-layout {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .vm-content {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .vm-block {
          border-left: 3px solid var(--vm-green);
          padding-left: 20px;
        }

        .vm-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .vm-icon {
          color: var(--vm-green);
          flex-shrink: 0;
        }

        .vm-heading {
          color: var(--vm-green-dark);
          font-size: 19px;
          font-weight: 700;
          margin: 0;
        }

        .vm-text {
          color: var(--vm-text);
          font-size: 15.5px;
          line-height: 1.7;
          margin: 0;
          max-width: 56ch;
        }

        .vm-image-wrap {
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .vm-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .vm-image-wrap:hover .vm-image {
          transform: scale(1.06);
        }

        /* Tablet */
        @media (max-width: 900px) {
          .vm-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .vm-image-wrap {
            order: -1;
            aspect-ratio: 16 / 9;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .vm-section {
            padding: 36px 18px;
          }

          .vm-heading {
            font-size: 17px;
          }

          .vm-text {
            font-size: 14.5px;
          }

          .vm-block {
            padding-left: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vm-image {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
