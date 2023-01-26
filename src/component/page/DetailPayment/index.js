import React from 'react';
import Navbar from '../HomePage/navbar';
import Footer from '../HomePage/footer';
import BackSign from '../fi_arrow-left.png';
import Rectangle36 from '../Rectangle_36.jpg'
import './style.css';
import { Link } from 'react-router-dom';

export const DetailPayment = () => {
  return (
    <div className='first-wrapper'>
    <Navbar />
      <div className='main-wrapper'>
          

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

              <div className='container'>
                <div className='row'>

                    <div className='col-lg-3 col-md-6'>
                      <div className='tipe-mobil'>
                        <p className='judul-detail-mobil'>Tipe Mobil</p>
                        <p className='deskripsi-detail-mobil'>Innova</p>
                      </div> 
                    </div>

                    <div className='col-lg-3 col-md-6'>
                      <div className='kategori-mobil'>
                        <p className='judul-detail-mobil'>Kategori</p>
                        <p className='deskripsi-detail-mobil'>1-2 Orang</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                      <div className='tanggal-mulai'>
                        <p className='judul-detail-mobil'>Tanggal Mulai Sewa</p>
                        <p className='deskripsi-detail-mobil'>1 - 2 Agustus</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                      <div className='tanggal-akhir'>
                        <p className='judul-detail-mobil'>Tanggal Akhir Sewa</p>
                        <p className='deskripsi-detail-mobil'>1 - 2 September</p>
                      </div>
                    </div>

                </div>
              </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>

            <div className='col-lg-8 col-md-12 mb-2'>
              <div className='card'>
                <div className='kotak-pembayaran'>
                  <h5 className='menu-pembayaran'>Pilih Bank Transfer</h5>
                  <p className='desk-menu-pembayaran'>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>

                  <div className='tipe-bank'>
                    <p className='bni-bank'>BCA</p>
                    <p className='desk-bank desk-menu-pembayaran'>BCA Transfer</p>
                  </div>

                  <div className='tipe-bank'>
                    <p className='bni-bank'>BNI</p>
                    <p className='desk-bank desk-menu-pembayaran'>BNI Transfer</p>
                  </div>

                  <div className='tipe-bank'>
                    <p className='bni-bank'>BRI</p>
                    <p className='desk-bank desk-menu-pembayaran'>BRI Transfer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <div className='card'>
                <div className='deskripsi-pesanan'>
                  <h5 className='menu-pembayaran'>Nama Mobil</h5>
                  <p className='pesanan-kategori'>Kategori</p>
                  <div className='deskripsi-total'>
                      <p>Total</p>
                      <p>Rp.35000</p>
                  </div>
                  <p className='menu-pembayaran'>Harga</p>
                  <div className='deskripsi-total'>
                    <p className='desk-menu-pembayaran'>Sewa Mobil Rp.500.000 x 7 Hari</p>
                    <p>Rp.35000</p>
                  </div>

                  <p className='menu-pembayaran'>Biaya Lainya</p>
                  <div className='deskripsi-total'>
                    <p className='desk-menu-pembayaran'>Pajak</p>
                    <p>Termasuk</p>
                  </div>

                  <p className='menu-pembayaran'>Belum Termasuk</p>
                  <p className='desk-menu-pembayaran'>Bensin</p>
                  <p className='desk-menu-pembayaran'>Tol Dan Parkir</p>

                  <div className='deskripsi-total'>
                    <p className='menu-pembayaran'>Total</p>
                    <p>Rp.233333</p>
                  </div>

                    <Link to='/pembayaran-selanjutnya'>
                      <button className='btn btn-success w-100 menu-pembayaran'>Bayar</button>
                    </Link>

                </div>
              </div>
            </div>
        </div>
      </div>
    
      <Footer />
    </div>

  )
}
