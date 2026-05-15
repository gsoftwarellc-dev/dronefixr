import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { brand, navLinks } from "../data/siteContent.js";
import ButtonLink from "./ButtonLink.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const closeMenu = () => setIsOpen(false);
  const isCurrentLink = (href) => {
    if (href === "/") {
      return pathname === "/" && !hash;
    }

    if (href.includes("#")) {
      const [targetPath, targetHash] = href.split("#");
      return pathname === targetPath && hash === `#${targetHash}`;
    }

    return pathname === href;
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand-mark" to="/" aria-label="Drone Fixr home">
          <img src={brand.logo} alt="Drone Fixr logo" />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              className={isCurrentLink(link.href) ? "is-current" : ""}
              key={link.href}
              to={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="header-actions">
          <a className="call-link" href={brand.phoneHref}>
            {brand.phone}
          </a>
          <ButtonLink href="/contact">Start Repair</ButtonLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
