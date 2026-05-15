import { brand } from "../data/siteContent.js";
import ButtonLink from "./ButtonLink.jsx";
import SectionHeader from "./SectionHeader.jsx";

const contactCards = [
  {
    icon: "pin",
    label: "Midland main shop and 24/7 Dropbox",
    value: brand.dropboxAddress,
    featured: true,
  },
  {
    icon: "box",
    label: "Ship-in repair address",
    value: brand.shippingAddress,
  },
  {
    icon: "mail",
    label: "Email",
    value: brand.email,
  },
];

function ContactIcon({ name }) {
  const paths = {
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z" />,
    mail: <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm18 3-10 6L2 8" />,
    pin: (
      <>
        <path d="M12 22s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    box: (
      <>
        <path d="m3 7 9-5 9 5-9 5-9-5Z" />
        <path d="m3 7 9 5v10l-9-5V7Zm18 0-9 5v10l9-5V7Z" />
      </>
    ),
  };

  return (
    <svg className="contact-icon" aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeader
          eyebrow="Start repair"
          title="Contact the No. 1 Drone Repair Shop in Midland, Alabama"
          text="Drone repair is urgent. Call now, drop off at the Midland 24/7 Dropbox, or ship your drone in for diagnosis."
        />

        <div className="contact-grid">
          <aside className="contact-panel">
            <div className="contact-panel__left">
              <span className="contact-eyebrow">Urgent drone repair</span>
              <h3>Call first for the fastest repair intake.</h3>
              <a className="contact-phone-hero" href={brand.phoneHref}>{brand.phone}</a>
              <p>Use the fastest option for your schedule. The Midland 24/7 Dropbox is available anytime.</p>
              <div className="contact-actions">
                <ButtonLink href={brand.phoneHref} variant="light">
                  Call Now
                </ButtonLink>
              </div>
            </div>

            <div className="contact-panel__right">
              {contactCards.map((card) => (
                <div className={`contact-card ${card.featured ? "contact-card--featured" : ""}`} key={card.label}>
                  <div className="contact-card__icon">
                    <ContactIcon name={card.icon} />
                  </div>
                  <div className="contact-card__text">
                    <span>{card.label}</span>
                    {card.href ? <a href={card.href}>{card.value}</a> : <strong>{card.value}</strong>}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="map-card">
          <iframe
            title="Map to Drone Fixr 24/7 Dropbox"
            src="https://www.google.com/maps?q=39%20Gateway%20Drive%2C%20Midland%20City%2C%20AL%2036350&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-card__label">
            <strong>Midland 24/7 Dropbox Location</strong>
            <span>{brand.dropboxAddress}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
