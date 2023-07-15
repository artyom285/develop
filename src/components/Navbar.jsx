import React, { useState } from 'react';
import "./Navbar.css";

import { BiCompass } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";

function Navbar({ button }) {
  const [drop, setDrop] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const dropFunc = () => setDrop(!drop);

  const navbarActive = () => {
    if(window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", navbarActive);

  return (
    <div className='Navbar'>
        <nav className={navbar ? "navbar active" : "navbar"}>
            <a href="#" className="logo">develop.</a>
            <ul>
                <li><a href="#home" className='main-link'>Home</a></li>
                <li><a href="#about" className='main-link'>About</a></li>
                <li><a href="#services" className='main-link'>Services</a></li>
                <li>
                  <button onClick={dropFunc}>
                    <span>Portfolio</span>
                    <i><BiCaretDown /></i>
                  </button>
                  <div className={drop ? "drop-down active" : "drop-down"}>
                    <a href="#">Gym nation</a>
                    <a href="#">Property</a>
                    <a href="#">Develop</a>
                    <a href="#portfolio">See more</a>
                  </div>
                </li>
                <li><a href="#blog" className='main-link'>Blog</a></li>
                <li><a href="mailto:artyom.shlyahtin285@gmail.com" className='main-link'>Contact</a></li>
            </ul>
            <div className="nav-icons">
                <i><BiCompass /></i>
                <i onClick={button}><BiMenu /></i>
            </div>
        </nav>
    </div>
  )
}

export default Navbar