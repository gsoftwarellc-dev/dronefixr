import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader.jsx";

const imageModules = import.meta.glob("../assets/gallery/*.jpeg", {
  eager: true,
  import: "default",
});

const galleryImages = Object.entries(imageModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop().replace(".jpeg", "");
    return {
      id: fileName,
      src,
      title: `Drone Fixr repair photo ${fileName}`,
    };
  })
  .sort((a, b) => Number(a.id) - Number(b.id));

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.classList.add("has-lightbox");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("has-lightbox");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="section gallery-section gallery-section--simple">
      <div className="container">
        <SectionHeader
          eyebrow="Gallery"
          title="Drone Fixr repair photos"
          text="Browse repair bench, teardown, diagnostics, calibration, and service photos from the Dothan, Alabama shop."
        />

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <button
              className="gallery-item"
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.src} alt={item.title} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
          <button
            className="gallery-lightbox__backdrop"
            type="button"
            aria-label="Close image viewer"
            onClick={() => setSelectedImage(null)}
          />
          <div className="gallery-lightbox__content">
            <button
              className="gallery-lightbox__close"
              type="button"
              aria-label="Close image viewer"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default GalleryPage;
