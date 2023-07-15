import React from 'react';
import "./HomePlayer.css";
import { BiPlay } from "react-icons/bi";
import { BiNews } from "react-icons/bi";

function HomePlayer() {
  return (
    <div className='HomePlayer'>
      <center><p className="block-head1 player">How Do We Work?</p></center>
      <center><p className="block-head2 player">Digital Experience</p></center>
      <center><p className="block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas incidunt perferendis eos aliquam quis nemo.</p></center>
      <div className="player-block">
        <a href='#' className="player-video">
          <img src="/home2.jpeg" alt="img" />
          <i><BiPlay /></i>
        </a>
      </div>
      <div className="subscribe">
        <div className="sub-flex">
          <div className='sub-head'>
            <p className="block-head1 player">Don't Miss Out Our Latest Updates</p>
            <p className="subs-head">Subscribe Us</p>
          </div>
          <div className="input-fill">
            <input type="text" placeholder='Enter your email' />
            <button>
              <i><BiNews /></i>
              <span>Subscribe now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePlayer