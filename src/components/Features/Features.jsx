import {
  UsersRound,
  LockKeyhole,
  MessageCircle,
  Shield,
  Heart,
} from "lucide-react";
import "./Features.scss";

const features = [
  {
    icon: UsersRound,
    title: "100% Verified Profiles",
    text: "Search by location, community, profession and more from thousands of active profiles.",
  },
  {
    icon: LockKeyhole,
    title: "Control over Privacy",
    text: "Restrict unwanted access to contact details & photos/videos.",
  },
  {
    icon: MessageCircle,
    title: "In-App Messenger",
    text: "Chat securely without sharing personal details.",
  },
  {
    icon: Shield,
    title: "Report / Block Profiles",
    text: "Report or block suspicious profiles and enjoy a safe and respectful experience.",
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      {/* Decorative elements */}
      <div className="features-circle circle-left"></div>
      <div className="features-circle circle-bottom"></div>

      <div className="heart-line">♡</div>

      <div className="container">
        {/* HEADER */}
        <div className="features-header">
          <div className="features-heading">
            <span className="features-eyebrow">YOUR TRUST, OUR PRIORITY</span>

            <h2>
              More than 6 years of
              <br />
              Bringing <em>Hearts Together</em>
            </h2>
          </div>

          <div className="features-intro">
            <p>
              A meaningful journey begins with a space
              <br />
              that feels safe, secure and made just for you.
            </p>

            <span className="intro-line"></span>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="features-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">
                <Icon size={25} strokeWidth={2} />
              </div>

              <h3>{title}</h3>

              <p>{text}</p>

              <a href="#about" className="learn-more">
                Learn more
                <span>→</span>
              </a>
            </article>
          ))}
        </div>

        {/* BOTTOM BADGE */}
        <div className="features-badge">
          <Heart size={15} fill="#e72d68" color="#e72d68" />
          <span>Built for meaningful connections</span>
        </div>

        {/* BOTTOM TEXT */}
        <div className="bottom-message">
          <span>Better People</span>
          <br />
          <span>Brighter Tomorrows</span>
        </div>

        {/* DECORATIVE LEAVES */}
        <div className="leaf-decoration">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
