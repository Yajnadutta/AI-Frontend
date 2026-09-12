import React from "react";
import {
  X,
  ShieldCheck,
  Handshake,
  Leaf,
  Users,
  FileText,
  Monitor,
  Package,
  MessageSquare,
  Coins,
  CheckCircle,
  Truck,
  RotateCcw,
  Copyright,
  Link2,
  ShieldAlert,
  Gavel,
  CloudLightning,
  Scale,
  RefreshCcw,
  Mail,
} from "lucide-react";
import "../styling/TermsConditionsModal.css";

const TermsConditionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="terms-modal-overlay" onClick={onClose}>
      <div
        className="terms-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="terms-modal-header">
          <div>
            <h2>
              Terms &amp; <span>Conditions</span>
            </h2>
            <p>Clear terms. Transparent business.</p>
          </div>

          <button
            type="button"
            className="terms-close-btn"
            onClick={onClose}
            aria-label="Close Terms and Conditions"
          >
            <X size={24} />
          </button>
        </div>

        {/* Hero */}
        <div className="terms-hero">
          <ShieldCheck size={38} />
          <div>
            <h3>Building Trust for a Sustainable Tomorrow</h3>
            <p>
              These Terms &amp; Conditions govern your use of the ORYA
              BIO-SOLUTIONS website, products, services, enquiries and
              related interactions.
            </p>
          </div>
        </div>

        {/* Highlights */}
        {/* <div className="terms-highlights">
          <div className="terms-highlight-card">
            <div className="terms-icon">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4>Fair & Transparent</h4>
              <p>Clear terms for a better experience.</p>
            </div>
          </div>

          <div className="terms-highlight-card">
            <div className="terms-icon">
              <Handshake size={26} />
            </div>
            <div>
              <h4>Responsible Business</h4>
              <p>Built on trust and integrity.</p>
            </div>
          </div>

          <div className="terms-highlight-card">
            <div className="terms-icon">
              <Leaf size={26} />
            </div>
            <div>
              <h4>Sustainable Growth</h4>
              <p>Together for a greener tomorrow.</p>
            </div>
          </div>

          <div className="terms-highlight-card">
            <div className="terms-icon">
              <Users size={26} />
            </div>
            <div>
              <h4>Your Partner</h4>
              <p>Committed to long-term relationships.</p>
            </div>
          </div>
        </div> */}

        {/* Content */}
        <div className="terms-content">

          <section>
            <div className="terms-section-title">
              <span>1</span>
              <h3>Acceptance of Terms</h3>
            </div>
            <p>
              By accessing or using the ORYA BIO-SOLUTIONS website, you agree
              to be bound by these Terms &amp; Conditions and all applicable
              laws and regulations. If you do not agree with any part of
              these terms, please do not use our website.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>2</span>
              <h3>About ORYA BIO-SOLUTIONS</h3>
            </div>
            <p>
              ORYA BIO-SOLUTIONS is a business focused on sustainable
              packaging solutions, natural food products and related
              services. These Terms &amp; Conditions apply to all users,
              visitors, customers, business partners and other persons who
              access or use this website or engage with ORYA in any manner
              through this website.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>3</span>
              <h3>Website Use</h3>
            </div>
            <p>
              You agree to use this website only for lawful purposes. You
              must not misuse the website, attempt unauthorised access,
              introduce malicious software, copy content without permission
              or use the website in a manner that could damage, disable or
              impair its functionality.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>4</span>
              <h3>Product Information &amp; Specifications</h3>
            </div>
            <p>
              We strive to ensure that all product information,
              specifications, images, dimensions and descriptions are
              accurate. However, natural materials and manufacturing
              processes may result in variations in colour, size, texture,
              weight or other characteristics. Product information is for
              general guidance and does not constitute a binding
              representation or warranty.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>5</span>
              <h3>Enquiries, Quotations &amp; Orders</h3>
            </div>
            <p>
              Submission of an enquiry, quotation request or product
              requirement through this website does not by itself constitute
              acceptance of an order or create a binding contract. Orders are
              confirmed only after acceptance by ORYA and completion of
              applicable commercial terms.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>6</span>
              <h3>Pricing, Taxes &amp; Payments</h3>
            </div>
            <p>
              Product pricing may vary depending on product specifications,
              quantity, customisation, packaging, delivery location, taxes
              and other applicable commercial factors. All prices are
              subject to applicable taxes and levies. Payment terms will be
              communicated as part of the quotation or order confirmation.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>7</span>
              <h3>Availability</h3>
            </div>
            <p>
              Product availability is subject to stock, production capacity
              and other operational considerations. We reserve the right to
              modify, discontinue or limit the availability of any product
              or service at any time without prior notice.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>8</span>
              <h3>Shipping &amp; Delivery</h3>
            </div>
            <p>
              Delivery timelines, locations, freight charges and related
              terms will be communicated as part of the applicable quotation
              or order confirmation. While we make reasonable efforts to
              meet the estimated timelines, delays may occur due to factors
              beyond our control, including logistics, weather conditions or
              other force majeure events.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>9</span>
              <h3>Returns, Refunds &amp; Cancellations</h3>
            </div>
            <p>
              Returns, refunds and cancellations are subject to the nature of
              the product, applicable laws and the terms of the confirmed
              order. Damaged, defective or incorrectly supplied products may
              be eligible for return or replacement, subject to
              verification. Natural food products may not be eligible for
              return once opened or used, except where defective or as
              required by law. Customised or made-to-order products may not
              be eligible for cancellation or return once production has
              commenced. Refunds, where applicable, will be processed as per
              the agreed terms.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>10</span>
              <h3>Product Quality &amp; Inspection</h3>
            </div>
            <p>
              We take reasonable care to ensure our products meet applicable
              quality standards. Buyers are encouraged to inspect products
              upon delivery and report any quality concerns within a
              reasonable time so that we can investigate and resolve the
              matter appropriately.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>11</span>
              <h3>Sustainable / Environmental Claims</h3>
            </div>
            <p>
              We make reasonable efforts to ensure that claims about the
              sustainability, biodegradability or environmental impact of
              our products are accurate and supported by available
              information. Actual environmental outcomes may depend on local
              disposal, composting or recycling conditions, which are
              outside our control.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>12</span>
              <h3>Intellectual Property</h3>
            </div>
            <p>
              All content on this website, including text, graphics, logos,
              images and product designs, is the property of ORYA
              BIO-SOLUTIONS or its licensors and is protected by applicable
              intellectual property laws. No content may be reproduced,
              distributed or used commercially without our prior written
              permission.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>13</span>
              <h3>Third-Party Links &amp; Services</h3>
            </div>
            <p>
              Our website may contain links to third-party websites or
              integrate third-party services. We do not control and are not
              responsible for the content, accuracy or practices of any
              third-party website or service.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>14</span>
              <h3>Limitation of Liability</h3>
            </div>
            <p>
              To the fullest extent permitted by law, ORYA BIO-SOLUTIONS
              shall not be liable for any indirect, incidental, special or
              consequential damages arising out of or in connection with the
              use of our website, products or services.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>15</span>
              <h3>Indemnity</h3>
            </div>
            <p>
              You agree to indemnify and hold ORYA BIO-SOLUTIONS harmless
              from any claims, losses, liabilities or expenses arising from
              your misuse of the website or breach of these Terms &amp;
              Conditions.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>16</span>
              <h3>Force Majeure</h3>
            </div>
            <p>
              We shall not be held responsible for any delay or failure to
              perform our obligations where such delay or failure results
              from causes beyond our reasonable control, including natural
              disasters, government action, labour disputes or supply chain
              disruptions.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>17</span>
              <h3>Governing Law &amp; Jurisdiction</h3>
            </div>
            <p>
              These Terms &amp; Conditions shall be governed by and construed
              in accordance with the laws of India. Any disputes arising
              from these terms shall be subject to the exclusive
              jurisdiction of the competent courts at Keonjhar, Odisha.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>18</span>
              <h3>Changes to Terms</h3>
            </div>
            <p>
              We may update these Terms &amp; Conditions from time to time.
              Any changes will be reflected on this page with an updated
              revision date. Continued use of the website after changes
              constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <div className="terms-section-title">
              <span>19</span>
              <h3>Contact Us</h3>
            </div>
            <p>
              If you have questions about these Terms &amp; Conditions,
              please contact ORYA BIO-SOLUTIONS.
            </p>

            <div className="terms-contact">
              <strong>ORYA BIO-SOLUTIONS</strong>
              <br />
              Naranpur, Keonjhar, Odisha, India
              <br />
              Email: hello@oryabio.in
              <br />
              Phone: +91 78099 03359
            </div>
          </section>

        </div>

        {/* Footer */}
        {/* <div className="terms-modal-footer">
           <span>Last Updated: 12 September 2026</span>

          <button
            type="button"
            className="terms-done-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TermsConditionsModal;