import {
  ShieldCheck,
  CircleDollarSign,
  Link2,
  UserRound,
  Globe,
  Phone,
  Mail,
  Heart,
} from "lucide-react";

import "./Safety.scss";

const safetyPoints = [
  {
    icon: CircleDollarSign,
    title: "We never ask for money",
    text: "We do not request any payment through personal calls, messages or external links.",
  },
  {
    icon: Link2,
    title: "Do not click on unknown links",
    text: "Avoid suspicious links shared via WhatsApp, SMS, email or social media.",
  },
  {
    icon: UserRound,
    title: "Trust only our official channels",
    text: "Always use our official website, app and documented contact details.",
  },
];

export default function Safety() {
  return (
    <section className="safety-section" id="safety">
      <div className="container">
        <div className="safety-wrapper">
          {/* ================= LEFT ================= */}

          <div className="safety-intro">
            <div className="shield-area">
              <div className="shield-shape">
                <ShieldCheck size={100} />
              </div>

              <div className="shield-heart">
                <Heart size={25} fill="white" />
              </div>

              <span className="spark spark-one">/</span>
              <span className="spark spark-two">/</span>
              <span className="spark spark-three">/</span>
            </div>

            <div className="safety-content">
              <span className="eyebrow">YOUR SAFETY MATTERS</span>

              <h2>
                Beware of
                <br />
                <em>Fraud Links</em>
              </h2>

              <p>
                Your trust is important to us. Please be cautious of fake
                profiles, websites or individuals trying to misuse the name of
                Connecting Hearts.
              </p>
            </div>
          </div>

          {/* ================= CENTER ================= */}

          <div className="safety-points">
            {safetyPoints.map(({ icon: Icon, title, text }) => (
              <article className="safety-point" key={title}>
                <div className="point-icon">
                  <Icon size={28} />
                </div>

                <div>
                  <h3>{title}</h3>

                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>

          {/* ================= RIGHT ================= */}

          <div className="official-contact">
            <h3>OUR OFFICIAL CONTACT DETAILS</h3>

            {/* <div className="contact-detail">
              <span className="contact-icon">
                <Globe size={22} />
              </span>

              <div>
                <strong>Website</strong>
                <p>connectingharts.info@gmail.com</p>
              </div>
            </div> */}

            <div className="contact-detail">
              <span className="contact-icon">
                <Phone size={22} />
              </span>

              <div>
                <strong>Call / WhatsApp</strong>
                <p>+91 9044312362</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon">
                <Mail size={22} />
              </span>

              <div>
                <strong>Email</strong>
                <p>connectingharts.info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STRIP ================= */}

        <div className="safety-bottom">
          <div className="bottom-heart">
            <Heart size={20} fill="currentColor" />
          </div>

          <div className="bottom-title">Together for a safer community</div>

          <div className="bottom-line"></div>

          <p>
            Let's keep Connecting Hearts a safe, respectful and trustworthy
            space for everyone.
          </p>

          <div className="real-connections">
            <span>Real People</span>
            <span>Real Connections</span>
            <i>♡</i>
          </div>
        </div>
      </div>
    </section>
  );
}
