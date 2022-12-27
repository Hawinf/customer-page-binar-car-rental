import React,{ useEffect, useState } from 'react';
// import React from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

import './navbar.css';
import Logo from '../images/logo.png';
import CloseButton from '../images/close.svg';
import Menu from '../images/fi_menu.png'

const Navbar = () => {

  const [active, setActive] = useState(false);
  const Location = useLocation(false);
  
  

  

  const RegisterToLogin = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
      const token = localStorage.getItem('token')

      if(!token) {
        setIsLogin(false);
        setLoading(false)
      } else {
        setIsLogin(true)
        setLoading(false)
      }
    }, [isLogin]);

    if(loading) {
      return 'Loading'
    }
  //   return isLogin ?
  // <li>
  //   <Link className='btn btn-success' to={'/login'}>Register</Link>
  // </li> :  
  //          <li>
  //             <Link className='btn btn-success' to={'/'}>Log Out</Link>
  //           </li>
  }
  



  const openSidebar = () => {
    setActive(true);
  }
  const closeSidebar = () => {
    setActive(false);
  }
  return (
    <header className="header">
   <div className="container">
      <div className="row">
        <div className="logo">
          <a href={'/'} >
            <img src={Logo} alt="logo saya" />
          </a>
        </div>
        <div className={`overlay-bg ${active ? 'menu-active' : ''}`} />
        <div className={`sidebar ${active ? 'menu-active' : ''}`}>
          <div className="top-sidebar">
            <h3>BCR</h3>
            <div className="close-icon">
              <img src={CloseButton} alt="" onClick={closeSidebar}/>
            </div>
          </div>
          <ul className="menu">
            <li>
              <a href="#our-services">Our Services</a>
            </li>
            <li>
              <a href="#why">Why Us</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>

        
            <li>
              <Link className='btn btn-success' to={'/login'}>Register</Link>
            </li> 

            



          </ul>
        </div>

        <div className="burger-icon" onClick={openSidebar}>
          <img src={Menu} alt="" />
        </div>
      </div>
    </div>
  </header>
)
}


export default Navbar