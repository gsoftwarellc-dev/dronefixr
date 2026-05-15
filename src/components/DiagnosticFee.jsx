import { brand, images } from "../data/siteContent.js";

function DiagnosticFee() {
  return (
    <section className="diagnostic section" id="diagnostic">
      <div className="container diagnostic-grid">
        <div className="diagnostic-copy">
          <span className="eyebrow">Diagnostic fee</span>
          <h2>{brand.diagnosticFee} starts the teardown, inspection, and quote.</h2>
          <p>
            Every submitted or shipped drone requires a {brand.diagnosticFee} diagnostic fee. Drone
            Fixr opens the drone, identifies the issue, checks the repair path, and sends a quote
            before repair charges are collected.
          </p>
          <ul className="check-list">
            <li>Applies to both drop-off and ship-in repairs.</li>
            <li>Quote approval is required before repair work continues.</li>
            <li>If the quote is declined, the drone is reassembled and shipped back.</li>
          </ul>
        </div>
        <div className="diagnostic-media">
          <img src={images.diagnosticDetail} alt="Close-up drone teardown during diagnostic inspection" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default DiagnosticFee;
