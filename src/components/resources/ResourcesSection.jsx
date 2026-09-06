import React, { useState } from "react";
import {
  Leaf,
  ArrowRight,
  Download,
  FileText,
  Building2,
  Plus,
  X,
} from "lucide-react";

// Keep these image files next to this file (or update the paths to match your project)
import catalogueCover from "../../assets/catalogue_cover.png";
import blogImage1 from "../../assets/blog1.png";
import blogImage2 from "../../assets/material_03.png";
import blogImage3 from "../../assets/blog3.png";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const CHECKLIST = [
  "Sustainable Packaging",
  "Natural Food Products",
  "Circular & Agri-Waste Products",
  "Custom Solutions",
];

const BLOG_POSTS = [
  {
    image: blogImage1,
    title: "Why Sustainable Packaging Matters Today",
    description:
      "Exploring how eco-friendly alternatives can reduce environmental impact and create long-term value.",
  },
  {
    image: blogImage2,
    title: "Innovations in Plant-Based Packaging",
    description:
      "A look at emerging materials and trends shaping the future of sustainable packaging.",
  },
  {
    image: blogImage3,
    title: "Traditional Foods for a Healthier Tomorrow",
    description:
      "Rediscovering the value of natural ingredients and traditional foods in modern lifestyles.",
  },
];

const DOWNLOADS = [
  // { icon: Building2, color: "#64748b", bg: "#eef1f4", title: "Company Profile" },
  { icon: FileText, color: "#ea8a1f", bg: "#fdf0e2", title: "Product Catalogue" },
  { icon: FileText, color: "#2563eb", bg: "#e8eefd", title: "Product Brochures" },
  { icon: FileText, color: "#16a34a", bg: "#e8f5ec", title: "Sustainability Information" },
  { icon: FileText, color: "#7c3aed", bg: "#f0e9fd", title: "Dealer / Partnership Information" },
  { icon: FileText, color: "#c2410c", bg: "#fbe9de", title: "Product Specification Sheets" },
];

