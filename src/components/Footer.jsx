import { Link } from "react-router-dom";
import { brand, services } from "../data/siteContent.js";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={brand.logo} alt="Drone Fixr logo" />
          <p>{brand.tagline}</p>
          <span>
            Dothan, Alabama drone diagnostics, repairs, calibration, firmware support, and flight
            upgrades with 24/7 drop-off and ship-in service options.
          </span>
        </div>

        <div>
          <h2>Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={brand.phoneHref}>{brand.phone}</a>
            </li>
            <li>
              <a href={brand.emailHref}>{brand.email}</a>
            </li>
            <li>{brand.dropboxAddress}</li>
            <li>Ship-in: {brand.shippingAddress}</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Drone Fixr. All rights reserved. | All glory be to God</span>
      </div>
    </footer>
  );
}

export default Footer;
