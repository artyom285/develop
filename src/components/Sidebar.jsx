import React from 'react';
import "./Sidebar.css";
import "../queries.css";
import { BiExitFullscreen } from "react-icons/bi";
import { BiBuildings } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiGridAlt } from "react-icons/bi";
import { BiNews } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";

function Sidebar({ side, button }) {
  return (
    <div>
      <div className={side ? "Sidebar move" : "Sidebar"}>
        <i className='close' onClick={button}><BiExitFullscreen /></i>
        <ul>
          <li>
            <a href="#" onClick={button}>
              <i><BiBuildings /></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" onClick={button}>
              <i><BiHelpCircle /></i>
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#services" onClick={button}>
              <i><BiCog /></i>
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={button}>
              <i><BiGridAlt /></i>
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#blog" onClick={button}>
              <i><BiNews /></i>
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href="mailto:artyom.shlyahtin285@gmail.com" onClick={button}>
              <i><BiEnvelope /></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={side ? "sidebar-before active" : "sidebar-before"} onClick={button}></div>
    </div>
  )
}

export default Sidebar