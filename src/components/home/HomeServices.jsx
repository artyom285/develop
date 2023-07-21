import React from 'react';
import "./HomeServices.css";
import { BiWindowAlt } from "react-icons/bi";
import { BiImageAlt } from "react-icons/bi";
import { BiDollarCircle } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import { BiBoltCircle } from "react-icons/bi";


function HomeServices() {
  return (
    <div className='HomeServices' id="services">
        <center><p className="block-head1">Services We Are Offering</p></center>
        <center><p className="block-head2">We Design Digital Product That <br />Help Grow Businesses</p></center>
        <center><p className="block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas incidunt perferendis eos aliquam quis nemo.</p></center>
        <div className="services">
            <div className="service">
                <i><BiWindowAlt /></i>
                <center><span>Website <br />Development</span></center>
            </div>
            <div className="service">
                <i><BiImageAlt /></i>
                <center><span>Graphic <br />Design</span></center>
            </div>
            <div className="service">
                <i><BiDollarCircle /></i>
                <center><span>Digital <br />Marketing</span></center>
            </div>
            <div className="service">
                <i><BiBookContent /></i>
                <center><span>SEO & Content <br />Writing</span></center>
            </div>
            <div className="service">
                <i><BiBoltCircle /></i>
                <center><span>App <br />Development</span></center>
            </div>
        </div>
    </div>
  )
}

export default HomeServices