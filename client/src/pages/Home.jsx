import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StorageExplanation from '../components/StorageExplanation'
import Features from '../components/Features'
import SizeComparison from '../components/SizeComparison'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GallerySection from '../components/GallerySection'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <StorageExplanation />
            
            <Features />
            <SizeComparison />
            <GallerySection />
            <Contact />
            <Footer />
        </>
    )
}

export default Home