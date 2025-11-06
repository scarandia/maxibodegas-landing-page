import { useState, useEffect } from 'react';
import { Boxes, Clock, Scale, ListCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const StorageExplanation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bulletPoints = [
    {
      icon: Boxes,
      text: "Medianas y pequeñas empresas",
      desc: "Almacena, organiza y protege tu mercadería sin complicaciones.",
      color: "from-purple-100 to-blue-200",
    },
    {
      icon: Scale,
      text: "Emprendedores con inventario pequeño",
      desc: "Almacena productos sin pagar por un local comercial completo",
      color: "from-blue-100 to-blue-200",
    },
    {
      icon: Clock,
      text: "Familias en proceso de mudanza",
      desc: "Guarda tus pertenencias de forma segura durante la transición",
      color: "from-indigo-100 to-blue-200",
    },
  ];

  return (
    <div id="storageExplanation">
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-32 h-32 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-30 blur-xl md:blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-32 h-32 md:w-64 md:h-64 bg-indigo-100 rounded-full opacity-30 blur-xl md:blur-3xl"></div>

        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-1 text-blue-800 relative z-10">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full inline-block shadow-lg transform hover:scale-105 transition-transform duration-300 text-sm md:text-base">
            ¿Qué son?
          </span>
        </h2>

        <div className="relative min-h-[800px] md:min-h-[600px] overflow-visible rounded-2xl bg-white shadow-xl p-2 md:p-4">
          <div className="absolute inset-0 p-3 md:p-6 opacity-100 translate-x-0">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch h-full overflow-visible">

              {/* Left Panel */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-center text-center overflow-visible group border-2 border-white">
                <div className="relative z-10 pt-4 md:pt-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-4 md:mb-6">
                    <Boxes className="w-8 h-8 md:w-10 md:h-10 text-blue-600" title="Ícono de almacenamiento" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    ¿Qué son las bodegas?
                  </h3>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-4">
                    Imagina tener un <strong className="text-blue-700">espacio extra</strong> justo cuando lo necesitas,
                    sin comprometerte a largos contratos o pagar{" "}
                    <span className="line-through text-red-400">precios exorbitantes</span>.
                  </p>

                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 mt-4 shadow-md border border-blue-100">
                    <div className="flex items-center justify-center space-x-2 text-xs md:text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                      <span className="text-blue-600 font-medium">Contáctanos para verificar disponibilidad</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel with Framer Motion */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 mt-6 md:mt-0">
                <h4 className="text-lg md:text-2xl font-bold text-blue-800 mb-4 md:mb-6 flex items-center justify-center">
                  <span className="bg-blue-100 p-2 rounded-lg mr-3">
                    <ListCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-600" title="Lista de beneficios" />
                  </span>
                  Perfecto para
                </h4>

                <ul className="space-y-3 md:space-y-4">
                  {bulletPoints.map((item, index) => (
                    <motion.li
                      key={index}
                      role="listitem"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0,0,0,0.1)" }}
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-r from-white to-blue-50 transition-all duration-300 border border-gray-100 cursor-pointer"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className={`bg-gradient-to-br ${item.color} p-2 md:p-3 rounded-full flex items-center justify-center transition-all duration-300`}>
                          <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" title={item.text} />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800 block mb-1 text-sm md:text-base">{item.text}</span>
                          <span className="text-xs md:text-sm text-gray-600">{item.desc}</span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorageExplanation;