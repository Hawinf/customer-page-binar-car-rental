import React from "react";
import './testi.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../images/img_photo.png';
import img2 from '../images/img_photo1.png';
import Rate from '../images/Rate.png'

const Testimonial = () => {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "200px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            centerMode: false,
            // centerPadding: "0",
            // slidesToShow: 1,
            // slidesToScroll: 3,
            // infinite: true,
            // dots: true,
          },
        },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     initialSlide: 2,
        //     centerMode: false
        // },
        // },
        // {
        // breakpoint: 480,
        // settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 3,
        // },
        // },
  ],
};

return (
    <div className="testimoni-section" id="testimonial">
          <div className="Judul-testimoni">
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
  
    <Slider {...settings}>


            
               
            
                
                  <div className="card-testi d-flex">
                      <div className="card-body">
                        <img src={img1} alt="" />
                      </div>
                      <div className="card-text">
                        <img src={Rate} />
                        <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h2>
                        <p>John Dee 32, Bromo</p>
                      </div>
                  </div>
                

                  <div className="card-testi d-flex">
                    <div className="card-body">
                      <img src={img1} alt="" />
                    </div>
                    <div className="card-text">
                      <img src={Rate} />
                      <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h2>
                      <p>John Dee 32, Bromo</p>
                    </div>
                  </div>

                  <div className="card-testi d-flex">
                    <div className="card-body">
                      <img src={img1} alt="" />
                    </div>
                    <div className="card-text">
                      <img src={Rate} />
                      <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h2>
                      <p>John Dee 32, Bromo</p>
                    </div>
                  </div>

                  <div className="card-testi d-flex">
                    <div className="card-body">
                      <img src={img1} alt="" />
                    </div>
                    <div className="card-text">
                      <img src={Rate} />
                      <h2>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h2>
                      <p>John Dee 32, Bromo</p>
                    </div>
                  </div>


      
          
          
          
        
       
        
      </Slider>
    
      </div>
)};

export default Testimonial;

