import React from 'react';
import Navbar from '../HomePage/navbar';
import BackSign from '../fi_arrow-left.png';
import Rectangle36 from '../Rectangle_36.jpg'
import './style.css';

export const DetailPayment = () => {
  return (
    <>
      <div className='main-wrapper'>
          <Navbar />

          <div className='container'> 
            <div className='wrapper-detail-payment'>
                <div className='wrapper-pembayaran-right'>
                    <img src={BackSign} />
                    <a href='/cari-mobil' className='button-back'>Pembayaran</a>
                </div>
                <div className='wrapper-pembayaran-left'>
                  <div className='method-payment'>
                    <p className='payment-step-1'>1</p>
                    <p>Pilih Metode</p>
                    <img src={Rectangle36} />
                  </div>
                  <div className='method-payment'>
                    <p className='payment-step'>2</p>
                    <p>Bayar</p>
                    <img src={Rectangle36} />
                  </div>
                  <div className='method-payment'>
                    <p className='payment-step'>3</p>
                    <p>Tiket</p>
                  </div>
                </div>
            </div>
          </div>

      </div>

      <div className='container'>
        <div className='detail-order'>
          <div className='card'>
              <div className='card-detail'>
                <p className='judul-detail'>Detail Pesananmu</p>
              </div>
          </div>
        </div>
      </div>

    </>
  )
}
