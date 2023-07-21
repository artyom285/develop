import React from 'react';
import "./HomeStats.css";
import { BiBoltCircle } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiCoffeeTogo } from "react-icons/bi";
import { BiStats } from "react-icons/bi";

function HomeStats() {
  return (
    <div className='HomeStats'>
        <div className="stat">
            <center><p className="num">8705</p></center>
            <div className="s-text">
                <i><BiBoltCircle /></i>
                <span>Project completed</span>
            </div>
        </div>
        <div className="stat">
            <center><p className="num">480</p></center>
            <div className="s-text">
                <i><BiUserCircle /></i>
                <span>active clients</span>
            </div>
        </div>
        <div className="stat">
            <center><p className="num">625</p></center>
            <div className="s-text">
                <i><BiCoffeeTogo /></i>
                <span>cups of coffee</span>
            </div>
        </div>
        <div className="stat">
            <center><p className="num">9774</p></center>
            <div className="s-text">
                <i><BiStats /></i>
                <span>happy clients</span>
            </div>
        </div>
    </div>
  )
}

export default HomeStats