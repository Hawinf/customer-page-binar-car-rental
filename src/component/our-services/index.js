import './services.css';
import Services from '../images/img_service.png';
import Group from '../images/Group.png'

const OurServices = () => {
    return (
        <main className="our-services" id='ourservices'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
              <div className="foto-services">
                <img src={Services} alt="Services" />
              </div>
          </div>
          <div className="col-lg-5">
            <div className="tentang-services">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <div className="tentang-detail">
                <img src={Group} alt="" />
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </div>
              <div className="tentang-detail">
                <img src={Group} alt="" />
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </div>
              <div className="tentang-detail">
                <img src={Group} alt="" />
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </div>
              <div className="tentang-detail">
                <img src={Group} alt="" />
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </div>
              <div className="tentang-detail">
                <img src={Group} alt="" />
                <p>Layanan Airport Transfer / Drop In Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </main>
    )
}

export default OurServices