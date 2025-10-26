const AboutUs = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 px-6 overflow-hidden bg-white">

      {/* Background decorative shapes */}
      <div className="absolute -top-16 -left-16 w-40 h-40 md:w-72 md:h-72 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute -bottom-16 -right-16 w-40 h-40 md:w-72 md:h-72 bg-indigo-100 rounded-full opacity-30 blur-2xl"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Sobre Nosotros
          </span>
        </h2>

        {/* About main text */}
        <div className="bg-white/70 backdrop-blur-sm p-6 md:p-10 rounded-2xl shadow-lg border border-blue-50 mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            En <span className="font-semibold text-blue-700">MAXIBODEGAS</span> brindamos soluciones inteligentes de
            almacenamiento para una Santa Cruz en constante crecimiento. Ofrecemos espacios
            seguros, flexibles y estratégicos que impulsan la eficiencia de empresas, emprendedores
            y personas, adaptándonos a sus necesidades logísticas en cada etapa de su desarrollo.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>

        {/* Misión & Visión */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-blue-50">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Misión</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-blue-50">
            <h3 className="text-xl font-bold text-blue-700 mb-3">Visión</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
