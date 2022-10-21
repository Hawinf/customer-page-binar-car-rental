import axios from 'axios';
import React,{useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { SkipBack } from 'react-feather';
import './style.css'

const Detail = () => {

  const[detail, setDetail] = useState({});
  let {id} = useParams();
  console.log(id);
  
  const baseUrl = 'http://localhost:4000';

  const fetch = useRef(true);

  const getDetail = (id) => {
    axios.get(`${baseUrl}/cars/${id}`)
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
        <SkipBack className='icon-back' color="red" size={48} />
        <h1>{detail.name}</h1>
        <img src={detail?.image} alt="image-error" />
    </div>
  )
}

export default Detail