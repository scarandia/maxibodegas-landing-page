import React, { useState, useEffect } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    setIsOpen(false)
    const section = document.getElementById(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%] bg-white shadow-lg rounded-xl px-6 md:px-16 py-3 flex items-center justify-between transition-all duration-300">
      {/* Logo dinámico */}
      <a href="#" className="flex-shrink-0 transition-all duration-300">
        <img
          src={scrolled ? '/Logo/logo-mini.png' : '/Logo/logo.png'}
          alt="Logo"
          className={`transition-all duration-300 ${scrolled ? 'h-12 opacity-90' : 'h-18 opacity-100'}`}
        />
      </a>

      {/* Navegación */}
      <div
        className={`
          max-md:fixed max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-full
          max-md:bg-white max-md:flex max-md:flex-col max-md:items-center max-md:justify-center
          max-md:transition-transform max-md:duration-300 max-md:ease-in-out
          ${isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'}

          md:flex md:flex-row md:items-center md:justify-between
          gap-6 md:gap-12
          z-50
        `}
      >
        <XIcon
          className="md:hidden absolute top-6 right-6 w-7 h-7 text-gray-800 cursor-pointer"
          onClick={() => setIsOpen(false)}
        />

        {/* Enlaces con animación */}
        <a
          href="#heroSection"
          onClick={(e) => handleSmoothScroll(e, 'heroSection')}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Inicio
        </a>

        <a
          href="#sizeComparison"
          onClick={(e) => handleSmoothScroll(e, 'sizeComparison')}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Elige Tu Espacio
        </a>

        <a
          href="#gallerySection"
          onClick={(e) => handleSmoothScroll(e, 'gallerySection')}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Nuestras Instalaciones
        </a>

        <a
          href="#contact"
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Contactos
        </a>
      </div>

      {/* Botón de menú móvil */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  )
}

export default Navbar