import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextGrid = () => {
    if (startIndex + itemsPerPage < images.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrevGrid = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div id="gallerySection" className="bg-gradient-to-b from-gray-50 to-white py-10 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-2 sm:mb-3">
            Galería Corporativa
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            <span className="text-blue-600">Conoce nuestras instalaciones</span> en imágenes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Explora fotografías reales de nuestras instalaciones y equipo de trabajo.
          </p>
        </div>

        {/* ✅ Carrusel en móviles */}
        <div className="md:hidden relative w-full h-64 overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`Imagen ${current + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage(images[current])}
            />
          </AnimatePresence>
          {/* Botones navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          {/* Indicadores */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === current ? "bg-white" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>

        {/* ✅ Grid en desktop */}
        <div className="hidden md:block relative mt-8">
          {startIndex > 0 && (
            <button
              onClick={handlePrevGrid}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          {startIndex + itemsPerPage < images.length && (
            <button
              onClick={handleNextGrid}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          )}
          <div className="grid grid-cols-3 gap-6">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Imagen corporativa ${index + 1}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm">
                    <ImageIcon className="text-white w-5 h-5 mx-auto mb-1" />
                    <p className="font-medium">Ver imagen</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-3">
          <div className="relative w-full max-w-3xl max-h-[90vh] flex justify-center">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-xl object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/80 rounded-full p-2 sm:p-3 hover:bg-white transition"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;