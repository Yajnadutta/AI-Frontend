import React from "react";
import {
  Building2,
  Utensils,
  ChefHat,
  ShoppingBag,
  Building,
  Landmark,
  Store,
} from "lucide-react";
import "../../styling/BusinessBanner.css";
import productImg from "../../assets/product.png";

const CATEGORIES = [
  { label: "Hotels", Icon: Building2 },
  { label: "Restaurants", Icon: Utensils },
  { label: "Catering", Icon: ChefHat },
  { label: "Retail", Icon: ShoppingBag },
  { label: "Corporates", Icon: Building },
  { label: "Institutions", Icon: Landmark },
  { label: "Food Businesses", Icon: Store },
];

export default function BusinessBanner({ onEnquiryClick }) {
  return (
    <section className="biz-banner">
      <div className="biz-banner__content">
        <div className="biz-banner__left">
          <h2 className="biz-banner__title">For Businesses</h2>
          <p className="biz-banner__subtitle">
            Sustainable solutions for every need
          </p>

          <ul className="biz-banner__categories">
            {CATEGORIES.map(({ label, Icon }) => (
              <li className="biz-banner__category" key={label}>
                <span className="biz-banner__icon">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <span className="biz-banner__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="biz-banner__image-wrap" aria-hidden="true">
          <img
            src={productImg}
            alt=""
            className="biz-banner__image"
          />
        </div>

        <div className="biz-banner__card">
          <h3 className="biz-banner__card-title">
            Bulk Enquiries &amp; Business Orders
          </h3>
          <p className="biz-banner__card-text">
            Partner with ORYA for quality, sustainable and reliable
            solutions.
          </p>
          <button
            type="button"
            className="biz-banner__cta"
            onClick={onEnquiryClick}
          >
            Request an Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
