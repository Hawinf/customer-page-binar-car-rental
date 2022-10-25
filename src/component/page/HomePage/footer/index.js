import './footer.css';
import Facebook from '../images/icon_facebook.png';
import Instagram from '../images/icon_instagram.png';
import Twiter from '../images/icon_twitter.png';
import Mail from '../images/icon_mail.png';
import Twit from '../images/icon_twitch.png';
import Rectangle from '../images/logo.png'


const Footer = () => {
    return (
        <div className="footer">
        <div className="container">
            <div className="row">

                <div className="col-lg-3 col-md-12">
                    <div className="footer-1">
                        <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
                        <h5>binarcarrental@gmail.com</h5>
                        <h5>081-233-334-808</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-12">
                    <div className="footer-2">
                        <a href="#our-services">Our services</a>
                        <a href="#why">Why Us</a>
                        <a href="#testimonial">Testimonial</a>
                        <a href="#faq">FAQ</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-12">
                    <div className="footer-3">
                        <h5>Connect with us</h5>
                        <div className="footer-3-sosmed" >
                            <img src={Facebook} alt="" />
                            <img src={Instagram} alt="" />
                            <img src={Twiter} alt="" />
                            <img src={Mail} alt="" />
                            <img src={Twit} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-12">
                    <div className="footer-4">
                        <h5>Copyright Binar 2022</h5>
                        <a href={'/'} >
                            <img src={Rectangle} alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Footer