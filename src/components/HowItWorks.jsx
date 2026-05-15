import { brand, processSteps } from "../data/siteContent.js";

const processIcons = ["drop", "fee", "quote", "approve", "return"];

function ProcessIcon({ name }) {
  const paths = {
    drop: (
      <>
        <path d="M5 7h14l-1 13H6L5 7Z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </>
    ),
    fee: (
      <>
        <path d="M12 2v20" />
        <path d="M17 6.5C15.8 5.5 14.4 5 12.8 5H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-2.8c-1.6 0-3-.5-4.2-1.5" />
      </>
    ),
    quote: (
      <>
        <path d="M5 4h14v16H5V4Z" />
        <path d="M8 9h8M8 13h6" />
      </>
    ),
    approve: (
      <>
        <path d="M20 7 10 17l-5-5" />
      </>
    ),
    return: (
      <>
        <path d="M3 12h14" />
        <path d="m10 5 7 7-7 7" />
        <path d="M21 5v14" />
      </>
    ),
  };

  return (
    <svg className="process-card__icon" aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

function HowItWorks() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="process-heading">
          <h2>
            How It <span>Works</span>
          </h2>
          <p>
            From urgent drone issue to flight-ready return — clear diagnostics, quote approval, and
            simple drop-off or ship-in options.
          </p>
          <div className="process-badges">
            <span>24/7 Midland Dropbox</span>
            <span>{brand.diagnosticFee} Diagnostic Fee</span>
            <span>Quote Before Repair</span>
          </div>
        </div>

        <div className="process-flow">
          {processSteps.map((step, index) => (
            <article
              className={`process-step ${index % 2 === 0 ? "process-step--left" : "process-step--right"}`}
              key={step.title}
            >
              <div className="process-node" aria-hidden="true">
                {index + 1}
              </div>
              <div className="process-card">
                <div className="process-card__icon-wrap">
                  <ProcessIcon name={processIcons[index]} />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
