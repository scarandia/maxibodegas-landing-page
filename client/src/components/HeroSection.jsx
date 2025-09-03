import React from 'react'
import HeroInfoCard from './HeroInfoCard'

const HeroSection = () => {



  return (
    <div className="relative h-screen overflow-hidden">
      {/* Blurry background image */}
      <div
        className='absolute inset-0 bg-[url("/BgImg/bg6.png")] bg-cover bg-center'
        style={{ filter: 'blur(1px)' }}
      ></div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Contenedor del contenido */}
      <div className="relative z-10 flex items-center justify-start h-full px-4 md:px-16 lg:px-36">
        <HeroInfoCard />
      </div>
    </div>
  )

}

export default HeroSection