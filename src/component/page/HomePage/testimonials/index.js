import React, { Component } from "react";
import Slider from "react-slick";
import './testi.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../images/img_photo.png';
import img2 from '../images/img_photo1.png';
import Rate from '../images/Rate.png';
import Left from './leftbutton.png';
import Right from './rightbutton.png';
import {Card, Row, Col} from "react-bootstrap";



  

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      // responsive: [
      //   {
      //       breakpoint: 600,
      //       settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       initialSlide: 1}
      //   }
      // ]
    };

    return (
      <>

        <div className="container">
          <div className="testimonials">
            <h1 className="testi-judul">Testimonial</h1>
            <p className="testi-deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </div>

        <div className="container-fluid">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <Row>
              <Col lg={12}>
                
                  <Card>
                    <div className="testi">
                      <Card.Body className="card-testi">
                        <div className="card_kiri">
                          <img src={img1} alt="" />
                        </div>
                        <div className="card_kanan">
                          <div className="faq-icon mb-2">
                            <img src={Rate} alt="" />
                          </div>
                          <p className="kanan-desk">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod”
                          </p>
                          <p className="kanan-penulis">John Dee 32, Bromo</p>
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <div className="testi">
                    <Card.Body className="card-testi">
                      <div className="card_kiri">
                        <img src={img2} alt="" />
                      </div>
                      <div className="card_kanan">
                        <div className="faq-icon mb-2">
                          <img src={Rate} alt="" />
                        </div>
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem ipsum
                          dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="kanan-penulis">John Dee 32, Bromo</p>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <div className="testi">
                    <Card.Body className="card-testi">
                      <div className="card_kiri">
                        <img src={img1} alt="" />
                      </div>
                      <div className="card_kanan">
                        <div className="faq-icon mb-2">
                          <img src={Rate} alt="" />
                        </div>
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem ipsum
                          dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="kanan-penulis">John Dee 32, Bromo</p>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <div className="testi">
                    <Card.Body className="card-testi">
                      <div className="card_kiri">
                        <img src={img2} alt="" />
                      </div>
                      <div className="card_kanan">
                        <div className="faq-icon mb-2">
                          <img src={Rate} alt="" />
                        </div>
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem ipsum
                          dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="kanan-penulis">John Dee 32, Bromo</p>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </Slider>
          <div style={{textAlign: "center", margin: "20px"}}>
            <button className="btnprev">
              <img src={Left} alt="" onClick={this.previous} />
            </button>
            <button className="btnnext">
              <img src={Right} alt="" onClick={this.next} />
            </button>
          </div>
        </div>
      </>
    );
  }
}























