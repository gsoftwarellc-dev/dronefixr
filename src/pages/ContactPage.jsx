import ButtonLink from "../components/ButtonLink.jsx";
import Contact from "../components/Contact.jsx";
import { brand, images } from "../data/siteContent.js";

function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <h1>Start your Midland drone repair request.</h1>
            <p>
              Call Drone Fixr for the fastest intake, drop off at the 24/7 Dropbox, or ship your
              drone in for diagnosis in Midland, Alabama.
            </p>
            <div className="hero-actions">
              <ButtonLink href={brand.phoneHref}>Call {brand.phone}</ButtonLink>
            </div>
          </div>
          <img src={images.heroDrone} alt="Drone ready for repair intake" />
        </div>
      </section>
      <Contact />
    </>
  );
}

export default ContactPage;
