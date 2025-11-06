import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "/Gallery/Bodegas1.jpg";
import img2 from "/Gallery/Bodegas2.jpg";
import img3 from "/Gallery/CamionDentro2.jpg";
import img4 from "/Gallery/Fachada2.jpg";
import img5 from "/Gallery/Fachada3.jpg";
import img6 from "/Gallery/Fachada4.jpg";
import img7 from "/Gallery/Fachada5.jpg";
import img8 from "/Gallery/Camion3.jpg";
import img9 from "/Gallery/Camion5.jpg";
import img10 from "/Gallery/Fachada10.jpg";
import img11 from "/Gallery/Interior3.jpg";
import img12 from "/Gallery/Exterior1.jpg";

/* Imagenes con descripción para SEO */
const images = [
  { src: img10, alt: "Vista exterior del edificio de almacenamiento MaxiBodegas" },
  { src: img2, alt: "Pasillo con puertas de almacenamiento" },
  { src: img1, alt: "Vista interna de una bodega" },
  { src: img5, alt: "Entrada principal con un guardia presente" },
  { src: img3, alt: "Puerta principal y camión saliendo" },
  { src: img4, alt: "Muro exterior con el logo de MaxiBodegas" },
  { src: img6, alt: "Vista externa del jardín" },
  { src: img7, alt: "Vista externa nocturna de la bodega" },
  { src: img11, alt: "Pasillo de unidades de almacenamiento" },
  { src: img8, alt: "Camión entrando a las instalaciones" },
  { src: img12, alt: "Vista externa mirando hacia afuera" },
  { src: img9, alt: "Camión dentro de las instalaciones" },
];

const GallerySection = () => {
  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const handleNextGrid = () => {
    if (startIndex + itemsPerPage < images.length) setStartIndex(startIndex + itemsPerPage);
  };

  const handlePrevGrid = () => {
    if (startIndex - itemsPerPage >= 0) setStartIndex(startIndex - itemsPerPage);
  };

  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div id="gallerySection" className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            <span className="text-blue-600">Conoce nuestras instalaciones</span> en imágenes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Explora fotografías reales de nuestras instalaciones y equipo de trabajo.
          </p>
        </div>

        {/* Carrusel en móviles */}
        <div className="md:hidden relative w-full h-64 overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage(images[current])}
              title={images[current].alt}
            />
          </AnimatePresence>
          {/* Botones navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition"
            aria-label="Siguiente imagen"
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

        {/* Grid en desktop */}
        <div className="hidden md:block relative mt-8">
          {startIndex > 0 && (
            <button
              onClick={handlePrevGrid}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
              aria-label="Imágenes anteriores"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          {startIndex + itemsPerPage < images.length && (
            <button
              onClick={handleNextGrid}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition z-10"
              aria-label="Siguiente imágenes"
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
                  src={img.src}
                  alt={img.alt}
                  title={img.alt}
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
              src={selectedImage.src}
              alt={selectedImage.alt}
              title={selectedImage.alt}
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg shadow-xl object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/80 rounded-full p-2 sm:p-3 hover:bg-white transition"
              aria-label="Cerrar imagen"
            >
              <X className="w-8 h-8 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;