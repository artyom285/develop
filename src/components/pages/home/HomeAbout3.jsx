import React from 'react';
import "./HomeAbout3.css";
import { BiCommentDetail } from 'react-icons/bi';
import { BiHelpCircle } from 'react-icons/bi';

function HomeAbout3() {
  return (
    <div className='HomeAbout3'>
      <div className="about3-text">
        <center><p className="block-head1">Providing Exceptional Service</p></center>
        <center><p className="block-head2">Great Things in Business Are Done <br />By A Team Of People</p></center>
        <center><p className="block-desc about3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas incidunt perferendis eos aliquam quis nemo.</p></center>
        <div className="about3-links">
          <a href="#">
            <i><BiCommentDetail /></i>
            <span>Contact Us</span>
          </a>
          <a href="#">
            <i><BiHelpCircle /></i>
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout3