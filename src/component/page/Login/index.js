import React, { useState }from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Rectangle.png';
import axios from 'axios';
import Bar from '../grup.png'
import './login.css';



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { pathname } = useLocation()

    const Navigate = useNavigate()

    

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        const payload = {
            email: email,
            password: password
        }

        axios
            .post('https://api-car-rental.binaracademy.org/customer/auth/login', payload)
            // .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login', payload)
            .then((res) => {
                console.log(res) ;
                localStorage.setItem('token', res.data.access_token)
                Navigate('/cari-mobil')
            })
            .catch((err) => {
                console.log(err.message)
                Navigate('/register')
                alert('You Have To Register')
                Navigate('/register')
            })
    }


  return (
    <div className='wrapper-login'>
        <div className='row'>
            {/* <div className='col-lg-6 col-md-12'> */}
            <div className='col-lg-6 col-md-12'>
                <div className='wrapper-login-left'>
                    <a href={'/'} >
                        <img className='my-3' src={Logo} />
                    </a>
                    <h1 className='grettings my-3'>Welcome Back</h1>
                    <div className='kartu-email'>
                        <p className='judul-email'>Email</p>
                        <input onChange={handleEmail} placeholder='eg: johndee@gmail.com' className='kotak-input w-100' />
                    </div>
                    <div className='kartu-email'>
                        <p className='judul-email'>Password</p>
                        <input onChange={handlePassword} placeholder='Min 6 Character' type='password'  className='kotak-input w-100' />
                    </div>
                    <div className='tombol'>
                        <button onClick={handleLogin} className='btn btn-success w-100 tombol-1'>Sign In</button>
                    </div>
                    <p className='text-center'>Dont have an account?
                        <Link to={'/register'}> Sign Up for free</Link>   
                    </p>
                </div> 
            </div>
            <div className='col-lg-6 col-md-12'>
                <div className='wrapper-login-right'>
                    <img src={Bar} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
