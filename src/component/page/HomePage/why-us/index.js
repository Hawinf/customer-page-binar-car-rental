import './why-us.css';
import Complete from '../images/icon_complete.png';
import Price from '../images/icon_price.png';
import Hour from '../images/icon_24hrs.png';
import Professional from '../images/icon_professional.png';


const WhyUs = () => {
    return (
    <div className="why-us" id='why'>
      <div className="container pb-5">

        <div className="col-lg-12" >
          <div className="why-us1">
            <h2>Why Us</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
        </div>

        <div className="row m-auto">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="kotak">
              <img src={Complete} alt="" />
              <h3>Mobil Lengkap</h3>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="kotak">
              <img src={Price} alt="" />
              <h3>Mobil Lengkap</h3>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="kotak">
              <img src={Hour} alt="" />
              <h3>Mobil Lengkap</h3>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div className="kotak">
              <img src={Professional} alt="" />
              <h3>Mobil Lengkap</h3>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        
     </div>
    </div>   
    )
}

export default WhyUs;