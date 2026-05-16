import ButtonLink from "../components/ButtonLink.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";
import { brand, images } from "../data/siteContent.js";

function ServicesPage() {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <h1>{brand.locationClaim}.</h1>
            <p>
              Crash repair, sensor service, calibration, firmware support, drone sales, and flight
              upgrades from a focused Dothan, Alabama repair bench.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/contact">Start a Repair</ButtonLink>
              <ButtonLink href={brand.phoneHref} variant="secondary">
                Call Now
              </ButtonLink>
            </div>
          </div>
          <img src={images.sensorRepair} alt="Drone vision sensor service at Drone Fixr" />
        </div>
      </section>
      <Services />
      <Contact />
    </div>
  );
}

export default ServicesPage;
