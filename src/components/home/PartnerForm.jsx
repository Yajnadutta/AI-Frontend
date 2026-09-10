import React, { useState } from "react";
import {
  X,
  User,
  Building2,
  Phone,
  Mail,
  MapPin,
  Handshake,
  Leaf,
  Send,
  LockKeyhole,
} from "lucide-react";

import "../../styling/PartnerForm.css";
import partnerImage from "../../assets/orya-partner-left-panel.png";

const PartnerForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobile: "",
    email: "",
    city: "",
    partnershipType: "",
    interests: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;

    let updatedInterests = [...formData.interests];

    if (checked) {
      updatedInterests.push(value);
    } else {
      updatedInterests = updatedInterests.filter(
        (item) => item !== value
      );
    }

    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Partner Form Data:", formData);

    alert("Partnership request submitted successfully!");
  };

  return (
    <div className="partner-page">
      <div className="partner-container">

        {/* LEFT SIDE */}
        <div className="partner-left">
          <img
            src={partnerImage}
            alt="ORYA Bio Solutions Partner"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="partner-right">

        <button
  type="button"
  className="close-btn"
  aria-label="Close"
  onClick={onClose}
>
  <X size={26} />
</button>
          <div className="form-header">
            <div className="header-icon">
              <Leaf size={42} />
            </div>

            <div>
              <h1>Partner with ORYA</h1>

              <p>
                Fill in your details and tell us how you want to work with us.
                <br />
                Our team will get back to you soon.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            {/* NAME + COMPANY */}
            <div className="form-grid">

              <div className="form-group">
                <label>
                  <User size={18} />
                  Full Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Building2 size={18} />
                  Business / Company Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* MOBILE + EMAIL */}
            <div className="form-grid">

              <div className="form-group">
                <label>
                  <Phone size={18} />
                  Mobile / WhatsApp Number <span>*</span>
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Mail size={18} />
                  Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* CITY */}
            <div className="form-group full-width">
              <label>
                <MapPin size={18} />
                City / State <span>*</span>
              </label>

              <input
                type="text"
                name="city"
                placeholder="Enter city and state"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* PARTNERSHIP TYPE */}
            <div className="selection-box">

              <div className="selection-title">
                <Handshake size={24} />

                <div>
                  <strong>
                    Partnership Type <span>*</span>
                  </strong>
                </div>
              </div>

              <div className="radio-grid">

                <label className="custom-radio">
                  <input
                    type="radio"
                    name="partnershipType"
                    value="Distributor"
                    onChange={handleChange}
                    required
                  />

                  <span>Distributor</span>
                </label>

                <label className="custom-radio">
                  <input
                    type="radio"
                    name="partnershipType"
                    value="Dealer"
                    onChange={handleChange}
                  />

                  <span>Dealer</span>
                </label>

                <label className="custom-radio">
                  <input
                    type="radio"
                    name="partnershipType"
                    value="Retailer"
                    onChange={handleChange}
                  />

                  <span>Retailer</span>
                </label>

                <label className="custom-radio">
                  <input
                    type="radio"
                    name="partnershipType"
                    value="Business Partner / Others"
                    onChange={handleChange}
                  />

                  <span>Business Partner / Others</span>
                </label>

              </div>
            </div>

            {/* BUSINESS INTEREST */}
            <div className="selection-box">

              <div className="selection-title">
                <Leaf size={26} />

                <div>
                  <strong>
                    Business Interest <span>*</span>
                  </strong>

                  <small>
                    (You can select multiple)
                  </small>
                </div>
              </div>

              <div className="checkbox-grid">

                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    value="Sustainable Packaging"
                    onChange={handleInterestChange}
                  />

                  <span>Sustainable Packaging</span>
                </label>

                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    value="Agri-Waste Products"
                    onChange={handleInterestChange}
                  />

                  <span>Agri-Waste Products</span>
                </label>

                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    value="Natural & Traditional Food"
                                       onChange={handleInterestChange}
                  />

                  <span>Natural & Traditional Food</span>
                </label>

                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    value="Special Collection"
                    onChange={handleInterestChange}
                  />

                  <span>Special Collection</span>
                </label>

                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    value="Sustainable Hydration"
                    onChange={handleInterestChange}
                  />

                  <span>Sustainable Hydration</span>
                </label>

                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    value="Custom Packaging Solutions"
                    onChange={handleInterestChange}
                  />

                  <span>Custom Packaging Solutions</span>
                </label>

              </div>
            </div>

            {/* SUBMIT */}
            <button type="submit" className="partner-submit-btn">
              <Send size={20} />
              Submit Partnership Request
              <span>→</span>
            </button>

            {/* SECURITY TEXT */}
            <div className="privacy-text">
              <LockKeyhole size={15} />

              <span>
                Your information is safe with us. We will get back to you shortly.
              </span>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default PartnerForm;