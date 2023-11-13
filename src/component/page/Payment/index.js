import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../HomePage/navbar';
import Footer from '../HomePage/footer';
import Rectangle36 from '../Rectangle_36.jpg';
import BackSign from '../fi_arrow-left.png';
import Check from '../check.svg';
import Copy from '../copy.svg';
import Countdown from 'react-countdown';
import './style.css'
import axios from 'axios';

const PaymentCustomer = () => {
    // Navigate = useNavigate();
    const [file, setFile] = useState(null);
    const {id} = useParams();
    const Navigate = useNavigate();
    
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate()

    const handleConfirm = () => {
        setConfirm(true);
    }

    const handleImage = (e) => {
        setFile(e.target.files[0]);
    }

    // const handleUpload = () => {

    //     const token = localStorage.getItem('token');
    //         const config = {
    //             header: {
    //                 access_token: token,
    //             },
    //     };

    //     const formData = new FormData();
    //         formData.append('slip', file)

    //     axios
    //         .put(`https://api-car-rental.binaracademy.org/customer/order/${id}/slip`, config, formData)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => console.log(err))
    // }
    // start
    const handleUpload = () => {
        const config = {
          headers: {
            access_token: localStorage.getItem("token"),
          },
        };
    
        const formData = new FormData();
        formData.append("slip", file);
        
        // Old version API Link
        // https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}
        axios
          .put(`https://api-car-rental.binaracademy.org/customer/order/${id}/slip`, formData, config)
          .then((res) => {
            console.log(res)
            setFile(res.data.slip);
            Navigate(`/payment-confirmed/${id}`)
          })
          .catch((err) => console.log(err.message));
      };
    // end

    console.log(id,'kiri id',  'kanan slip',file)

    // handle the countdown
    const Completionist = () => <span>Payment Failed</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist /> ;
                // Navigate('/')

        } else {
          // Render a countdown
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };

    
  return (
        <div>
            <Navbar />

                <div className='main-wrapper'>
                        <div className='container'> 
                            <div className='wrapper-detail-payment'>
                                <div className='wrapper-pembayaran-right'>
                                    <img src={BackSign} />
                                    <a href={`/payment/${id}`} className='button-back'>BCA Transfer</a>
                                </div>
                                <div className='wrapper-pembayaran-left'>
                                <div className='method-payment'>
                                    <p className='payment-step-1'>1</p>
                                    <p>Pilih Metode</p>
                                    <img src={Rectangle36} />
                                </div>
                                <div className='method-payment'>
                                    <p className='payment-step-1'>2</p>
                                    <p>Bayar</p>
                                    <img src={Rectangle36} />
                                </div>
                                <div className='method-payment'>
                                    <p className='payment-step'>3</p>
                                    <p>Tiket</p>
                                </div>
                                </div>
                            </div>
                            <div className='order-id'>
                                <p className='order-number'>Your Order ID : {id}</p>
                            </div>
                        </div>
                    </div>

                <div className='container'>
                    <div className='main-content'>
                            <div className='content-left'>

                                <div className='card mb-2'>
                                    <div className='kelas-pembayaran'>
                                        <div className='bagian1-kelas-pembayaran'>
                                            <p className='judul'>Lakukan Pembayaran Sebelum</p>
                                            <p className='judul-1'>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                                        </div>
                                        <div className='bagian2-kelas-pembayaran'>
                                        <Countdown
                                            date={Date.now() + 100000}
                                            renderer={renderer}
                                        />,
                                        </div>
                                    </div>
                                </div>

                                <div className='card mb-2'>
                                    <div className='lakukan-transfer'>
                                        <p className='judul-lakukan-transfer'>Lakukan Transfer Ke</p>

                                        <div className='lakukan-transfer-bank'>
                                            <div className='opsi-1'>
                                                <p className='font'>BCA</p>
                                            </div>
                                            <div className='opsi-2'>
                                                <p className='font-1'>BCA Transfer</p>
                                                <p className='font-1'>a.n Binar Car Rental</p>
                                            </div>
                                        </div>

                                        <div className='copas-thecode'>
                                            <p className='title'>Nomor Rekeninng</p>
                                            <div className='copy-thecode'>
                                                <p className='detail-thecode'>14521</p>
                                                <img src={Copy} />
                                            </div>

                                            <p className='title'>Total Bayar</p>
                                            <div className='copy-thecode'>
                                                <p className='detail-thecode'>14521</p>
                                                <img src={Copy} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='card mb-2'>
                                    <div className='instruksi-pembayaran'>
                                        <h5 className='upside'>Instruksi Pembayaran</h5>
                                        <div className='cara2pembayaran'>
                                            <p className='cara-1'>ATM BCA</p>
                                            <p className='cara-2'>M-BCA</p>
                                            <p className='cara-2'>BCA Klik</p>
                                            <p className='cara-2'>Internet Banking</p>
                                        </div>
                                        <p className='langkahpembayaran'>Masukan kartu ATM, lalu PIN</p>
                                        <p className='langkahpembayaran'>Pilih menu kemudian transfer </p><p className='langkahpembayaran'>Lakukan saja apa yang anda lakukan</p><p className='langkahpembayaran'>Sekarepmu dewe</p>
                                    </div>
                                </div>

                            </div>
                            <div className='content-right'>

                                <div className='card mb-5'>
                                    <div className='kelas-pembayarankanan'>
                                        <p className='judul-kanan'>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>

                                        {
                                            confirm ? (
                                                <>
                                                    <p className='judul-kanan'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                                                    <p className='judul-kanan'>Upload Bukti Pembayaran</p>
                                                    <p className='judul-kanan'>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                                                    <input className='masukan-buktitf' type='file' onChange={handleImage} />
                                                    <button className='btn btn-success w-100' onClick={handleUpload}>Upload</button>
                                                </>
                                            ) : <button className='btn btn-success w-100 tombol-kanan' onClick={handleConfirm}>Konfirmasi Pembayaran</button>
                                        }

                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </div>
  )
}


export default PaymentCustomer;