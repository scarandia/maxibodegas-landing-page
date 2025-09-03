import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuIcon, XIcon } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%] bg-white shadow-lg rounded-xl px-6 md:px-16 py-3 flex items-center justify-between transition-all duration-300">
      {/* Logo dinámico */}
      <Link to='/' className='flex-shrink-0 transition-all duration-300'>
        <img
          src={scrolled ? '/Logo/logo-mini.png' : '/Logo/logo.png'}
          alt="Logo"
          className={`transition-all duration-300 ${scrolled ? 'h-12 opacity-90' : 'h-18 opacity-100'}`}
        />
      </Link>

      {/* Navegación */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col
        md:flex-row items-center max-md:justify-center gap-6 md:gap-12 min-md:px-8 py-3 max-md:h-screen
        min-md:rounded-full overflow-hidden transition-[width] duration-300 ${
          isOpen ? 'max-md:w-full' : 'max-md:w-0'
        }`}
      >
        <XIcon
          className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Enlaces con animación */}
        <Link
          to='/'
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Inicio
        </Link>

        <Link
          to='/'
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Calcula Tu Espacio
        </Link>

        <Link
          to='/'
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Sobre Nosotros
        </Link>

        <Link
          to='/'
          onClick={() => { scrollTo(0, 0); setIsOpen(false) }}
          className="relative transition text-gray-700 hover:text-blue-700 after:content-[''] after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
        >
          Contactos
        </Link>
      </div>

      {/* Botón de menú para móvil */}
      <MenuIcon
        className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  )
}

export default Navbar
