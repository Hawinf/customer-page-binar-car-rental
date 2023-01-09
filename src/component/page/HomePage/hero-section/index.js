import { useLocation } from 'react-router-dom';
import './hero-section.css';
import herofoto from '../images/img_car.png';

const HeroSection = () => {

  const location = useLocation();
  console.log('ini pathname', location.pathname)
  const show = location.pathname === '/' ? true : false
  console.log(show)

    return (
    <div className="heroSection">
        <div className="container">
        <div className="col-lg-6">
            <div className="hero-teks">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>

            {
              show ? (
                <a href={'/cari-mobil'} className="btn btn-success">Mulai Sewa Mobil</a>
              ) : null
            }

             



            </div>
          </div>
        </div>
        <div className='hero-foto'>
          <img src={herofoto} alt="BCR" />
        </div>
    </div>
    )
}

export default HeroSection
