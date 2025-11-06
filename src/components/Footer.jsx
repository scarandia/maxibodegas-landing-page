import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16 lg:px-24">

            {/* SEO / Meta Tags */}
            <Helmet>
                <title>Maxibodegas | Soluciones de Almacenamiento en Santa Cruz</title>
                <meta
                    name="description"
                    content="Maxibodegas ofrece soluciones de almacenamiento seguras, flexibles y estratégicas en Santa Cruz de la Sierra, Bolivia. Contáctanos y descubre nuestros espacios desde 9m² hasta 115m²."
                />

                {/* Open Graph */}
                <meta property="og:title" content="Maxibodegas | Soluciones de Almacenamiento" />
                <meta property="og:description" content="Espacios de almacenamiento seguros, flexibles y estratégicos en Santa Cruz de la Sierra, Bolivia." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.maxibodegas.com.bo/" />
                <meta property="og:image" content="https://www.maxibodegas.com.bo/og-image.jpg" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Maxibodegas | Soluciones de Almacenamiento" />
                <meta name="twitter:description" content="Espacios de almacenamiento seguros y flexibles en Santa Cruz de la Sierra, Bolivia." />
                <meta name="twitter:image" content="https://www.maxibodegas.com.bo/og-image.jpg" />
            </Helmet>

            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            Maxi<span className="text-green-400">Bodegas</span>
                        </h3>
                        <p className="text-gray-400">
                            Soluciones de almacenamiento confiables para negocios y hogares desde 2010.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.facebook.com/MaxiBodegasBo" className="text-gray-400 hover:text-blue-400 transition"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/maxibodegas.bo/" className="text-gray-400 hover:text-blue-400 transition"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://bo.linkedin.com/company/maxibodegas" className="text-gray-400 hover:text-blue-400 transition"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://www.tiktok.com/@maxibodegas.bo" className="text-gray-400 hover:text-blue-400 transition"
                                target="_blank" rel="noopener noreferrer"
                            >
                                <FaTiktok className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Inicio</a></li>
                            <li><a href="#storageExplanation" className="text-gray-400 hover:text-blue-400 transition">Nuestras Bodegas</a></li>
                            <li><a href="#sizeComparison" className="text-gray-400 hover:text-blue-400 transition">Tamaños y Precios</a></li>
                            <li><a href="#gallerySection" className="text-gray-400 hover:text-blue-400 transition">Galería Corporativa</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition">Contáctanos</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contacto</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-400">
                                    Av. Clara Cuta 707<br />
                                    Santa Cruz de la Sierra, Bolivia
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <a href="tel:+59170111166" className="text-gray-400 hover:text-blue-400 transition">+591 70111166</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <a href="mailto:info@maxibodegas.com.bo" className="text-gray-400 hover:text-blue-400 transition">info@maxibodegas.com.bo</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} MaxiBodegas. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;