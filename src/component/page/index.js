import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rectangle36 from './Rectangle_36.jpg';
import BackSign from './fi_arrow-left.png';
import Check from './check.svg';
import Copy from './copy.svg';


const PaymentCustomer = () => {
    
    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate()

    const handleConfirm = () => {
        setConfirm(true);
    }

    const handleUpload = () => {
        setConfirm(false)
    }

    
  return (
    
    <div className='wrapper-payment-1'>
        
            <div className='top-navbar'>
                <div className='container'>
                    
                        <div className='top-button-navbar'>
                            <div className='top-button-back'>
                                <div className='top-button-sign'>
                                    <img src={BackSign} />
                                    <a>BCA Transfer</a>
                                </div>
                                <p className='ms-4'>Order ID: 123</p>
                            </div>
                            <div className='top-button-ahead'>
                                <img className='sign' src={Check}/>
                                <p>Pilih Metode</p>
                                <img src={Rectangle36} />
                                <p className='payment-step-1'>2</p>
                                <p>Bayar</p>
                                <img src={Rectangle36} />
                                <p className='payment-step-2'>1</p>
                                <p>Tiket</p>
                            </div>
                        </div>
                    
                </div>
            </div>

            <div className='container'>
                <div className='row'>

                    <div className='col-lg-12'>
                        <div className='card mb-2'>
                            <div className='kelas-pembayaran'>
                                <div className='bagian1-kelas-pembayaran'>
                                    <p className='judul'>Lakukan Pembayaran Sebelum</p>
                                    <p className='judul-1'>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                                </div>
                                <div className='bagian2-kelas-pembayaran'>

                                </div>
                            </div>
                        </div>
                    </div>


                    

                    <div className='col-lg-12'>
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
                    </div>

                    <div className='col-lg-12'>
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

                    <div className='col-lg-12'>
                        <div className='card mb-5'>
                            <div className='kelas-pembayarankanan'>
                                <p className='judul-kanan'>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>

                                {
                                    confirm ? (
                                        <>
                                            <p className='judul-kanan'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>

                                            <p className='judul-kanan'>Upload Bukti Pembayaran</p>

                                            <p className='judul-kanan'>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>

                                            <input className='masukan-buktitf' type='file' />

                                            <button className='btn btn-success w-100' onClick={handleUpload}>Upload</button>
                                        </>
                                    ) : <button className='btn btn-success w-100 tombol-kanan' onClick={handleConfirm}>Konfirmasi Pembayaran</button>
                                }

                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
    </div>
    
  )
}


export default PaymentCustomer;