const FAQS = [
  {
    q: "Do you supply sustainable packaging in bulk?",
    a: "Yes — we work with businesses and institutions of all sizes and can scale orders to match your volume requirements.",
  },
  {
    q: "Are your packaging products biodegradable or compostable?",
    a: "Our range is made from natural, plant-based materials designed to biodegrade or compost under the right conditions.",
  },
  {
    q: "Do you provide customised packaging solutions?",
    a: "We can tailor sizes, shapes and branding to fit your product and sustainability goals.",
  },
  { q: "Do you deliver across India?", a: "Yes, we deliver pan-India through our logistics and partner network." },
  {
    q: "What natural food products does ORYA offer?",
    a: "Our food range spans traditional snacks and staples made with natural ingredients.",
  },
  {
    q: "How can I become an ORYA dealer or partner?",
    a: "Reach out through our partnership form and our team will guide you through onboarding.",
  },
  {
    q: "Does ORYA support export requirements?",
    a: "We support export documentation and packaging requirements for international shipments.",
  },
  {
    q: "Can ORYA develop customised solutions?",
    a: "Absolutely — our team collaborates with clients to design solutions specific to their use case.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function ResourcesSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="resources-page">
      <style>{`
        .resources-page {
          --ink: #10192b;
          --muted: #6b7280;
          --green: #1f6b3a;
          --green-dark: #143f24;
          --border: #e7e5e0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #fff;
          padding: clamp(24px, 4vw, 48px);
        }

        .resources-page__grid {
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: clamp(20px, 3vw, 32px);
          margin: 0 auto;
          align-items: start;
        }

        .col { display: flex; flex-direction: column; gap: clamp(28px, 3.5vw, 40px); }

        /* offset so anchored sections don't land under the fixed header */
        #product-catalogue,
        #blog-insights,
        #downloads,
        #faqs {
          scroll-margin-top: 100px;
        }

        /* ---------------- shared section heading ---------------- */
        .section-heading {
          margin: 0 0 6px;
          font-weight: 800;
          font-size: clamp(20px, 2vw, 24px);
          color: var(--ink);
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
        }
        .section-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 3px;
          background: var(--green);
          border-radius: 2px;
        }
        .section-subtitle {
          margin: 12px 0 20px;
          font-size: clamp(13.5px, 1.05vw, 15px);
          color: var(--muted);
          line-height: 1.5;
          max-width: 62ch;
        }

        /* ---------------- Featured resource card ---------------- */
        .featured {
          background: linear-gradient(135deg, #eef3e3 0%, #e7efd9 100%);
          border-radius: 16px;
          padding: clamp(24px, 3vw, 36px);
          display: flex;
          align-items: center;
          gap: clamp(20px, 3vw, 36px);
        }
        .featured__text { flex: 1.15; min-width: 0; }
        .featured__eyebrow {
          margin: 0 0 10px;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--green);
        }
        .featured__title {
          margin: 0 0 14px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.01em;
          font-size: clamp(22px, 2.4vw, 30px);
          color: var(--ink);
        }
        .featured__title span { display: block; color: var(--green); }

        .featured__desc {
          margin: 0 0 18px;
          font-size: clamp(13.5px, 1.05vw, 15px);
          line-height: 1.55;
          color: #444d47;
          max-width: 50ch;
        }

        .featured__checklist {
          list-style: none;
          margin: 0 0 22px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .featured__checklist li {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: clamp(13px, 1vw, 14.5px);
          font-weight: 600;
          color: var(--ink);
        }
        .featured__checklist svg {
          width: 16px;
          height: 16px;
          color: var(--green);
          transform: rotate(-35deg);
          flex-shrink: 0;
        }

        .featured__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--green-dark);
          color: #fff;
          font-weight: 700;
          font-size: clamp(13px, 1vw, 14.5px);
          padding: 12px 20px;
          border-radius: 7px;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .featured__cta:hover { background: #0f2b19; }
        .featured__cta:active { transform: translateY(1px); }
        .featured__cta svg { width: 16px; height: 16px; }

        .featured__media {
          flex: 0.85;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 0;
        }
        .featured__media img {
          width: 100%;
          max-width: 300px;
          height: auto;
          border-radius: 6px;
          box-shadow: 0 20px 40px rgba(20, 40, 25, 0.22);
          transform: rotate(1.5deg);
          display: block;
        }

        /* ---------------- Blog & insights ---------------- */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .blog-card {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 28px rgba(16, 25, 43, 0.1);
        }
        .blog-card__media {
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .blog-card__media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .blog-card:hover .blog-card__media img {
          transform: scale(1.06);
        }

        .blog-card__body {
          padding: 18px 18px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-card__title {
          margin: 0 0 8px;
          font-weight: 800;
          font-size: 15.5px;
          line-height: 1.3;
          color: var(--ink);
        }
        .blog-card__desc {
          margin: 0 0 16px;
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--muted);
        }
        .blog-card__link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 13.5px;
          color: var(--green);
          text-decoration: none;
          width: fit-content;
        }
        .blog-card__link svg {
          width: 15px;
          height: 15px;
          transition: transform 0.25s ease;
        }
        .blog-card:hover .blog-card__link svg { transform: translateX(4px); }

        .blog-more {
          display: block;
          margin: 22px auto 0;
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid var(--green);
          color: var(--green);
          font-weight: 700;
          font-size: 14px;
          padding: 10px 20px;
          border-radius: 7px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .blog-more:hover { background: var(--green); color: #fff; }
        .blog-more svg { width: 15px; height: 15px; }

        /* ---------------- Downloads ---------------- */
        .downloads-box, .faq-box {
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: clamp(20px, 2.4vw, 26px);
        }

        .download-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 6px;
          border-radius: 8px;
          transition: background 0.18s ease;
        }
        .download-row + .download-row { border-top: 1px solid var(--border); }
        .download-row:hover { background: #f8f9f6; }

        .download-row__icon {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .download-row:hover .download-row__icon { transform: scale(1.08); }
        .download-row__icon svg { width: 18px; height: 18px; }

        .download-row__title {
          flex: 1;
          font-weight: 600;
          font-size: 14px;
          color: var(--ink);
        }

        .download-row__action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 13px;
          color: var(--green);
          text-decoration: none;
          white-space: nowrap;
          background: none;
          border: none;
          cursor: pointer;
        }
        .download-row__action svg {
          width: 15px;
          height: 15px;
          transition: transform 0.2s ease;
        }
        .download-row:hover .download-row__action svg { transform: translateY(2px); }

        /* ---------------- FAQ ---------------- */
        .faq-item { border-top: 1px solid var(--border); }
        .faq-item:first-child { border-top: none; }

        .faq-item__question {
          width: 100%;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 4px;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
          color: var(--ink);
          cursor: pointer;
        }

        .faq-item__toggle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eef3e3;
          color: var(--green-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .faq-item__toggle svg { width: 13px; height: 13px; }
        .faq-item--open .faq-item__toggle {
          background: var(--green-dark);
          color: #fff;
          transform: rotate(180deg);
        }

        .faq-item__answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.28s ease;
        }
        .faq-item--open .faq-item__answer { grid-template-rows: 1fr; }
        .faq-item__answer-inner { overflow: hidden; }
        .faq-item__answer p {
          margin: 0 4px 16px;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--muted);
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 960px) {
          .resources-page__grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 720px) {
          .featured { flex-direction: column; }
          .featured__media { order: -1; max-width: 220px; margin: 0 auto; }
          .featured__text { text-align: left; }
          .blog-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 520px) {
          .blog-grid { grid-template-columns: 1fr; }
          .download-row__title { font-size: 13.5px; }
          .download-row__action span { display: none; }
        }
      `}</style>

      <div className="resources-page__grid">
        {/* ---------------- Left column ---------------- */}
        <div className="col">
          <div className="featured" id="product-catalogue">
            <div className="featured__text">
              <p className="featured__eyebrow">Featured Resource</p>
              <h2 className="featured__title">
                Explore the ORYA
                <span>Product Catalogue</span>
              </h2>
              <p className="featured__desc">
                Discover our range of sustainable packaging, natural food
                products and circular solutions designed for businesses,
                institutions and conscious consumers.
              </p>
              <ul className="featured__checklist">
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <Leaf /> {item}
                  </li>
                ))}
              </ul>
              <button className="featured__cta">
                Download Catalogue <ArrowRight />
              </button>
            </div>
            <div className="featured__media">
              <img src={catalogueCover} alt="ORYA Bio-Solutions product catalogue" />
            </div>
          </div>

          <div id="blog-insights">
            <h2 className="section-heading">Blog &amp; Insights</h2>
            <p className="section-subtitle">
              Ideas, knowledge and perspectives for a more sustainable future.
            </p>
            <div className="blog-grid">
              {BLOG_POSTS.map(({ image, title, description }) => (
                <article key={title} className="blog-card">
                  <div className="blog-card__media">
                    <img src={image} alt={title} />
                  </div>
                  <div className="blog-card__body">
                    <h3 className="blog-card__title">{title}</h3>
                    <p className="blog-card__desc">{description}</p>
                    <a href="#" className="blog-card__link">
                      Read More <ArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <button className="blog-more">
              Explore All Insights <ArrowRight />
            </button>
          </div>
        </div>

        {/* ---------------- Right column ---------------- */}
        <div className="col">
          <div className="downloads-box" id="downloads">
            <h2 className="section-heading">Downloads</h2>
            <p className="section-subtitle">
              Access useful documents and information about ORYA products,
              solutions and business opportunities.
            </p>
            {DOWNLOADS.map(({ icon: Icon, color, bg, title }) => (
              <div className="download-row" key={title}>
                <div className="download-row__icon" style={{ background: bg }}>
                  <Icon style={{ color }} />
                </div>
                <span className="download-row__title">{title}</span>
                <button className="download-row__action">
                  <span>Download PDF</span> <Download />
                </button>
              </div>
            ))}
          </div>

          <div className="faq-box" id="faqs">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find quick answers to common questions about our products,
              ordering, partnerships and more.
            </p>
            {FAQS.map(({ q, a }, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={q}>
                  <button
                    className="faq-item__question"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {q}
                    <span className="faq-item__toggle">
                      {isOpen ? <X /> : <Plus />}
                    </span>
                  </button>
                  <div className="faq-item__answer">
                    <div className="faq-item__answer-inner">
                      <p>{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}