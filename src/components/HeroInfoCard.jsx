import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Warehouse,
  ShieldCheck,
  CalendarCheck,
  LocationEdit,
  Ruler,
  CircleParking,
  Forklift,
} from "lucide-react"

const HeroInfoCard = () => {
  const features = [
    {
      icon: <LocationEdit className="text-blue-800 w-10 h-10" title="Ubicación estratégica" />,
      bg: "bg-blue-100",
      title: "Ubicación estratégica",
      desc: "A minutos de Equipetrol",
    },
    {
      icon: <ShieldCheck className="text-blue-800 w-10 h-10" title="Seguridad 24/7" />,
      bg: "bg-blue-100",
      title: "Seguridad 24/7",
      desc: "Monitoreo físico y digital",
    },
    {
      icon: <Warehouse className="text-blue-800 w-10 h-10" title="Desde 9m²" />,
      bg: "bg-blue-100",
      title: "Desde 9m²",
      desc: "Hasta bodegas de 115m²",
    },
    {
      icon: <Ruler className="text-blue-800 w-10 h-10" title="Altura ideal" />,
      bg: "bg-blue-100",
      title: "Altura ideal",
      desc: "Altura de 2,90 metros",
    },
    {
      icon: <CircleParking className="text-blue-800 w-10 h-10" title="Parqueo disponible" />,
      bg: "bg-blue-100",
      title: "Parqueo disponible",
      desc: "Disponibilidad 24/7",
    },
    {
      icon: <Forklift className="text-blue-800 w-10 h-10" title="Apoyo logístico" />,
      bg: "bg-blue-100",
      title: "Apoyo logístico",
      desc: "Agiliza tu proceso de almacenamiento",
    },
  ]

  const [startIndex, setStartIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  // Detectar tamaño de ventana solo en cliente
  useEffect(() => {
    const handleResize = () => setItemsPerSlide(window.innerWidth < 640 ? 2 : 3)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Rotar slides automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + itemsPerSlide) % features.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [features.length, itemsPerSlide])

  // Obtener items visibles
  const visible = features
    .slice(startIndex, startIndex + itemsPerSlide)
    .concat(
      startIndex + itemsPerSlide > features.length
        ? features.slice(0, (startIndex + itemsPerSlide) % features.length)
        : []
    )

  return (
    <div className="bg-white rounded-2xl p-6 md:p-12 py-14 shadow-xl border border-blue-50 text-center w-full max-w-2xl ml-0 mt-32 transform transition-all duration-300 overflow-hidden">
      <h2 className="text-blue-800 font-black text-2xl md:text-3xl mb-6 uppercase tracking-wide">
        Guarda más, <span className="text-blue-600">Preocúpate menos</span>
      </h2>

      <p className="text-gray-800 text-base md:text-lg mb-8 leading-relaxed font-medium">
        Bodegas seguras y accesibles desde 9m² hasta 115m². Reserva hoy, sin
        complicaciones.
      </p>

      {/* Animated Grid */}
      <div className="relative h-44 sm:h-40 mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={`absolute w-full flex justify-center gap-6`}
          >
            {visible.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 w-1/2 sm:w-1/3"
              >
                <div className={`${item.bg} p-3 rounded-full`}>{item.icon}</div>
                <span className="text-sm font-bold text-gray-800">{item.title}</span>
                <span className="text-xs text-gray-600">{item.desc}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => {
            document.getElementById("sizeComparison")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          aria-label="Reservar una bodega hoy"
        >
          <CalendarCheck className="w-5 h-5" />
          Reserva Hoy
        </button>
      </div>
    </div>
  )
}

export default HeroInfoCard