import axios from 'axios';
import React,{useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SkipBack } from 'react-feather';
import Footer from '../HomePage/footer'
import Fiuser from './fi_users.png';
import LogoCalender from './fi_calendar.png'
import Navbar from "../HomePage/navbar";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './style.css'
import { Card } from 'reactstrap';


const Detail = () => {
  
  const[detail, setDetail] = useState({});
  const [topembayaran, setToPembayaran] = useState(false);
  const [calendarClick, setCalendarClick] = useState(false);
  let {id} = useParams();

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  // console.log(startDate, endDate)

  // const disabled = () => {
  //   setCalendarClick(true);
  // }

  const navigate = useNavigate()
 
  const handleCalendar = () => {
    // setCalendarClick(false);
    const token = localStorage.getItem('token');
    const config = {
      headers: {
          access_token: token,
      },
  };

    const payload = {
      start_rent_at: startDate,
      finish_rent_at: endDate,
      car_id: id
    }
    axios
    // https://api-car-rental.binaracademy.org/customer/order
      .post('https://api-car-rental.binaracademy.org/customer/order', payload, config)
      .then((res) => {
        // console.log(res)
        navigate(`/payment/${res.data.id}`)
        // localStorage.setItem('token', res.data.access_token)
        // localStorage.setItem('startDate1', res.data.start_rent_at);
        // localStorage.setItem('endDate1', res.data.finish_rent_at)
      })
      .catch((err) => console.log(err.message))
  }
  
  console.log(startDate, endDate)
  
  const baseUrl = 'https://api-car-rental.binaracademy.org';

  const fetch = useRef(true);

  const getDetail = (id) => {
    axios
      .get(`${baseUrl}/customer/car/${id}`)
      .then((response) => {
          console.log(response)
          setDetail(response.data)
      })
    .catch((error) => console.log(error)
    )
  }

  useEffect(() => {
    if(fetch.current) {
      fetch.current = false;
      getDetail(id)
    };
    // console.log(res)
  },[id]);

  const lanjutPembayaran = () => {
    setToPembayaran(true);
  }

  // console.log(getDetail(id))
  // console.log("ini kategori", detail.category)
  
  return (
    <div className='Detail' >
      <Navbar />
        {/* <SkipBack className='icon-back' color="red" size={48} /> */}

        
          <div className='container' >

        <div className='tombol'>
          <a href={'/cari-mobil'} className='btn btn-success'>Kembali ke halaman sebelumnya</a>
        </div>

            <div className='row'>

                <div className='col-lg-7 col-md-12'>
                  <div className='card-1'>
                    <div className='include'>
                      <h2>Tentang Paket</h2>
                      <h2>Include</h2>
                      <p>Apa saja yang termasuk dalam paket misal durasi max 12 jam</p>
                      <p>Sudah termasuk bensin selama 12 jam</p>
                      <p>Sudah Termasuk tiket wisata</p>
                      <p>Sudah termasuk pajak</p>
                    </div>
                    <div className='exclude'>
                      <h2>Exclude</h2>
                      <p>Tidak termasuk biaya makan sopir Rp. 75.000/Hari</p>
                      <p>Jika ada overtime maka akan ada tambahan Rp.20.000/Jam</p>
                      <p>Tidak termasuk akomodasi penginapan</p>
                    </div>
                    <div className='rro'>
                      <h2>Refund, Reschedule,Overtime</h2>
                      <p>Tidak termasuk biaya makan sopir Rp.75.000</p>
                      <p>Jika overtime 12 jam maka akan ada biaya tambahan Rp.20.000/Jam</p>
                      <p>Tidak termasuk biaya akomodasi penginapan</p>
                      <p>Tidak termasuk biaya makan sopir Rp.50.000/Hari</p>
                      <p>Jika overtime 12 jam maka alan ada biaya tambahan Rp.20.000/Jam</p>
                    
                    </div>
                    

                  </div>
                </div>

{/* ini menggunakan kondisi */}
                {
                  Object.keys(detail).length > 0 ? (
                <div className='col-lg-5 col-md-12'>
                  <div className='card-2 '>
                    <img  src={detail.image !== null ? detail.image: "https://placehold.jp/24/cc9999/993333/350x200.png" } className="image" alt="image-error" />
                    <h1>{detail.name}</h1>
                      <div className='kapasitas'>
                        <img src={Fiuser} alt="fiuser" />
                        <p>{detail.category}</p>
                      </div>

                   {/* Dibawah ini calender */}

                      <DatePicker className='w-100' 
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                          setDateRange(update);
                        }}
                        isClearable={true}
                        placeholderText='Pilih tanggal mulai dan tanggal akhir sewa'
                        // onClick={disabled}
                      />

                      <div className='pb-5 d-flex harga'>
                        <h1>Total</h1>
                        <h1>Rp. {detail.price.toLocaleString().replace(/,/g, ".")} / Hari</h1>
                      </div>

                      <div>
                          <button  className='btn btn-success w-100 payment-btn' onClick={handleCalendar}>
                            Lanjutkan Pembayaran
                          </button>
                      </div>
                    </div>
                </div>

                  ) : null
                }

              
            </div>
          </div>
        
        <Footer />
    </div>

    
  )
}

export default Detail