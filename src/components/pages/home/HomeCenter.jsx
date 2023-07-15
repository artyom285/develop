import React from 'react';
import "./HomeCenter.css";
import { BiAddToQueue } from "react-icons/bi";

function HomeCenter() {
  return (
    <div className='HomeCenter'>
        <center><p className="sub-heading">Welcome to develop agency</p></center>
        <center><p className="heading">Smart web <br />design agency</p></center>
        <center>
            <a href="#" className='link'>
                <i><BiAddToQueue></BiAddToQueue></i>
                <span>Discover more</span>
            </a>
        </center>
    </div>
  )
}

export default HomeCenter