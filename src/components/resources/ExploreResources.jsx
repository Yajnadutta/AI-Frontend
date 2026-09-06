import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Package, Download, HelpCircle, ArrowRight, Leaf } from "lucide-react";

/**
 * ExploreResources
 * "Explore Our Resources" section — 4 link cards, each with a circular icon,
 * title, description and a text link. Cards lift and their icon/arrow
 * animate on hover.
 *
 * Each card links to the matching in-page anchor on the /resources page
 * (see ResourcesSection.jsx, which defines the ids), so these stay in
 * sync with the same anchors the Header's Resources dropdown uses.
 *
 * Usage:
 *   <ExploreResources />
 */
const RESOURCES = [
  {
    icon: BookOpen,
    title: "Blog & Insights",
    description: "Sustainability, packaging, natural food and industry insights.",
    linkLabel: "Explore Insights",
    href: "/resources#blog-insights",
  },
  {
    icon: Package,
    title: "Product Catalogue",
    description: "Product range, specifications and applications.",
    linkLabel: "View Catalogue",
    href: "/resources#product-catalogue",
  },
  {
    icon: Download,
    title: "Downloads",
    description: "Brochures, product sheets and useful documents.",
    linkLabel: "Browse Downloads",
    href: "/resources#downloads",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    description: "Answers to common product, ordering and partnership questions.",
    linkLabel: "View FAQs",
    href: "/resources#faqs",
  },
];

export default function ExploreResources() {
  return (
    <section className="resources" id="explore-resources">
      <style>{`
        .resources {
          --ink: #10192b;
          --muted: #6b7280;
          --green: #1f6b3a;
          --green-dark: #14522c;
          --icon-bg: #e6efd9;
          --icon-bg-hover: #d8e8c4;
          --border: #e7e5e0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #fbfaf8;
          padding: clamp(32px, 5vw, 56px) clamp(20px, 5vw, 48px) clamp(48px, 6vw, 72px);
          scroll-margin-top: 100px;
        }

        .resources__header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto clamp(28px, 4vw, 44px);
        }

        .resources__title {
          margin: 0 0 14px;
          font-weight: 800;
          letter-spacing: -0.02em;
          font-size: clamp(28px, 4vw, 44px);
          color: var(--ink);
        }

        .resources__subtitle {
          margin: 0;
          font-size: clamp(14px, 1.4vw, 18px);
          line-height: 1.5;
          color: var(--muted);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .resources__subtitle svg {
          width: 1.05em;
          height: 1.05em;
          color: var(--green);
          flex-shrink: 0;
        }

        .resources__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          margin: 0 auto;
        }

        .resource-card {
          position: relative;
          background: #fff;
          padding: clamp(28px, 3vw, 40px) clamp(18px, 2.4vw, 28px);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 1px solid var(--border);
          text-decoration: none;
          color: inherit;
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                      z-index 0s;
          cursor: pointer;
          z-index: 1;
        }
        .resource-card:visited,
        .resource-card:hover,
        .resource-card:active {
          color: inherit;
          text-decoration: none;
        }
        .resource-card * {
          text-decoration: none;
        }
        .resource-card:last-child { border-right: none; }

        .resource-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 34px rgba(16, 25, 43, 0.1);
          z-index: 2;
        }

        .resource-card__icon-wrap {
          width: clamp(72px, 8vw, 96px);
          height: clamp(72px, 8vw, 96px);
          border-radius: 50%;
          background: var(--icon-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: clamp(18px, 2vw, 26px);
          transition: background 0.28s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .resource-card:hover .resource-card__icon-wrap {
          background: var(--icon-bg-hover);
          transform: scale(1.08) rotate(-4deg);
        }

        .resource-card__icon-wrap svg {
          width: 40%;
          height: 40%;
          color: var(--green-dark);
          transition: transform 0.32s ease;
        }
        .resource-card:hover .resource-card__icon-wrap svg {
          transform: scale(1.06);
        }

        .resource-card__title {
          margin: 0 0 10px;
          font-weight: 800;
          font-size: clamp(17px, 1.5vw, 21px);
          color: var(--ink);
        }

        .resource-card__desc {
          margin: 0 0 20px;
          font-size: clamp(13.5px, 1.05vw, 15.5px);
          line-height: 1.55;
          color: var(--muted);
          max-width: 26ch;
        }

        .resource-card__link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: clamp(13.5px, 1.05vw, 15.5px);
          color: var(--green);
          text-decoration: none;
        }

        .resource-card__link svg {
          width: 16px;
          height: 16px;
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .resource-card:hover .resource-card__link svg {
          transform: translateX(5px);
        }
        .resource-card:hover .resource-card__link {
          color: var(--green-dark);
        }

        /* subtle bottom accent that grows in on hover */
        .resource-card::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: var(--green);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .resource-card:hover::after {
          transform: scaleX(1);
        }

        @media (max-width: 900px) {
          .resources__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .resource-card:nth-child(2) { border-right: none; }
          .resource-card:nth-child(1),
          .resource-card:nth-child(2) {
            border-bottom: 1px solid var(--border);
          }
        }

        @media (max-width: 560px) {
          .resources__grid {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }
          .resource-card {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
          }
          .resource-card:last-child { border-bottom: none; }
          .resource-card:hover {
            transform: translateY(-4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .resource-card,
          .resource-card__icon-wrap,
          .resource-card__icon-wrap svg,
          .resource-card__link svg,
          .resource-card::after {
            transition: none !important;
          }
          .resource-card:hover {
            transform: none;
          }
          .resource-card:hover .resource-card__icon-wrap {
            transform: none;
          }
        }
      `}</style>

      <div className="resources__header">
        <h2 className="resources__title">Explore Our Resources</h2>
        <p className="resources__subtitle">
          Everything you need to understand ORYA's <Leaf /> products, solutions
          and approach to sustainability.
        </p>
      </div>

      <div className="resources__grid">
        {RESOURCES.map(({ icon: Icon, title, description, linkLabel, href }) => (
          <Link key={title} to={href} className="resource-card">
            <div className="resource-card__icon-wrap">
              <Icon strokeWidth={1.8} />
            </div>
            <h3 className="resource-card__title">{title}</h3>
            <p className="resource-card__desc">{description}</p>
            <span className="resource-card__link">
              {linkLabel} <ArrowRight />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}