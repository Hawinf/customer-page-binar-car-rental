import React, { useState } from 'react'
import Rectangle36 from '../Rectangle_36.jpg';
import BackSign from '../fi_arrow-left.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../HomePage/navbar';
import Footer from '../HomePage/footer';
import './style.css'
import axios from 'axios';
import { useEffect } from 'react';
// import mo

export const Payment = () => {
    const [detail, setDetail] = useState({});
    const [detailOrder, setDetailOrder] = useState({});
    const {id} = useParams()
    

    console.log(id, 'ini order id')
    console.log(detail, 'ini detail')

    // const getDetailOrder = () => {
    //   const token = localStorage.getItem('token');

    //   const config = {
    //     headers: {
    //         access_token: token,
    //     }
    //   }

    //   axios
    //         .get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, config)
    //         .then((res) => {
    //             console.log(res,'detailsOrder')
                
    //         })
    //         .catch((err) => console.log(err.message))
    // }



    useEffect(() => {
      // getDetailOrder();
      const token = localStorage.getItem('token');

      const config = {
        headers: {
            access_token: token,
        }
      }

      axios
            .get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, config)
            .then((res) => {
                console.log(res.data)
                setDetail(res.data.Car)
                setDetailOrder(res.data)
            })
            .catch((err) => console.log(err.message))

    },[])
    
    

  return (
    <>
    <Navbar />
    <div className='first-wrapper'>
    
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

    {
      !detail.length && !detailOrder.length ?
        (
// detail awal
        <div className='container'>
          <div className='detail-order'>
            <div className='card mt-4'>
              <div className='card-detail'>
                <p className='judul-detail'>Detail Pesananmu</p>
              </div>

              <div className='container'>
                <div className='row'>
                
                    <div className='col-lg-3 col-md-6'>
                      <div className='tipe-mobil'>
                        <p className='judul-detail-mobil'>Tipe Mobil</p>
                        <p className='deskripsi-detail-mobil'>{detail.name}</p>
                      </div> 
                    </div>

                    <div className='col-lg-3 col-md-6'>
                      <div className='kategori-mobil'>
                        <p className='judul-detail-mobil'>Kategori</p>
                        <p className='deskripsi-detail-mobil'>{detail.category}</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                      <div className='tanggal-mulai'>
                        <p className='judul-detail-mobil'>Tanggal Mulai Sewa</p>
                        <p className='deskripsi-detail-mobil'>{detailOrder.start_rent_at}</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                      <div className='tanggal-akhir'>
                        <p className='judul-detail-mobil'>Tanggal Akhir Sewa</p>
                        <p className='deskripsi-detail-mobil'>{detailOrder.finish_rent_at}</p>
                      </div>
                    </div>

                </div>
              </div>
          </div>
        </div>
      </div>
// detail akir
        ) : null
    }
      

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
                  
                  {
                    !detail.length ? 
                      <>
                        <h5 className='menu-pembayaran'>{detail.name}</h5>
                        <p className='pesanan-kategori'>{detail.category}</p> 
                      </>
                    : null
                  }
                  
                  <div className='deskripsi-total'>
                      <p>Total</p>
                      {
                        !detailOrder.length ? <p className='menu-pembayaran'>{detailOrder.total_price}</p> : null
                      }
                  </div>
                  <p className='menu-pembayaran'>Harga</p>
                  <div className='deskripsi-total'>
                    {
                      !detail.length ? <p className='desk-menu-pembayaran'>Sewa Mobil {detail.price} x Total Hari Sewa</p> : null
                    }
                    
                    {
                      !detailOrder.length ? <p className='menu-pembayaran'>{detailOrder.total_price}</p> : null
                    }
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
                    {
                      !detailOrder.length ? <p className='menu-pembayaran'>{detailOrder.total_price}</p> : null
                    }
                  </div>

                    <Link to={`/payment-complete/${id}`}>
                      <button className='menu-pembayaran btn btn-success w-100'>Bayar</button>
                    </Link>

                </div>
              </div>
            </div>
        </div>
      </div>
    
      
    </div>
    <Footer />
    </>
  )
}


// export const Payment = () => {
//   const {id} = useParams();
//   console.log(id, 'ini order id')

//       useEffect(() => {
//       // getDetailOrder();
//       const token = localStorage.getItem('token');

//       const config = {
//         headers: {
//             access_token: token,
//         }
//       }

//       axios

//             .get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, config)
//             .then((res) => {
//                 console.log(res)
//             })
//             .catch((err) => console.log(err.message))

//     },[])

//   return (
//     <div>
//       <h1>Payment</h1>
//     </div>
//   );
// };

