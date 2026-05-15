import ButtonLink from "./ButtonLink.jsx";
import { brand, images } from "../data/siteContent.js";

function IntakeOptions() {
  return (
    <section className="section intake">
      <div className="container intake-grid">
        <article className="intake-card intake-card--dark" id="dropbox">
          <span className="eyebrow">24/7 Dropbox</span>
          <h2>Drop off your drone anytime in Midland, Alabama.</h2>
          <p>
            Use the Drone Fixr dropbox in Midland when your schedule does not match shop hours.
            Leave your drone securely, then start the diagnostic and quote process.
          </p>
          <div className="address-block">
            <span>Available anytime at</span>
            <strong>{brand.dropboxAddress}</strong>
          </div>
          <ButtonLink href="/contact" variant="light">
            Start Dropbox Repair
          </ButtonLink>
        </article>

        <article className="intake-card intake-card--image" id="ship-in">
          <img src={images.repairBench} alt="Drone repair parts and tools arranged on workbench" loading="lazy" />
          <div className="intake-card__content">
            <span className="eyebrow">Ship-in repair service</span>
            <h2>Send your drone in for diagnosis.</h2>
            <p>
              Package your drone carefully and ship it to the Dothan repair address. Include your
              contact details so Drone Fixr can confirm intake and send the quote.
            </p>
            <div className="address-block address-block--light">
              <span>Ship your drone to</span>
              <strong>{brand.shippingAddress}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default IntakeOptions;
