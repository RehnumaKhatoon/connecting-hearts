import React from "react";
import {
  Check,
  Crown,
  Heart,
  Shield,
  Users,
  UserRound,
  ArrowRight,
} from "lucide-react";
import "./Pricing.scss";

const freeFeatures = [
  "Browse profiles",
  "Send interest",
  "Shortlist profiles",
  "Report / Block profiles",
  "Ignore profiles",
  "Reply to paid users through in-app message/chat",
];

const premiumFeatures = [
  "View contact details",
  "Hide photos",
  "Hide contact details",
  "Message without sharing contact details",
  "Profile boost on top in Daily Recommendations",
  "Profile boost on top in search results",
  "Priority support",
];

const plans = [
  {
    type: "FREE",
    title: "Begin your journey with us.",
    subtitle: "Explore, connect and find like-minded people.",
    features: freeFeatures,
    icon: <UserRound size={25} />,
    button: "Continue with Free Membership",
    premium: false,
  },
  {
    type: "PREMIUM",
    title: "A little more, for a lot more love.",
    subtitle: "Unlock meaningful possibilities.",
    features: premiumFeatures,
    icon: <Crown size={22} />,
    button: "Explore Premium Plans",
    premium: true,
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="membership">
      {/* Background Decorations */}
      <div className="pricing-bg-circle circle-left"></div>
      <div className="pricing-bg-circle circle-right"></div>

      <div className="heart-line heart-line-top"></div>
      <div className="heart-line heart-line-bottom"></div>

      <div className="pricing-container">
        {/* Heading */}
        <div className="pricing-heading">
          <span className="pricing-label">MEMBERSHIP</span>

          <h2>
            Simple plans. <span>Meaningful connections.</span>
          </h2>

          <p>Start for free and upgrade anytime to unlock premium benefits.</p>
        </div>

        {/* Main Pricing Area */}
        <div className="pricing-layout">
          {/* Left Text */}
          <div className="side-message left-message"></div>

          {/* Cards */}
          <div className="pricing-cards">
            {plans.map((plan, index) => (
              <div
                className={`pricing-card ${
                  plan.premium ? "premium-card" : "free-card"
                }`}
                key={index}
              >
                <div className="card-top">
                  <div>
                    <span className="plan-type">{plan.type}</span>

                    <h3>{plan.title}</h3>

                    <p>{plan.subtitle}</p>
                  </div>

                  <div className="plan-icon">{plan.icon}</div>
                </div>

                {/* Recommended */}
                {plan.premium && (
                  <div className="recommended-badge">
                    <Crown size={14} />
                    RECOMMENDED
                  </div>
                )}

                <div className="card-divider"></div>

                {/* Features */}
                <div className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <div className="feature-item" key={featureIndex}>
                      <span className="check-icon">
                        <Check size={14} strokeWidth={3} />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="plan-button">
                  {plan.button}
                  <ArrowRight size={17} />
                </button>
              </div>
            ))}
          </div>

          {/* Right Text */}
          <div className="side-message right-message"></div>
        </div>

        {/* Bottom Benefits */}
        <div className="benefits-row">
          <div className="benefit-item">
            <div className="benefit-icon">
              <Shield size={23} />
            </div>

            <div>
              <h4>Safe &amp; Secure</h4>
              <p>Your privacy is our priority.</p>
            </div>
          </div>

          <div className="benefit-divider"></div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <Heart size={23} />
            </div>

            <div>
              <h4>Built on Values</h4>
              <p>For genuine and meaningful connections.</p>
            </div>
          </div>

          <div className="benefit-divider"></div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <Users size={23} />
            </div>

            <div>
              <h4>A Supportive Community</h4>
              <p>Because you're not alone in this journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
