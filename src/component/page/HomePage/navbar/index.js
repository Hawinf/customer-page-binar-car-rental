import React,{ useState } from 'react';
import './navbar.css';
import Logo from '../images/logo.png';
import CloseButton from '../images/close.svg';
import Menu from '../images/fi_menu.png'

const Navbar = () => {

  const [active, setActive] = useState(false);

  const openSidebar = () => {
    setActive(true);
  }
  return (
    <header className="header">
   <div className="container">
      <div className="row">
        <div className="logo">
          <img src={Logo} alt="logo saya" />
        </div>
        <div className={`overlay-bg ${active ? 'menu-active' : ''}`} />
        <div className={`sidebar ${active ? 'menu-active' : ''}`}>
          <div className="top-sidebar">
            <h3>BCR</h3>
            <div className="close-icon">
              <img src={CloseButton} alt="" />
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