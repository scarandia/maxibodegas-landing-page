import React, { useState } from 'react';
import { Expand, ChevronRight, Check, X } from 'lucide-react';

const SizeComparisonSection = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizeOptions = [
    {
      category: 'Espacios Compactos',
      iconColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      sizes: [
        {
          size: '9m²',
          description: 'Ideal para 15-20 cajas estándar o muebles pequeños',
          price: 'Desde $XXX/mes',
          features: ['Seguridad 24/7', 'Acceso controlado', 'Sin contrato largo'],
          highlight: 'Más popular'
        },
        {
          size: '13.5m²',
          description: 'Perfecto para el contenido de 1 habitación pequeña',
          price: 'Desde $XXX/mes',
          features: ['Seguridad 24/7', 'Acceso 24 horas', 'Estantería incluida']
        },
        {
          size: '18m²',
          description: 'Espacio para el contenido de 1 departamento pequeño',
          price: 'Desde $XXX/mes',
          features: ['Climatización opcional', 'Seguro incluido', 'Carga y descarga fácil']
        }
      ]
    },
    {
      category: 'Espacios Amplios',
      iconColor: 'bg-green-100',
      textColor: 'text-green-800',
      sizes: [
        {
          size: '25m²',
          description: 'Capacidad para inventario de negocio pequeño',
          price: 'Desde $XXX/mes',
          features: ['Acceso para vehículos', 'Estantería industrial', 'Control de humedad']
        },
        {
          size: '33m²',
          description: 'Almacenamiento para equipos medianos o mercancía',
          price: 'Desde $XXX/mes',
          features: ['Dock de carga', 'Sistema de seguridad avanzado', 'Flexibilidad horaria'],
          highlight: 'Mejor valor'
        },
        {
          size: '50m²',
          description: 'Solución para negocios con stock amplio o mudanzas completas',
          price: 'Desde $XXX/mes',
          features: ['Acceso para camiones', 'Control de temperatura', 'Administración incluida']
        }
      ]
    }
  ];

  return (
    <div id='sizeComparison'>
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
              Almacenamiento Seguro
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Encuentra el <span className="text-blue-600">espacio perfecto</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Selecciona entre nuestras opciones de bodegas con diferentes capacidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {sizeOptions.map((category, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${index === 0 ? 'border-blue-500' : 'border-green-500'}`}>
                <div className={`flex items-center gap-3 mb-6 p-3 ${category.iconColor} rounded-lg`}>
                  <Expand className={`w-6 h-6 ${category.textColor}`} />
                  <h3 className={`text-xl font-bold ${category.textColor}`}>{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.sizes.map((size, sizeIndex) => (
                    <div
                      key={sizeIndex}
                      onClick={() => setSelectedSize(size)}
                      className={`relative border-2 border-gray-100 rounded-lg p-5 hover:shadow-lg transition cursor-pointer group ${index === 0 ? 'hover:border-blue-200' : 'hover:border-green-200'}`}
                    >
                      {size.highlight && (
                        <span className={`absolute -top-2 -right-2 text-xs font-bold px-2 py-1 rounded-full ${index === 0 ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}>
                          {size.highlight}
                        </span>
                      )}
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className={`text-lg font-semibold group-hover:underline ${index === 0 ? 'text-blue-800' : 'text-green-800'}`}>
                            {size.size}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">{size.description}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:${index === 0 ? 'text-blue-500' : 'text-green-500'} mt-1`} />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className={`font-medium text-sm ${index === 0 ? 'text-blue-600' : 'text-green-600'}`}>{size.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Size Details Modal */}
          {selectedSize && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl relative">
                <button
                  onClick={() => setSelectedSize(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedSize.size}</h3>
                  <p className="text-gray-700 mt-1">{selectedSize.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Características incluidas:</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedSize.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-blue-100 p-1 rounded-full mt-1">
                          <Check className="w-3 h-3 text-blue-600" />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-600 rounded-lg p-4 mb-6 text-center">
                  <p className="text-white font-bold text-lg">{selectedSize.price}</p>
                  {selectedSize.highlight && (
                    <p className="text-blue-100 text-sm mt-1">Opción "{selectedSize.highlight}"</p>
                  )}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition shadow-md">
                  Reservar este espacio
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SizeComparisonSection;