import React from 'react'
import Navbar from '../HomePage/navbar';
import Footer from '../HomePage/footer';
import Rectangle36 from '../Rectangle_36.jpg';
import BackSign from '../fi_arrow-left.png';
import './style.css';

export const DetailPayment1 = () => {
  return (
    <div className='wrapper-payment-1'>
        
        <Navbar />
        
            <div className='top-navbar'>
                <div className='container'>
                    
                        <div className='top-button-navbar'>
                            <div className='top-button-back'>
                                <div className='top-button-sign'>
                                    <img src={BackSign} />
                                    <a>BCA Transfer</a>
                                </div>
                                <p>Order ID: 123</p>
                            </div>
                            <div className='top-button-ahead'>
                                <p className='payment-step-1'>1</p>
                                <p>Pilih Metode</p>
                                <img src={Rectangle36} />
                                <p className='payment-step-1'>2</p>
                                <p>Bayar</p>
                                <img src={Rectangle36} />
                                <p className='payment-step-1'>1</p>
                                <p>Tiket</p>
                            </div>
                        </div>
                    
                </div>
            </div>
        <Footer />
    </div>
  )
}
