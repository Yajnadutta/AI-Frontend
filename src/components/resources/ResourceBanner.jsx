import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Leaf, Recycle, Lightbulb, ArrowRight, ArrowDown, ChevronRight } from "lucide-react";

// Put resources_banner.png next to this file (or update the path below)
import bannerPhoto from "../../assets/resources_banner.png";

/**
 * ResourceBanner
 * Full-bleed hero banner using the real product photo as the background,
 * with the "Resources for Better Choices" copy overlaid on the light
 * left-hand side of the image.
 *
 * Usage:
 *   <ResourceBanner />
 *
 * If your bundler doesn't support image imports (e.g. plain HTML/CDN
 * setup), drop the file in /public and pass a path instead:
 *   <ResourceBanner imageSrc="/resources_banner.png" />
 */
export default function ResourceBanner({ imageSrc = bannerPhoto }) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      <style>{`
        .banner {
          --ink: #16281f;
          --green-900: #163c26;
          --green-700: #1f6b3a;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          position: relative;
          isolation: isolate;
          width: 100%;
          aspect-ratio: 2169 / 725;
          background-size: cover;
          background-position: right center;
          background-repeat: no-repeat;
          overflow: hidden;
        }

        /* soft scrim so copy stays legible over the photo's bright/blurred left side */
        .banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.35) 0%,
            rgba(255, 255, 255, 0.12) 42%,
            rgba(255, 255, 255, 0) 60%
          );
          z-index: 1;
        }

        .banner__content {
          position: relative;
          z-index: 2;
          height: 100%;
          width: min(46%, 560px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: clamp(10px, 1.6vw, 18px);
          padding: 0 clamp(16px, 3.5vw, 48px);
        }

        .banner__crumbs {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(11px, 1vw, 13px);
          color: #5b6459;
          margin: 0;
        }
        .banner__crumbs a { color: #5b6459; text-decoration: none; }
        .banner__crumbs a:hover { color: var(--green-700); }
        .banner__crumbs svg { width: 14px; height: 14px; opacity: 0.7; flex-shrink: 0; }

        .banner__title {
          margin: 0;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          font-size: clamp(20px, 3.2vw, 40px);
          color: var(--ink);
        }
        .banner__title span {
          display: block;
          color: var(--green-700);
        }

        .banner__desc {
          margin: 0;
          max-width: 46ch;
          font-size: clamp(11.5px, 1.05vw, 15px);
          line-height: 1.5;
          color: #3f4a43;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .banner__tags {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(8px, 1.6vw, 20px);
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .banner__tags li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(10.5px, 0.95vw, 14px);
          font-weight: 600;
          color: var(--ink);
          white-space: nowrap;
        }
        .banner__tags svg {
          width: clamp(13px, 1.2vw, 17px);
          height: clamp(13px, 1.2vw, 17px);
          color: var(--green-700);
          flex-shrink: 0;
        }

        .banner__actions {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(8px, 1.2vw, 12px);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(10.5px, 0.95vw, 14.5px);
          font-weight: 600;
          padding: clamp(7px, 1.1vw, 12px) clamp(10px, 1.6vw, 20px);
          border-radius: 6px;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
          white-space: nowrap;
        }
        .btn:active { transform: translateY(1px); }
        .btn svg { width: clamp(12px, 1vw, 16px); height: clamp(12px, 1vw, 16px); }

        .btn--solid { background: var(--green-900); color: #fff; }
        .btn--solid:hover { background: #0f2b19; }

        .btn--outline {
          background: rgba(255, 255, 255, 0.6);
          border-color: var(--ink);
          color: var(--ink);
        }
        .btn--outline:hover { background: var(--ink); color: #fff; }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px) {
          .banner {
            aspect-ratio: auto;
            min-height: 340px;
          }
          .banner__content { width: min(60%, 460px); }
        }

        @media (max-width: 640px) {
          .banner {
            min-height: 300px;
            background-position: 70% center;
          }
          .banner::before {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.72) 0%,
              rgba(255, 255, 255, 0.5) 55%,
              rgba(255, 255, 255, 0.1) 78%
            );
          }
          .banner__content { width: min(72%, 380px); gap: 8px; }
          .banner__desc { -webkit-line-clamp: 2; }
          .banner__actions { flex-direction: column; align-items: flex-start; }
          .btn { width: 100%; justify-content: center; }
        }

        @media (max-width: 420px) {
          .banner { min-height: 380px; }
          .banner__content { width: 88%; }
          .banner__tags li span { display: none; }
        }
      `}</style>

      <div className="banner__content">
        <p className="banner__crumbs">
          <Link to="/">Home</Link>
          <ChevronRight />
          <Link to="/resources">Resources</Link>
        </p>

        <h1 className="banner__title">
          Resources for
          <span>Better Choices</span>
        </h1>

        <p className="banner__desc">
          Explore product information, sustainability insights, guides and
          useful resources to help you make informed decisions.
        </p>

        <ul className="banner__tags">
          <li><BookOpen /> Knowledge</li>
          <li><Leaf /> Products</li>
          <li><Recycle /> Sustainability</li>
          <li><Lightbulb /> Insights</li>
        </ul>

        <div className="banner__actions">
          <Link to="/resources#product-catalogue" className="btn btn--solid">
            Download Product Catalogue <ArrowRight />
          </Link>
          <Link to="/resources#explore-resources" className="btn btn--outline">
            Explore Resources <ArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
}