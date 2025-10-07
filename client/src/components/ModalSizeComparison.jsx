import { Check, X } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ModalSizeComparison = ({ selectedSize, onClose }) => {
  if (!selectedSize) return null;

  const phoneNumber = "59170111166";
  const message = `¡Hola! Quiero reservar la bodega de *${selectedSize.size}*.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Close if click happens outside the modal box
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center p-4 z-50">
      {/* Attach the ref here */}
      <div ref={modalRef} className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{selectedSize.size}</h3>
          <p className="text-gray-700 mt-1">{selectedSize.description}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3">Características incluidas:</h4>
          <ul className="space-y-3">
            {selectedSize.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-green-100 p-1 rounded-full mt-1">
                  <Check className="w-3 h-3 text-blue-600" />
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Box */}
        <div className="bg-blue-600 rounded-lg p-4 mb-6 text-center">
          <p className="text-white font-bold text-lg">{selectedSize.price}</p>
          {selectedSize.highlight && (
            <p className="text-blue-100 text-sm mt-1">
              Opción "{selectedSize.highlight}"
            </p>
          )}
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition shadow-md hover:cursor-pointer"
        >
          Reserva esta bodega
        </button>
      </div>
    </div>
  );
};

export default ModalSizeComparison;