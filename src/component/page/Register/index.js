import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Rectangle.png';
import Bar from '../grup.png'
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Navigate = useNavigate()

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        const payload = {
            email: email,
            password: password
        }

        axios
            .post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register', payload)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.access_token)
                Navigate('/login')
            })
            .catch((err) => {
                console.log(err.message)
                alert('soemthing went wrong')
            })
    }

  return (
    <div className='wrapper-login'>
    <div className='row'>
        <div className='col-lg-6 col-md-8'>
            <div className='wrapper-login-left'>
                <img className='my-3' src={Logo} />
                <h1 className='grettings my-3'>Sign Up</h1>
                <div className='kartu-email'>
                    <p className='judul-email'>Email</p>
                    <input onChange={inputEmail} placeholder='eg: johndee@gmail.com' className='kotak-input w-100' />
                </div>
                <div className='kartu-email'>
                    <p className='judul-email'>Password</p>
                    <input onChange={inputPassword} placeholder='Min 6 Character' className='kotak-input w-100' />
                </div>
                <div className='tombol'>
                    <button onClick={handleRegister} className='btn btn-success w-100 tombol-1'>Sign In</button>
                </div>
                <p className='text-center'>have an account?
                    <Link to={'/login'}>Sign In</Link>   
                </p>
            </div> 
        </div>
        <div className='col-lg-6'>
            <div className='wrapper-login-right'>
                <img src={Bar} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Register
