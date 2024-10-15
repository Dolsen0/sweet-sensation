import { useState } from "react";

export default function Gallery() {
  const images = [
    { src: "/images/o-9.jpg", alt: "Coffee" },
    { src: "/images/o-10.jpg", alt: "Chocolate Cake" },
    { src: "/images/o-11.jpg", alt: "Brigideiro" },
    { src: "/images/o-12.jpg", alt: "Guava Brigideiro" },
    { src: "/images/o-13.jpg", alt: "Chocolate Brigideiro" },
    { src: "/images/o-14.jpg", alt: "Cake" },
    { src: "/images/o-2.jpg", alt: "Cake" },
    { src: "/images/o-4.jpg", alt: "Cake" },
    { src: "/images/o-6.jpg", alt: "Belgian Waffle" },
    { src: "/images/o-7.jpg", alt: "Chocolate Cone" },
    { src: "/images/o-8.jpg", alt: "Cupcake" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-image-container">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-responsive-image"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
