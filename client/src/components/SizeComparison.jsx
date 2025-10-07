import { useState } from 'react';
import { Expand, ChevronRight } from 'lucide-react';
import sizeOptions from '../data/sizeOptions';
import ModalSizeComparison from './ModalSizeComparison';

const SizeComparisonSection = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  // Split categories
  const mainCategories = sizeOptions.slice(0, 2);       // Compactos + Amplios
  const otrosCategory = sizeOptions[sizeOptions.length - 1]; // Otros Espacios

  return (
    <div id="sizeComparison">
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Encuentra el <span className="text-blue-600">espacio perfecto</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Selecciona entre nuestras opciones de bodegas con diferentes capacidades
            </p>
          </div>

          {/* Modal */}
          {selectedSize && (
            <ModalSizeComparison
              selectedSize={selectedSize}
              onClose={() => setSelectedSize(null)}
            />
          )}

          {/* First two categories: 2-column grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {mainCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${index === 0 ? 'border-blue-500' : 'border-green-500'
                  }`}
              >
                {/* Header */}
                <div
                  className={`flex items-center gap-3 mb-6 p-3 ${category.iconColor} rounded-lg`}
                >
                  <Expand className={`w-6 h-6 ${category.textColor}`} />
                  <h3 className={`text-xl font-bold ${category.textColor}`}>
                    {category.category}
                  </h3>
                </div>

                {/* Sizes */}
                <div className="space-y-4">
                  {category.sizes.map((size, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedSize(size)}
                      className={`relative border-2 border-gray-100 rounded-lg p-5 hover:shadow-lg transition cursor-pointer group ${index === 0
                          ? 'hover:border-blue-200'
                          : 'hover:border-green-200'
                        }`}
                    >
                      {size.highlight && (
                        <span
                          className={`absolute -top-2 -right-2 text-xs font-bold px-2 py-1 rounded-full ${index === 0
                              ? 'bg-blue-600 text-white'
                              : 'bg-green-600 text-white'
                            }`}
                        >
                          {size.highlight}
                        </span>
                      )}

                      <div className="flex justify-between items-start">
                        <div>
                          <h4
                            className={`text-lg font-semibold group-hover:underline ${index === 0
                                ? 'text-blue-800'
                                : 'text-green-800'
                              }`}
                          >
                            {size.size}
                          </h4>
                          <p className="text-gray-600 text-sm mt-1">
                            {size.description}
                          </p>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 group-hover:${index === 0 ? 'text-blue-500' : 'text-green-500'
                            } mt-1`}
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span
                          className={`font-medium text-sm ${index === 0
                              ? 'text-blue-600'
                              : 'text-green-600'
                            }`}
                        >
                          {size.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Otros Espacios full-width row */}
          <div className="mt-12">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-200">
              {/* Header */}
              <div
                className={`flex items-center gap-3 mb-6 p-3 ${otrosCategory.iconColor} rounded-lg`}
              >
                <Expand className={`w-6 h-6 ${otrosCategory.textColor}`} />
                <h3 className={`text-xl font-bold ${otrosCategory.textColor}`}>
                  {otrosCategory.category}
                </h3>
              </div>

              {/* Sizes */}
              <div className="space-y-4">
                {otrosCategory.sizes.map((size, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedSize(size)}
                    className="relative border-2 border-gray-100 rounded-lg p-5 hover:shadow-lg transition cursor-pointer group hover:border-orange-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-orange-600 group-hover:underline">
                          {size.size}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {size.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 mt-1" />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-medium text-sm text-orange-600">
                        {size.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end Otros Espacios */}
        </div>
      </section>
    </div>
  );
};

export default SizeComparisonSection;