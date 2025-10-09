import { ShieldCheck, MapPin, Boxes } from 'lucide-react'

const features = [
{
    title: 'Ubicación estratégica',
    description: 'Estamos ubicados estratégicamente en la Avenida Prolongación Beni entre sexto y séptimo anillo. Calle Clara Cuta #707.',
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'Espacios versátiles',
    description: 'Soluciones de almacenamiento empresarial que se adaptan a tu stock, maquinaria y material de trabajo.',
    icon: <Boxes className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'Seguridad 24/7',
    description: 'Nuestras instalaciones cuentan con vigilancia constante, cámaras de seguridad y acceso controlado las 24 horas del día.',
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
  },
]

const Features = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-36">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">¿Por qué elegir Maxibodegas?</h2>
        <p className="text-gray-600 text-lg mb-12">
          Nos especializamos en ofrecer soluciones de almacenamiento confiables, accesibles y seguras.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-lg transition">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
