import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo/logo.jpeg";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "hero"],
    ["Features", "features"],
    ["Safety", "features"],
    ["Testimonials", "about"],
    ["About Us", "about"],
    ["Contact", "footer"],
  ];
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <a href="#hero" className="brand">
          <span>
            <img src={logo} alt="Connecting Hearts Logo" />
          </span>
          <b>
            Connecting
            <br />
            <i>Hearts</i>
          </b>
        </a>
        <nav className={open ? "open" : ""}>
          {links.map(([n, id]) => (
            <a onClick={() => setOpen(false)} href={`#${id}`} key={n}>
              {n}
            </a>
          ))}
          <a className="join mobile-join" href="#pricing">
            Join Now <span>→</span>
          </a>
        </nav>
        <a className="join" href="#pricing">
          Join Now <span>→</span>
        </a>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
