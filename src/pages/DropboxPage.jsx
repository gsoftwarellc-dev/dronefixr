import ButtonLink from "../components/ButtonLink.jsx";
import IntakeOptions from "../components/IntakeOptions.jsx";
import Contact from "../components/Contact.jsx";
import { brand, images } from "../data/siteContent.js";

function DropboxPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <h1>Drop off your drone anytime for Dothan, Alabama service.</h1>
            <p>
              The Drone Fixr dropbox is available 24/7 at {brand.dropboxAddress}. It is the easiest
              way to submit a Dothan-area drone repair outside normal shop hours.
            </p>
            <div className="hero-actions">
              <ButtonLink href={brand.repairIntakeForm}>Open Intake Form</ButtonLink>
              <ButtonLink href={brand.phoneHref} variant="secondary">
                Call Now
              </ButtonLink>
            </div>
          </div>
          <img src={images.repairBench} alt="Drone Fixr repair bench and drop-off repair items" />
        </div>
      </section>
      <IntakeOptions />
      <Contact />
    </>
  );
}

export default DropboxPage;
