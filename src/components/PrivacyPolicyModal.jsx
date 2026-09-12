import React from "react";
import { X, ShieldCheck, Lock, Users, Leaf } from "lucide-react";
import "../styling/PrivacyPolicyModal.css";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="privacy-modal-overlay" onClick={onClose}>
      <div
        className="privacy-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="privacy-modal-header">
          <div>
            <h2>
              Privacy <span>Policy</span>
            </h2>
            <p>Your privacy matters to us.</p>
          </div>

          <button
            type="button"
            className="privacy-close-btn"
            onClick={onClose}
            aria-label="Close Privacy Policy"
          >
            <X size={24} />
          </button>
        </div>

        {/* Hero */}
        <div className="privacy-hero">
          <Leaf size={38} />
          <div>
            <h3>Your Privacy Matters to Us</h3>
            <p>
              At ORYA BIO-SOLUTIONS, we respect your privacy and are committed
              to handling your personal information responsibly,
              transparently and securely.
            </p>
          </div>
        </div>

        {/* Highlights */}
        {/* <div className="privacy-highlights">
          <div className="privacy-highlight-card">
            <div className="privacy-icon">
              <Leaf size={26} />
            </div>
            <div>
              <h4>Responsible</h4>
              <p>
                We collect only information needed for legitimate purposes.
              </p>
            </div>
          </div>

          <div className="privacy-highlight-card">
            <div className="privacy-icon">
              <Lock size={26} />
            </div>
            <div>
              <h4>Secure</h4>
              <p>
                We take reasonable measures to protect your information.
              </p>
            </div>
          </div>

          <div className="privacy-highlight-card">
            <div className="privacy-icon">
              <Users size={26} />
            </div>
            <div>
              <h4>Transparent</h4>
              <p>
                We explain how your information is used and give you control.
              </p>
            </div>
          </div>
        </div> */}

        {/* Content */}
        <div className="privacy-content">

          <section>
            <div className="privacy-section-title">
              <span>1</span>
              <h3>Introduction</h3>
            </div>

            <p>
              ORYA BIO-SOLUTIONS ("ORYA", "we", "us" or "our") respects your
              privacy and is committed to protecting personal information that
              you provide to us through our website, forms, communications,
              product enquiries and partnerships.
            </p>

            <p>
              This Privacy Policy explains what information we may collect,
              why we collect it, how we use and protect it, and the choices
              available to you.
            </p>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>2</span>
              <h3>Information We Collect</h3>
            </div>

            <div className="privacy-info-grid">
              <div className="privacy-info-card">
                <h4>Information you provide</h4>
                <ul>
                  <li>Name</li>
                  <li>Company / organisation name</li>
                  <li>Email address</li>
                  <li>Phone / WhatsApp number</li>
                  <li>Business requirements</li>
                  <li>Information submitted through forms</li>
                  <li>Documents voluntarily provided</li>
                </ul>
              </div>

              <div className="privacy-info-card">
                <h4>Information collected automatically</h4>
                <ul>
                  <li>IP address</li>
                  <li>Browser and device information</li>
                  <li>Pages visited</li>
                  <li>Approximate location</li>
                  <li>Referring website</li>
                  <li>Website interaction information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>3</span>
              <h3>How We Use Your Information</h3>
            </div>

            <p>We may use the information we collect to:</p>

            <div className="privacy-use-grid">
              <div>Respond to enquiries</div>
              <div>Process orders or requests</div>
              <div>Manage business partnerships</div>
              <div>Coordinate delivery</div>
              <div>Improve website functionality</div>
              <div>Protect website security</div>
              <div>Send marketing communications where permitted</div>
            </div>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>4</span>
              <h3>Cookies & Similar Technologies</h3>
            </div>

            <p>
              Our website may use cookies and similar technologies to support
              website functionality, security, performance and analytics.
            </p>

            <div className="privacy-cookie-grid">
              <div>
                <h4>Essential Cookies</h4>
                <p>Required for basic website functionality.</p>
              </div>

              <div>
                <h4>Analytics Cookies</h4>
                <p>
                  Help us understand website usage and improve the experience.
                </p>
              </div>

              <div>
                <h4>Preference Cookies</h4>
                <p>
                  Remember certain preferences where applicable.
                </p>
              </div>

              <div>
                <h4>Third-party Technologies</h4>
                <p>
                  Some website functions may be provided by third-party
                  services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>5</span>
              <h3>Sharing of Information</h3>
            </div>

            <p>
              We do not sell personal information to third parties. We may
              share information only when necessary for legitimate business,
              legal or operational purposes.
            </p>

            <div className="privacy-share-grid">
              <div>
                <h4>Service Providers</h4>
                <p>
                  Hosting, website maintenance, email, analytics, payment and
                  logistics services.
                </p>
              </div>

              <div>
                <h4>Business Partners</h4>
                <p>
                  Where required to fulfil a business purpose or requested
                  service.
                </p>
              </div>

              <div>
                <h4>Legal / Regulatory</h4>
                <p>
                  Where disclosure is required by applicable law.
                </p>
              </div>

              <div>
                <h4>Business Transfers</h4>
                <p>
                  In case of merger, acquisition or business reorganisation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>6</span>
              <h3>Data Security</h3>
            </div>

            <p>
              We use reasonable technical and organisational measures designed
              to protect personal information against unauthorised access,
              misuse, alteration, disclosure or destruction.
            </p>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>7</span>
              <h3>Data Retention</h3>
            </div>

            <p>
              We retain personal information only for as long as necessary to
              fulfil the purposes for which it was collected, comply with
              applicable legal requirements and resolve disputes.
            </p>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>8</span>
              <h3>Your Rights & Choices</h3>
            </div>

            <p>
              Depending on applicable law, you may have rights to access,
              update, correct or request deletion of your personal information.
              You may also contact us regarding questions about how your
              information is handled.
            </p>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>9</span>
              <h3>Third-Party Services</h3>
            </div>

            <p>
              Our website may contain links or integrations with third-party
              services. Their privacy practices are governed by their own
              policies.
            </p>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>10</span>
              <h3>Children's Privacy</h3>
            </div>

            <p>
              Our services are not intended for children. We do not knowingly
              collect personal information from children without appropriate
              consent.
            </p>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>11</span>
              <h3>Changes to this Policy</h3>
            </div>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
          </section>

          <section>
            <div className="privacy-section-title">
              <span>12</span>
              <h3>Contact Us</h3>
            </div>

            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, please contact ORYA BIO-SOLUTIONS.
            </p>

            <div className="privacy-contact">
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
        {/* <div className="privacy-modal-footer">
           <span>Last Updated: 12 September 2026</span> 

          <button
            type="button"
            className="privacy-done-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;