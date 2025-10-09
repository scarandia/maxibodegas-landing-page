import { FaWhatsapp } from "react-icons/fa"
export const ScrollingWAIcon = () => {

    const phoneNumber = 59170111166;
    const message = `¡Hola! Quiero reservar una bodega.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition-transform hover:scale-110"
            >
                < FaWhatsapp className="w-8 h-8" />
            </a>
        </>
    )
}

export default ScrollingWAIcon