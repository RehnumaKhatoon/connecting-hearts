import { Heart, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.scss";
import logo from "../../assets/logo/logo.jpeg";
import PrivacyPolicy from "../../assets/Folder/Privacy_Policy_26June.pdf";
// import TermsOfUse from "../../assets/Folder/Term_of_condition.pdf";
import Terms from "../../assets/Folder/Term_of_use.pdf";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="footer">
      {/* Decorative elements */}
      <div className="footer-leaves">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="footer-heart">♡</div>

      <div className="container">
        {/* ================= TOP FOOTER ================= */}

        <div className="footer-main">
          {/* LEFT */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-box">
                <img src={logo} alt="Connecting Hearts" />
              </span>

              <strong>
                Connecting
                <br />
                <em>Hearts</em>
              </strong>
            </div>

            <p className="footer-description">
              Helping Heartfulness practitioners
              <br />
              find meaningful, value-led connections
              <br />
              for a beautiful life together.
            </p>

            <div className="footer-tagline">
              <span>More than matches,</span>
              <br />
              <strong>meaningful connections.</strong>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <h3>Explore</h3>

            <a href="#hero">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About Us</a>
            <a href="#pricing">Membership</a>
            {/* <a href="#testimonials">Success Stories</a> */}
            <a href="#faq">FAQ's</a>
            {/* <a href="#contact">Help Center</a> */}
          </div>

          {/* SAFETY */}
          <div className="footer-column safety-column">
            <h3>Safety & Privacy</h3>

            <a href="#safety">Safety Centre</a>
            <a href={PrivacyPolicy} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href={Terms} target="_blank" rel="noopener noreferrer">
              Terms of Use
            </a>
            {/* <a href="#guidelines">Community Guidelines</a> */}
            {/* <a href="#report">Report a Concern</a> */}
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Get in Touch</h3>

            <div className="contact-item">
              <Mail size={20} />
              <span>connecting.hearts@heartfulness.org </span>
            </div>

            <div className="contact-item">
              <Mail size={20} />
              <span>connectinghearts.info@gmail.com</span>
            </div>

            <div className="contact-item">
              <Phone size={20} />
              <span>+91 9452613159</span>
            </div>

            <div className="contact-item">
              <MapPin size={20} />
              <span>Serving hearts worldwide</span>
            </div>

            <div className="footer-divider"></div>

            <h3 className="follow-title">Follow Us</h3>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/connecting_hearts_official?utm_source=qr&stkn=MWFkbjZ3YjZuZXdtNA=="
                className="instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/1Eex4LgQYt/"
                className="facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://youtube.com/@connectingheartsmatrimony?si=9xI_JNgxHjvId0wj"
                className="youtube"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

              {/* <a href="#" className="linkedin" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a> */}
            </div>
          </div>
        </div>

        {/* Decorative text */}

        <div className="footer-side-text">
          <span>Good People</span>
          <span>Brighter</span>
          <span>Futures</span>

          <i></i>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Connecting Hearts. All rights reserved.</p>

          <p className="made-with">
            <Heart size={17} fill="currentColor" />
            Building meaningful connections, rooted in trust and values.
          </p>

          <div className="footer-links">
            <a href={PrivacyPolicy} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <span></span>
            <a href={Terms} target="_blank" rel="noopener noreferrer">
              Terms
            </a>
            {/* <span></span> */}
            {/* <a href="#sitemap">Sitemap</a> */}
          </div>

          <button
            className="back-top"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <ArrowUp size={19} />
          </button>
        </div>
      </div>
    </footer>
  );
}
