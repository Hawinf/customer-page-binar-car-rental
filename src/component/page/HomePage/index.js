import Navbar from "./navbar"
import Services from "./services"
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
            <Services />
            <WhyUs />
            <Testimonial />
            {/* <Slider /> */}
            <MulaiSewa />
            <FaqSection />
            <Footer />
        </div>
    )
}

export default HomePage