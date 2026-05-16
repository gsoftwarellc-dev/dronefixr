import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import IntakeOptions from "../components/IntakeOptions.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <HowItWorks />
      <IntakeOptions />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default HomePage;
