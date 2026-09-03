import React from "react";
import "../../styling/DealerBanner.css";

// Replace these with your actual asset paths
import leafLeft from "../../assets/leaf-left.png";
import leafRight from "../../assets/leaf-right.png";
import peopleIcon from "../../assets/people-icon.png";

const benefits = [
  "Attractive Dealer Benefits",
  "Wide Product Range",
  "Growing Market Demand",
  "Marketing & Support",
];

export default function DealerBanner({
  onBecomeDealer,
  whatsappNumber = "911234567890",
  whatsappMessage = "Hi, I'm interested in becoming an ORYA partner.",
}) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="dealer-banner">
      <img
        src={leafLeft}
        alt=""
        className="dealer-banner__leaf dealer-banner__leaf--left"
        aria-hidden="true"
      />
      <img
        src={leafRight}
        alt=""
        className="dealer-banner__leaf dealer-banner__leaf--right"
        aria-hidden="true"
      />

      <div className="dealer-banner__inner">
        {/* Left: icon + heading */}
        <div className="dealer-banner__intro">
          <img
            src={peopleIcon}
            alt=""
            className="dealer-banner__icon"
            aria-hidden="true"
          />
          <div>
            <h2 className="dealer-banner__title">Become a Partner</h2>
            <p className="dealer-banner__subtitle">
              Join ORYA&apos;s growing network and be a part of the
              sustainable revolution.
            </p>
          </div>
        </div>

        <div className="dealer-banner__divider" aria-hidden="true" />

        {/* Middle: benefits checklist */}
        <ul className="dealer-banner__benefits">
          {benefits.map((benefit) => (
            <li key={benefit} className="dealer-banner__benefit">
              <span className="dealer-banner__check" aria-hidden="true">
                ✓
              </span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="dealer-banner__divider" aria-hidden="true" />

        {/* Right: actions */}
        <div className="dealer-banner__actions">
          <button
            type="button"
            className="dealer-banner__btn dealer-banner__btn--solid"
            onClick={onBecomeDealer}
          >
            Become a Partner
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="dealer-banner__btn dealer-banner__btn--outline"
          >
            <svg
              className="dealer-banner__wa-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.9-1.25-4.79-4.15-4.94-4.35-.15-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.11.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.38-.42.51-.14.13-.28.28-.12.55.15.27.68 1.12 1.46 1.82 1 .89 1.85 1.17 2.12 1.3.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.87.27.13.45.2.51.31.07.11.07.63-.17 1.3Z"
              />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}