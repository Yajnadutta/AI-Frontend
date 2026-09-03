import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Source",
    description:
      "Identify responsible and renewable materials and connect with suitable producers.",
  },
  {
    number: "02",
    title: "Solve",
    description:
      "Develop and offer practical sustainable products for businesses and consumers.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "Build dealer, wholesale, institutional and distribution networks across India and beyond.",
  },
];

export default function OurApproach() {
  return (
    <section className="oa-section">
      <h2 className="oa-heading">
        <span className="oa-leaf" aria-hidden="true">
          🍃
        </span>
        Our Approach
        <span className="oa-leaf" aria-hidden="true">
          🍃
        </span>
      </h2>

      <div className="oa-row">
        {steps.map((step, i) => (
          <React.Fragment key={step.number}>
            <div className="oa-step">
              <div className="oa-circle">{step.number}</div>
              <div className="oa-copy">
                <h3 className="oa-title">{step.title}</h3>
                <p className="oa-desc">{step.description}</p>
              </div>
            </div>

            {i < steps.length - 1 && (
              <div className="oa-arrow" aria-hidden="true">
                <ArrowRight size={22} strokeWidth={1.8} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .oa-section {
          --oa-green: #3f7d3a;
          --oa-green-dark: #2e5c2b;
          --oa-text: #4a4a4a;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          max-width: 1300px;
          margin: 0 auto;
          padding: 40px 24px;
          box-sizing: border-box;
        }

        .oa-heading {
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

        .oa-leaf {
          font-size: 16px;
        }

        .oa-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .oa-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          flex: 1;
          padding: 10px;
          border-radius: 12px;
          transition: transform 0.3s ease, background 0.3s ease;
          cursor: pointer;
        }

        .oa-step:hover {
          transform: scale(1.04);
          background: #f4f7f2;
        }

        .oa-circle {
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: var(--oa-green);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 15px;
        }

        .oa-title {
          color: var(--oa-green-dark);
          font-size: 16px;
          font-weight: 700;
          margin: 4px 0 6px;
        }

        .oa-desc {
          color: var(--oa-text);
          font-size: 13.5px;
          line-height: 1.55;
          margin: 0;
        }

        .oa-arrow {
          flex-shrink: 0;
          color: #b9c9b6;
          margin-top: 24px;
        }

        /* Tablet */
        @media (max-width: 860px) {
          .oa-row {
            flex-direction: column;
          }

          .oa-arrow {
            transform: rotate(90deg);
            margin: -6px 0 -6px 30px;
          }

          .oa-step:hover {
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .oa-heading {
            font-size: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .oa-step {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}