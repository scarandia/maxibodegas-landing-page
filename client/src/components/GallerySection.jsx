import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

import img1 from "/Gallery/Bodegas1.jpg";
import img2 from "/Gallery/Bodegas2.jpg";
import img3 from "/Gallery/Camion1.jpg";
import img5 from "/Gallery/Camion4.jpg";
import img7 from "/Gallery/Fachada2.jpg";
import img8 from "/Gallery/Fachada3.jpg";
import img9 from "/Gallery/Fachada4.jpg";
import img10 from "/Gallery/Fachada5.jpg";
import img11 from "/Gallery/Camion3.jpg";
import img12 from "/Gallery/Camion5.jpg";
import img15 from "/Gallery/Fachada10.jpg";
import img18 from "/Gallery/Interior3.jpg";

const GallerySection = () => {
  const images = [
    img1, img2, img3, img8, img5, img7,
    img9, img10, img18, img11, img12, img15
  ];

  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNext = () => {
    if (startIndex + itemsPerPage < images.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div id='gallerySection' className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Galería Corporativa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            <span className="text-blue-600">Conoce nuestras instalaciones</span> en imágenes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explora fotografías reales de nuestras instalaciones y equipo de trabajo.
          </p>
        </div>

        {/* Image Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          {startIndex + itemsPerPage < images.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Imagen corporativa ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ImageIcon className="text-white w-6 h-6 mx-auto mb-1" />
                    <p className="text-sm font-medium">Ver imagen</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Info */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          Mostrando {startIndex + 1} - {Math.min(startIndex + itemsPerPage, images.length)} de {images.length} imágenes
        </div>
      </div>

      {/* Modal for expanded image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;