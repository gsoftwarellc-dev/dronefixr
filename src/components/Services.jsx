import { services } from "../data/siteContent.js";
import SectionHeader from "./SectionHeader.jsx";
import ServiceIcon from "./ServiceIcon.jsx";

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Repair services"
          title="Dothan, Alabama drone service from intake to flight-ready"
          text="From crash repair to calibration, Drone Fixr keeps the process clear for Dothan-area pilots and ship-in customers."
        />

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__image">
                <img src={service.image} alt={`${service.title} at Drone Fixr`} loading="lazy" />
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
