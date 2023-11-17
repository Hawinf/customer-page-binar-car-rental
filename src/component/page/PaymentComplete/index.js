import React, { useState } from 'react'
import Rectangle36 from '../Rectangle_36.jpg';
import BackSign from '../fi_arrow-left.png';
import Check from '../check.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../HomePage/navbar';
import Footer from '../HomePage/footer';
import './style.css'
import axios from 'axios';
import { useEffect } from 'react';
import moment from 'moment';


export const Payment = () => {
    const [detail, setDetail] = useState({});
    const [detailOrder, setDetailOrder] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [bca, setBca] = useState(false);
    const [bri, setBri] = useState(false);
    const [bni, setBni] = useState(false);
    const [bayar, setBayar] = useState(false);
    const [pilihBank, setPilihBank] = useState(false);
    const {id} = useParams();

    const momentDate = moment(startDate);
    const formattedDate = momentDate.format('DD-MM-YYYY');

    const momentDate1 = moment(endDate);
    const formattedDate1 = momentDate1.format('DD-MM-YYYY');

    const total = localStorage.getItem('perhari');
    const totalFormat = total.toLocaleString("en-US");
    console.log(totalFormat, 'ini perhari bos');

    const handleBca = () => {
      setBca(true);
      setBri(false);
      setBni(false)
      setBayar(true);
      setPilihBank(false);
      localStorage.setItem('BCA', bca)
    }
    const handleBri = () => {
      setBri(true);
      setBca(false);
      setBni(false);
      setBayar(true);
      setPilihBank(false);
    }
    const handleBni = () => {
      setBni(true);
      setBca(false);
      setBri(false);
      setBayar(true);
      setPilihBank(false);
    }
    const handleBayar = () => {
      if(handleBca && handleBni && handleBri == false) {
        return 'Pilih Bank Pembayaran'
      } else {
        setBayar(true)
      }
    }
    const handleBank = () => {
      setPilihBank(true)
    }

    useEffect(() => {
      // setDetailOrder(moment(detailOrder));
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
                console.log(res.data.Car);
                setDetail(res.data.Car);
                setDetailOrder(res.data);
                setStartDate(res.data.start_rent_at);
                setEndDate(res.data.finish_rent_at);
                localStorage.setItem('perhari', res.data.Car.price)
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
                        <p className='deskripsi-detail-mobil'>{formattedDate}</p>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6'>
                      <div className='tanggal-akhir'>
                        <p className='judul-detail-mobil'>Tanggal Akhir Sewa</p>
                        <p className='deskripsi-detail-mobil'>{formattedDate1}</p>
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
                  {
                    pilihBank ? <p className='perhatian'>Mohon Untuk Memilih Bank Transfer Untuk Melanjutkan Pembayaran</p> : null
                  }
                    {/* <button > */}
                      <div onClick={handleBca} className='tipe-bank'>
                        <p className='bni-bank'>BCA</p>
                        <p className='desk-bank desk-menu-pembayaran'>BCA Transfer</p>
                        {
                          bca ? <img className='ceklist' src={Check} /> : null
                        }
                      </div>
                    {/* </button> */}

                  <div onClick={handleBni} className='tipe-bank'>
                    <p className='bni-bank'>BNI</p>
                    <p className='desk-bank desk-menu-pembayaran'>BNI Transfer</p>
                    {
                          bni ? <img className='ceklist' src={Check} /> : null
                    }
                  </div>

                  <div onClick={handleBri} className='tipe-bank'>
                    <p className='bni-bank'>BRI</p>
                    <p className='desk-bank desk-menu-pembayaran'>BRI Transfer</p>
                    {
                          bri ? <img className='ceklist' src={Check} /> : null
                    }
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
                      {/* <h1>Rp. {detail.price.toLocaleString().replace(/,/g, ".")} / Hari</h1> */}
                      {
                        !detailOrder.length ? <p className='menu-pembayaran'>{detailOrder.total_price}</p> : null
                      }
                  </div>
                  <p className='menu-pembayaran'>Harga</p>
                  <div className='deskripsi-total'>
                    {
                      !detail.length ? <p className='desk-menu-pembayaran'>Sewa Mobil {detail.price}  x Total Hari Sewa</p> : null
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
                    {
                      bayar ?
                      <Link onClick={handleBayar} to={`/payment-complete/${id}`}>
                        <button  className='menu-pembayaran btn btn-success w-100'>Bayar</button> 
                      </Link> : 
                        <button onClick={handleBank}  className='menu-pembayaran-1 btn btn-success w-100'>Pilih Bank Transfer</button> 
                    }
                    

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

