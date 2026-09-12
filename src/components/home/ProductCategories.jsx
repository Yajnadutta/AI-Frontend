import React from "react";
import { Leaf, Box, Soup, Sprout, Droplet, ArrowRight } from "lucide-react";
import sustainable_packaging from "../../assets/sustainable-packaging.PNG"
import natural_food from "../../assets/natural-food.PNG"
import agri_waste from "../../assets/agri-waste.PNG"
import sustainable_hydration from "../../assets/sustainable-hydration.PNG"

const categories = [
  {
    image: sustainable_packaging,
    icon: Box,
    title: "Sustainable Packaging",
    desc: "Eco-friendly packaging for a plastic-free future.",
  },
  {
    image: natural_food,
    icon: Soup,
    title: "Natural Food",
    desc: "Natural, healthy and traditional food products.",
  },
  {
    image: agri_waste,
    icon: Sprout,
    title: "Agri-Waste Products",
    desc: "Turning agricultural waste into valuable products.",
  },
  {
    image: sustainable_hydration,
    icon: Droplet,
    title: "Sustainable Hydration",
    desc: "Eco-friendly hydration solutions for a healthier tomorrow.",
  },
];

export default function ProductCategories() {
  return (
    <div className="pc-wrap">
      <style>{`
        .pc-wrap {
          --ink: #14361f;
          --green: #2f7a34;
          --green-dark: #1f5c28;
          --muted: #5a6b60;
          background: #f3f7f2;
          padding: 56px 24px 64px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .pc-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 40px;
        }
        .pc-eyebrow-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .pc-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: var(--ink);
          margin: 0;
          letter-spacing: -0.02em;
        }
        .pc-title span {
          color: var(--green);
        }
        .pc-sub {
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 16px;
        }
        .pc-rule {
          width: 56px;
          height: 3px;
          background: var(--green);
          border: none;
          border-radius: 2px;
          margin: 18px auto 0;
        }
        .pc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .pc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .pc-grid { grid-template-columns: 1fr; }
        }
        .pc-card {
          position: relative;
          background: #fff;
          border-radius: 18px;
          overflow: visible;
          box-shadow: 0 4px 18px rgba(20, 54, 31, 0.08);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .pc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(20, 54, 31, 0.14);
        }
        .pc-media {
          position: relative;
          height: 200px;
          border-radius: 18px 18px 0 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          /* cut a soft circular notch out of the bottom-left corner
             so the icon badge appears to sit inside the image edge */
          -webkit-mask-image: radial-gradient(
            circle at 56px 100%,
            transparent 0px,
            transparent 34px,
            black 37px,
            black 100%
          );
          mask-image: radial-gradient(
            circle at 56px 100%,
            transparent 0px,
            transparent 34px,
            black 37px,
            black 100%
          );
        }
        .pc-icon-badge {
          position: absolute;
          left: 24px;
          top: 168px; /* media height (200px) minus half the badge (32px) */
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #e4f0df;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          z-index: 2;
        }
        .pc-body {
          border-radius: 0 0 18px 18px;
          padding: 44px 18px 22px;
        }
        .pc-card-title {
          margin: 0 0 8px;
          font-size: 19px;
          font-weight: 700;
          color: var(--green-dark);
        }
        .pc-card-desc {
          margin: 0 0 18px;
          font-size: 14px;
          line-height: 1.5;
          color: var(--muted);
          min-height: 42px;
        }
        .pc-explore {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 700;
          color: var(--green-dark);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .pc-explore svg {
          width: 15px;
          height: 15px;
          transition: transform 0.15s ease;
        }
        .pc-explore:hover svg {
          transform: translateX(3px);
        }
      `}</style>

      <div className="pc-header">
        <div className="pc-eyebrow-row">
          <Leaf size={22} color="#2f7a34" />
          <h2 className="pc-title">
            Our Product <span>Categories</span>
          </h2>
          <Leaf size={22} color="#2f7a34" />
        </div>
        <p className="pc-sub">
          Sustainable choices for a healthier people and a greener planet
        </p>
        <hr className="pc-rule" />
      </div>

      <div className="pc-grid">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <div className="pc-card" key={c.title}>
              <div
                className="pc-media"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="pc-icon-badge">
                <Icon size={24} color="#2f7a34" />
              </div>
              <div className="pc-body">
                <h3 className="pc-card-title">{c.title}</h3>
                <p className="pc-card-desc">{c.desc}</p>
                <button className="pc-explore">
                  Explore <ArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}