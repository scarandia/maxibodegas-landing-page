import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StorageExplanation from '../components/StorageExplanation'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import SizeComparison from '../components/SizeComparison'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GallerySection from '../components/GallerySection'

import ScrollingWAIcon from '../components/ScrollingWAIcon'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <StorageExplanation />
            <AboutUs />
            <Features />
            <SizeComparison />
            <GallerySection />
            <Contact />
            <Footer />

            <ScrollingWAIcon/>
        </>
    )
}

export default Home