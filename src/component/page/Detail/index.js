import axios from 'axios';
import React,{useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { SkipBack } from 'react-feather';
import Footer from '../HomePage/footer'
import Fiuser from './fi_users.png'
import './style.css'
import { Card } from 'reactstrap';

const Detail = () => {

  
  const[detail, setDetail] = useState({});
  let {id} = useParams();
  console.log(id);
  
  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com';

  const fetch = useRef(true);

  const getDetail = (id) => {
    axios.get(`${baseUrl}/customer/car/${id}`)
    .then((response) => {
      console.log(detail)
      console.log(response.data)
      setDetail(response.data)
    })
    .catch((error) => 
    console.log(error)
    )
  };

  useEffect(() => {
    if(fetch.current) {
      fetch.current = false;
      getDetail(id)
    }
  },[id]);

  return (
    <div className='Detail' >
        {/* <SkipBack className='icon-back' color="red" size={48} /> */}

        
          <div className='container' >

        <div className='tombol'>
          <a href={'/cari-mobil'} className='btn btn-success'>Kembali ke halaman sebelumnya</a>
        </div>

            <div className='row'>

                <div className='col-lg-7'>
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

                <div className='col-lg-5 '>
                  <div className='card-2'>
                    <img src={detail?.image} className="px-3" alt="image-error" />
                    <h1>{detail.name}</h1>
                      <div className='kapasitas'>
                        <img src={Fiuser} alt="fiuser" />
                        <p>nanti</p>
                      </div>
                      <div className='pb-5 d-flex harga'>
                        <h1>Total</h1>
                        <h1>Rp. Nanti</h1>
                      </div>
                    </div>
                </div>
              
            </div>
          </div>
        
        <Footer />
    </div>

    
  )
}

export default Detail