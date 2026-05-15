import { testimonials } from "../data/siteContent.js";

const reviewRows = [
  testimonials,
  [...testimonials].slice(4).concat(testimonials.slice(0, 4)),
  [...testimonials].slice(8).concat(testimonials.slice(0, 8)),
];

function VerifiedIcon() {
  return (
    <svg className="verified-icon" aria-label="Verified review" viewBox="0 0 24 24" role="img">
      <path d="M12 2.6 14.2 4l2.6-.1 1.2 2.3 2.3 1.2-.1 2.6 1.4 2.2-1.4 2.2.1 2.6-2.3 1.2-1.2 2.3-2.6-.1L12 21.8l-2.2-1.4-2.6.1L6 18.2 3.7 17l.1-2.6-1.4-2.2 1.4-2.2-.1-2.6L6 6.2l1.2-2.3 2.6.1L12 2.6Z" />
      <path d="m8.4 12.1 2.2 2.2 5-5" />
    </svg>
  );
}

function ReviewCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="review-person">
        {testimonial.avatar ? (
          <img className="review-avatar" src={testimonial.avatar} alt="" loading="lazy" />
        ) : (
          <div className="review-avatar" aria-hidden="true">
            {testimonial.initials}
          </div>
        )}
        <div>
          <div className="review-name">
            <strong>{testimonial.name}</strong>
            <VerifiedIcon />
          </div>
          <span>{testimonial.detail}</span>
        </div>
      </div>

      <div className="stars" aria-label="Five star review">
        ★★★★★
      </div>

      <p>{testimonial.quote}</p>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="testimonial-heading">
        <h2>What Our Clients Say</h2>
      </div>

      <div className="testimonial-marquee" aria-label="Customer reviews">
        {reviewRows.map((row, rowIndex) => (
          <div
            className={`review-row ${rowIndex === 1 ? "review-row--reverse" : ""}`}
            key={`review-row-${rowIndex}`}
          >
            {[0, 1].map((copyIndex) => (
              <div className="review-track" aria-hidden={copyIndex === 1} key={copyIndex}>
                {row.map((testimonial) => (
                  <ReviewCard
                    key={`${testimonial.name}-${copyIndex}-${rowIndex}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
