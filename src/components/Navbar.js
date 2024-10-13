import React from 'react';
import JewelryLogo from "../assets/photo_7.jpg"
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={JewelryLogo} alt=''/>
            <div className='main-link'>
                <Link to={"/"}>Anasayfa</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/about"}>Hakkımızda</Link>
                <Link to={"/contact"}>İletişim</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar