import { Warehouse, ShieldCheck, Truck, CalendarCheck } from 'lucide-react'

const HeroInfoCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-12 py-14 shadow-xl border border-blue-50 text-center w-full max-w-2xl ml-0 mt-32 transform hover:scale-[1.01] transition-all duration-300">
      <h2 className="text-blue-800 font-black text-2xl md:text-3xl mb-6 uppercase tracking-wide">
        Guarda más, <span className="text-blue-600">Preocúpate menos</span>
      </h2>

      <p className="text-gray-800 text-base md:text-lg mb-8 leading-relaxed font-medium">
        Bodegas seguras y accesibles desde 9m² hasta 50m². Reserva hoy, sin complicaciones.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="bg-blue-100 p-3 rounded-full">
            <Warehouse className="text-blue-800 w-10 h-10" />
          </div>
          <span className="text-sm font-bold text-gray-800">Desde 9m²</span>
          <span className="text-xs text-gray-600">Hasta 50m² disponibles</span>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <div className="bg-blue-100 p-3 rounded-full">
            <ShieldCheck className="text-blue-800 w-10 h-10" />
          </div>
          <span className="text-sm font-bold text-gray-800">Seguridad 24/7</span>
          <span className="text-xs text-gray-600">Monitoreo constante</span>
        </div>

        <div className="flex flex-col items-center text-center gap-2">
          <div className="bg-blue-100 p-3 rounded-full">
            <Truck className="text-blue-800 w-10 h-10" />
          </div>
          <span className="text-sm font-bold text-gray-800">Acceso Libre</span>
          <span className="text-xs text-gray-600">Entra cuando quieras</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
          <CalendarCheck className="w-5 h-5" />
          Reserva Hoy
        </button>
      </div>
    </div>
  )
}

export default HeroInfoCard
