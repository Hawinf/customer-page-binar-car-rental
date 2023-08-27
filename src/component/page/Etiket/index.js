import React from 'react'
import Navbar from '../HomePage/navbar'
import Footer from '../HomePage/footer'
import BackSign from '../fi_arrow-left.png'
import Rectangle36 from '../Rectangle_36.jpg'
import Check from '../check.svg'
import FiDownload from '../fi_download.png'
import Success from '../success.png'
import Rectangle38 from '../Rectangle38.png'
import './style.css'

export const EtiketPage = () => {
  return (
    <>
        <Navbar />
        <div className='pembungkus'>
            <div className='container'>
                <div className='wrapper-etiket'>
                    <div className='wrapper-kiri'>
                        <div className='baris-1'>
                            <img className='back-sign' src={BackSign} />
                        </div>
                        <div className='baris-2'>
                            <h5 className='judul-tiket'>Tiket</h5>
                            <p className='order-id'>Order ID</p>
                        </div>
                    </div>
                    <div className='wrapper-kanan'>

                        <img src={Check} className='side-img'/>
                        <p className='kanan-judul'>Pilih Mode</p>
                        <img src={Rectangle36} className='line-img'/>

                        <img src={Check} className='side-img'/>
                        <p className='kanan-judul'>Bayar</p>
                        <img src={Rectangle36} className='line-img'/>
                        {/* <p className='langkah-ketiga'>3</p> */}
                        <img src={Check} className='side-img'/>
                        <p className=''>Tiket</p>

                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='pembayaran-berhasil'>
                <div className='pembayaran-tengah'>
                    <img className='logo-berhasil' src={Success}/>
                    <h5 className='judul-pembayaran'>Pembayaran Berhasil!!!</h5>
                    <p className='pembayaran-invoce'>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </div>
                
                <div className='col-lg-8 offset-lg-2'>
                    <div className='card'>
                        <div className='pembungkus-berhasil'>
                            <div className='judul-invoice'>
                                <h5 className='invoice-1'>Invoice</h5>
                                <p className='invoice-2'>*no invoice</p>
                            </div>
                            <div className='unduh'>
                                <img src={FiDownload} className='logo-unduh'/>
                                <p className='unduh-1'>Unduh</p>
                            </div>
                        </div>

                        <div className='download-buktitf'>
                            <img src={Rectangle38} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer />
    </>
  )
}
