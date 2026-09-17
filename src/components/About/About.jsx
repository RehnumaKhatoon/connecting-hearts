import { HeartHandshake, Sparkles, Gem } from "lucide-react";
import "./About.scss";
import AboutImg from "../../assets/images/about.jpeg";
const cards = [
  [
    HeartHandshake,
    "Built on Values",
    "Every profile is from a Heartfulness practitioner seeking a sincere and lasting relationship.",
  ],
  [
    Gem,
    "Genuine & Respectful",
    "We encourage honesty, respectful conversations, and responsible use — because trust creates lasting bonds.",
  ],
  [
    Sparkles,
    "Spiritual Compatibility",
    "Find someone who understands your spiritual journey and shares a similar life vision and purpose.",
  ],
];
export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo">
            <img src={AboutImg} alt="Couple sharing a happy moment" />
            {/* <span>
              6+<small>Years of trust</small>
            </span> */}
          </div>
          <div className="about-copy">
            <span className="eyebrow">ABOUT CONNECTING HEARTS</span>
            <h2 className="title">
              A journey of trust,
              <br />
              values & meaningful
              <br />
              <em>connections.</em>
            </h2>
            <p>
              Connecting Hearts is a dedicated matrimonial platform for
              Heartfulness abhyasis around the world. For more than 6 years,
              we’ve been helping sincere individuals find a life partner who
              shares their values, lifestyle and spiritual path.
            </p>
            <p>
              We believe marriage is more than companionship — it’s a shared
              purpose. Our platform is designed to make your search respectful,
              safe and truly meaningful.
            </p>
          </div>
        </div>
        <div className="value-grid">
          {cards.map(([Icon, title, text]) => (
            <article key={title}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
