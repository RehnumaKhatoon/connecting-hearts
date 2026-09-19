import { Heart, Play } from "lucide-react";
import "./Hero.scss";
import heroImage from "../../assets/images/hero.jpeg";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-blob one" />
      <div className="hero-blob two" />

      <div className="container hero-grid">
        {/* LEFT CONTENT */}
        <div className="hero-copy">
          <div className="pill">
            <Heart size={13} fill="#e72d68" color="#e72d68" />
            Build Meaningful Connections
          </div>

          <h1>
            Find A Spiritually
            <br />
            Aligned <em>Life</em>
            <br />
            <em>Partner.</em>
          </h1>

          <p>
            Connecting Hearts is a trusted matrimonial platform exclusively for
            Heartfulness practitioners, built on values, trust and spiritual
            compatibility. It is an independent initiative started by our fellow
            abhyasi brother and sisters.
          </p>

          <div className="stores">
            {/* <button className="download">
              <span className="app-icon">
                <Heart size={17} fill="white" />
              </span>

              <span>
                Download
                <br />
                <b>Our App</b>
              </span>
            </button> */}

            <button
              className="store"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.connectinghearts",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <Play size={17} fill="white" />

              <span>
                <small>GET IT ON</small>
                Google Play
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="couple-art">
          <div className="couple-image">
            <img src={heroImage} alt="Happy couple" />
          </div>

          <div className="floating-card">
            <Heart size={15} fill="#e72d68" color="#e72d68" />

            <span>
              Real connections
              <br />
              <b>made with care</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
