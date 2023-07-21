import React from 'react';
import { BiHelpCircle } from "react-icons/bi";

function HomeAbout2() {
  return (
    <div className='HomeAbout about-2'>
        <div className="about-img">
            <img src="/home1(2).jpg" alt="img" />
        </div>
        <div className="about-text">
            <p className="about-sub-head">We Guarantee High Quality Services</p>
            <p className="about-head">We Are Trusted By <br />More Than 8900 <br />Customers</p>
            <p className="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium optio totam. Earum molestiae perspiciatis aut officia ex delectus qui consequatur eum voluptatem! Sapiente error neque incidunt, eveniet dicta quasi.</p>
            <a href="#" className='about-link'>
                <i><BiHelpCircle /></i>
                <span>Learn More</span>
            </a>
        </div>
    </div>
  )
}

export default HomeAbout2