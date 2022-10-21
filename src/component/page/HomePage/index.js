import Navbar from "./navbar"
import HeroSection from "./hero-section"
import MulaiSewa from "./mulaisewa"
import WhyUs from "./why-us"
import FaqSection from "./faqsection"
import Footer from './footer'
import Testimonial from './testimonials'




const HomePage = () => {
    return(
        <div className='homepage'>
            <Navbar />
            <HeroSection />
            <MulaiSewa />
            <WhyUs />
            <Testimonial />
            <FaqSection />
            <Footer />
        </div>
    )
}

export default HomePage