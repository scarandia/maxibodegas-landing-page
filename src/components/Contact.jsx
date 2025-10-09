import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const whatsappContacts = [
  { number: "59170111166", display: "+(591) 701-111-66", name: "Ventas" },
  { number: "59179724568", display: "+(591) 797-245-68", name: "Gerencia Comercial" },
  { number: "59162118992", display: "+(591) 621-189-92", name: "Administración" },
];

const Contact = () => {
  return (
    <div id='contact' className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 md:py-24 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Estamos aquí para ayudarte con todas tus necesidades de almacenamiento
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16 space-y-12">

        {/* First Row: Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="space-y-8 h-full">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visítanos</h3>
                    <p className="text-gray-600 mt-1">
                      Av. Clara Cuta 707<br />
                      Santa Cruz de la Sierra, Bolivia
                    </p>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex flex-col gap-4">
                  {whatsappContacts.map((contact, index) => (
                    <a
                      key={index}
                      href={`https://wa.me/${contact.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 bg-green-400 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-md transition-all"
                    >
                      <div className="bg-white p-2 rounded-full">
                        <FaWhatsapp className="w-7 h-7 text-green-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-white">{contact.name}</h3>
                        <p className="text-sm opacity-90">{contact.display}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Escríbenos</h3>
                    <a href="mailto:info@maxibodegas.com.bo" className="text-gray-600 hover:text-blue-600 transition mt-1 block">
                      info@maxibodegas.com.bo
                    </a>
                    <a href="mailto:soporte@maxibodegas.com.bo" className="text-gray-600 hover:text-blue-600 transition mt-1 block">
                      soporte@maxibodegas.com.bo
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Horario de Atención</h3>
                    <p className="text-gray-600 mt-1">
                      Lunes a Sabado: 8:30 AM - 4:00 PM<br />
                      Domingos: Cerrado<br /><br />
                    </p>
                    <p className='text-bold text-blue-600'>Visitas fuera de horario con previa coordinación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Envíanos un Mensaje</h2>
            <p className="text-gray-600 mb-6">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="rental">Consulta sobre alquiler</option>
                  <option value="pricing">Consulta de precios</option>
                  <option value="tour">Solicitud de visita</option>
                  <option value="support">Soporte técnico</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <div className="flex items-center">
               {/*  <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                /> 
                 <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  Acepto la política de privacidad
                </label> */}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>

            {/* Success Message (hidden by default) */}
            <div className="hidden mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800 font-medium">
                  ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Full-width Map */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4 text-center text-xl">Ubicación</h3>
          <div className="w-full h-[450px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.254832101019!2d-63.162926925162694!3d-17.73262797366083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7ab948ee4cb%3A0xd70c2bdfcaa71226!2sMaxiBodegas!5e0!3m2!1ses-419!2sbo!4v1755200771217!5m2!1ses-419!2sbo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;