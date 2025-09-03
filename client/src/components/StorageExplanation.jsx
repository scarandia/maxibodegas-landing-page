import { useState, useEffect } from 'react';
import { Boxes, Shield, Clock, Scale, Warehouse, ArrowLeft, ArrowRight, MapPin, CheckCircle, CalendarCheck, Zap, Heart } from 'lucide-react';

const StorageExplanation = () => {
  const [activeTab, setActiveTab] = useState('what');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Auto-rotate tabs for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => prev === 'what' ? 'why' : 'what');
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="storageExplanation">
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16 overflow-hidden relative">
        {/* Decorative background elements - smaller on mobile */}
        <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-32 h-32 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-30 blur-xl md:blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-32 h-32 md:w-64 md:h-64 bg-indigo-100 rounded-full opacity-30 blur-xl md:blur-3xl"></div>

        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-blue-800 relative z-10">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full inline-block shadow-lg transform hover:scale-105 transition-transform duration-300 text-sm md:text-base">
            Tu Espacio Ideal te Espera
          </span>
        </h2>

        {/* Enhanced tabs with better visual design - stacked on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-12 relative z-10">
          <button
            onClick={() => setActiveTab('what')}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors hidden md:block transform hover:scale-110"
            aria-label="Previous tab"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex flex-col md:flex-row mx-2 md:mx-6 bg-blue-50 rounded-xl p-1 shadow-inner w-full md:w-auto">
            <button
              onClick={() => setActiveTab('what')}
              className={`px-4 py-3 md:px-8 md:py-4 font-medium flex items-center justify-center gap-2 relative rounded-xl transition-all duration-300 ${activeTab === 'what' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-blue-500'}`}
            >
              <Warehouse className="w-4 h-4 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">¿Qué son?</span>
            </button>
            <button
              onClick={() => setActiveTab('why')}
              className={`px-4 py-3 md:px-8 md:py-4 font-medium flex items-center justify-center gap-2 relative rounded-xl transition-all duration-300 ${activeTab === 'why' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-blue-500'}`}
            >
              <Shield className="w-4 h-4 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">Beneficios</span>
            </button>
          </div>

          <button
            onClick={() => setActiveTab('why')}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors hidden md:block transform hover:scale-110"
            aria-label="Next tab"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Content container with improved transitions - adjusted height for mobile */}
        <div className="relative min-h-[800px] md:min-h-[600px] overflow-visible rounded-2xl bg-white shadow-xl p-2 md:p-4">

          {/* Panel ¿Qué son? - Enhanced with animations */}
          <div
            className={`absolute inset-0 p-3 md:p-6 transition-all duration-700 ease-in-out ${activeTab === 'what' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 items-center h-full overflow-visible">

              {/* Left Panel - Interactive Illustration - FIXED ICON CUTOFF */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col justify-center text-center overflow-visible group border-2 border-white">

                {/* Animated background elements - hidden on mobile for performance */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                  <div className="absolute opacity-10 left-4 md:left-10 top-4 md:top-8 animate-float">
                    <Boxes className="w-16 h-16 md:w-24 md:h-24 text-blue-400" />
                  </div>
                  <div className="absolute opacity-10 right-4 md:right-12 bottom-4 md:bottom-10 animate-float" style={{ animationDelay: '1s' }}>
                    <Boxes className="w-12 h-12 md:w-20 md:h-20 text-indigo-400" />
                  </div>
                </div>

                {/* Main content with subtle hover effects - FIXED: Added padding to prevent icon cutoff */}
                <div className="relative z-10 pt-4 md:pt-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg mb-4 md:mb-6">
                    <Boxes className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    ¿Qué son las bodegas?
                  </h3>
                  <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-4">
                    Imagina tener un <strong className="text-blue-700">espacio extra</strong> justo cuando lo necesitas,
                    sin comprometerte a largos contratos o pagar{" "}
                    <span className="line-through text-red-400">precios exorbitantes</span>.
                  </p>

                  {/* Interactive element */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 md:p-4 mt-4 shadow-md border border-blue-100">
                    <div className="flex items-center justify-center space-x-2 text-xs md:text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-blue-600 font-medium">15+ espacios disponibles ahora</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Enhanced Bullet Points */}
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 mt-6 md:mt-0">
                <h4 className="text-lg md:text-2xl font-bold text-blue-800 mb-4 md:mb-6 flex items-center justify-center md:justify-start">
                  <span className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Boxes className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </span>
                  Perfecto para:
                </h4>

                <ul className="space-y-3 md:space-y-4">
                  {[
                    {
                      icon: Scale,
                      text: "Emprendedores con inventario pequeño",
                      desc: "Almacena productos sin pagar por un local comercial completo",
                      color: "from-blue-100 to-blue-200"
                    },
                    {
                      icon: Clock,
                      text: "Personas en proceso de mudanza",
                      desc: "Guarda tus pertenencias de forma segura durante la transición",
                      color: "from-indigo-100 to-indigo-200"
                    },
                    {
                      icon: Boxes,
                      text: "Coleccionistas y aficionados",
                      desc: "Protege tus colecciones valiosas con acceso controlado",
                      color: "from-purple-100 to-purple-200"
                    }
                  ].map((item, index) => (
                    <li key={index} className="p-3 md:p-4 rounded-xl bg-gradient-to-r from-white to-blue-50 transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className={`bg-gradient-to-br ${item.color} p-2 md:p-3 rounded-full flex items-center justify-center transition-all duration-300`}>
                          <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800 block mb-1 text-sm md:text-base">{item.text}</span>
                          <span className="text-xs md:text-sm text-gray-600">{item.desc}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="mt-4 md:mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 md:py-3 px-4 rounded-xl font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                  <Zap className="w-4 h-4 md:w-5 md:h-5" />
                  Descubre tu espacio ideal
                </button>
              </div>
            </div>
          </div>

          {/* Panel Beneficios - Enhanced with better visuals */}
          <div
            className={`absolute inset-0 p-3 md:p-6 transition-all duration-700 ease-in-out ${activeTab === 'why' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 h-full overflow-y-auto md:overflow-hidden">
              <div className="space-y-4 md:space-y-6 h-full flex flex-col justify-center py-2 md:py-4">

                {/* Location Card - Enhanced */}
                <div className="bg-white p-4 md:p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-2">Ubicación Estratégica</h3>
                      <p className="text-gray-700 mb-3 text-sm md:text-base">Zona Industrial Norte con acceso privilegiado:</p>
                      <ul className="space-y-2 text-gray-600 text-xs md:text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          Acceso directo a autopista principal
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          Vigilancia 24/7 con sistemas de última generación
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          Estacionamiento amplio y seguro
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Features Grid - Enhanced */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: Shield, title: "Seguridad", desc: "Cámaras 24h", bg: "bg-blue-50", color: "text-blue-600" },
                    { icon: Clock, title: "Acceso 24/7", desc: "Sin restricciones", bg: "bg-indigo-50", color: "text-indigo-600" },
                    { icon: Scale, title: "Ahorro", desc: "Precios accesibles", bg: "bg-purple-50", color: "text-purple-600" },
                    { icon: CalendarCheck, title: "Flexibilidad", desc: "Sin largos contratos", bg: "bg-pink-50", color: "text-pink-600" }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white p-3 md:p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className={`${feature.bg} p-1.5 md:p-2 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-2 mx-auto`}>
                        <feature.icon className={`w-4 h-4 md:w-5 md:h-5 ${feature.color}`} />
                      </div>
                      <h4 className="font-semibold text-blue-800 text-xs md:text-sm text-center">{feature.title}</h4>
                      <p className="text-gray-600 text-xs text-center mt-1">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section - Enhanced */}

            </div>
          </div>
        </div>

        {/* Enhanced progress indicators */}
        <div className="flex justify-center mt-6 md:mt-10 space-x-3 relative z-10">
          <button
            onClick={() => setActiveTab('what')}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTab === 'what' ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label="Show what are storage units"
          />
          <button
            onClick={() => setActiveTab('why')}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTab === 'why' ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label="Show benefits"
          />
        </div>

        {/* Mobile navigation arrows */}
        <div className="flex justify-between mt-6 md:hidden">
          <button
            onClick={() => setActiveTab('what')}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Previous tab"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setActiveTab('why')}
            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Next tab"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default StorageExplanation;