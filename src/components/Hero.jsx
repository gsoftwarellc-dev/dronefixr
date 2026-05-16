import ButtonLink from "./ButtonLink.jsx";
import { brand, images } from "../data/siteContent.js";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="location-badge">{brand.locationClaim}</div>
          <h1>{brand.tagline}</h1>
          <p>
            Professional drone repair in {brand.primaryLocation}, including diagnostics,
            calibration, firmware updates, and flight upgrades from a technical shop built around
            getting pilots flying again.
          </p>

          <div className="hero-actions">
            <ButtonLink href={brand.phoneHref}>
              Call Now
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Start a Repair</ButtonLink>
          </div>

          <div className="hero-highlights" aria-label="Repair highlights">
            <div>
              <strong>24/7</strong>
              <span>Dothan-area dropbox access</span>
            </div>
            <div>
              <strong>$40</strong>
              <span>Diagnostic fee</span>
            </div>
            <div>
              <strong>2 ways</strong>
              <span>Drop off near Dothan or ship in</span>
            </div>
          </div>
        </div>

        <div className="hero-media" aria-label="Drone repair workbench imagery">
          <img className="hero-media__main" src={images.heroBench} alt="Drone repair workbench with drones being serviced" />
          <div className="hero-media__card">
            <img src={images.heroDrone} alt="DJI drone on repair bench" />
            <div>
              <span>Dothan repair intake</span>
              <strong>Teardown, quote, repair, return.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
