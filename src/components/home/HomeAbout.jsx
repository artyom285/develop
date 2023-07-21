import React from 'react';
import "./HomeAbout.css";
import { BiHelpCircle } from "react-icons/bi";

function HomeAbout() {
  return (
    <div className='HomeAbout' id="about">
      <div className="about-text">
        <p className="about-sub-head">Welcome To Smart Develop Agency</p>
        <p className="about-head">We Are The Best <br />Website Agency In<br />The World</p>
        <p className="about-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam inventore saepe provident tempore! Aliquam reprehenderit sint odio, sit iusto tempore quis illo vel laborum maxime nesciunt at architecto, dignissimos deserunt!</p>
        <a href="#" className='about-link'>
          <i><BiHelpCircle /></i>
          <span>Learn More</span>
        </a>
      </div>
      <div className="about-img">
        <img src="/home1.jpg" alt="img" />
      </div>
    </div>
  )
}

export default HomeAbout