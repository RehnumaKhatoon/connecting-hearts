import { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import "./FAQ.scss";
const questions = [
  "What is Connecting Hearts?",
  "Who can join Connecting Hearts?",
  "Is Connecting Hearts an official platform of Heartfulness / SRCM?",
  "Is my personal information safe?",
  "What features are available for free users?",
  "What are the benefits of upgrading to Premium?",
  "Can I hide my photos and contact details?",
  "How does in-app messaging work?",
  "How can I report or block a profile?",
  "Where is Connecting Hearts available?",
];
const answers = [
  "Connecting Hearts is a dedicated matrimonial platform that helps Heartfulness practitioners find a compatible life partner based on shared values and spiritual purpose.",
  "Heartfulness abhyasis and practitioners seeking a sincere, respectful, and meaningful relationship are welcome to join.",
  "Connecting Hearts serves the Heartfulness community independently and is designed around its shared values.",
  "Yes. We prioritize privacy and offer controls for your photos, contact details and communication.",
  "Free members can browse, shortlist, send interest and use the safety features available on the platform.",
  "Premium membership unlocks contact viewing, privacy controls, messaging and profile visibility benefits.",
  "Yes. Premium members can choose to hide their photos and contact details.",
  "Our in-app messenger lets you connect securely before deciding to share personal contact information.",
  "Use the report or block option on any profile. Our team will review concerns with care.",
  "Connecting Hearts is available to the Heartfulness community around the world.",
];
export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq-intro">
          <span className="eyebrow">HELP CENTER</span>
          <h2 className="title">Frequently Asked Questions</h2>
          <p>Everything you need to know about Connecting Hearts.</p>
        </div>
        <div className="faq-list">
          {questions.map((q, i) => (
            <div className={`faq-item ${i === active ? "active" : ""}`} key={q}>
              <button onClick={() => setActive(i === active ? -1 : i)}>
                {q}
                <ChevronDown size={18} />
              </button>
              {i === active && <p>{answers[i]}</p>}
            </div>
          ))}
        </div>
        <div className="help">
          <div>
            <h3>Still have questions?</h3>
            <p>We're always here to help you on your journey.</p>
          </div>
          <a href="mailto:connecting.hearts@heartfulness.org ">
            <Mail size={17} /> Email Us
          </a>
          <a href="https://wa.me/919452613159" target="_blank">
            <Phone size={17} /> Call / WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
