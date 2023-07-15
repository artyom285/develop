import React from 'react';
import "./Footer.css";
import { BiSolidMap } from "react-icons/bi";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

function Footer() {
  return (
    <div className='Footer'>
        <footer>
            <div className="footer-block">
                <a href="#" className="logo">develop.</a>
                <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus aliquam ab possimus atque odio nemo sit provident iure temporibus, enim nihil modi ducimus accusantium? Sequi sint atque rerum asperiores.</p>
            </div>
            <div className="footer-block">
                <p className="block-head">Contact Us</p>
                <div className="footer-block-info">
                    <div className="info">
                        <i><BiSolidMap /></i>
                        <span>Putrajaya Campus, Jalan Kajang - Puchong, <br />43000 Kajang, Selangor</span>
                    </div>
                    <div className="info">
                        <i><BiSolidPhone /></i>
                        <span>0147149247</span>
                    </div>
                    <div className="info">
                        <i><BiSolidEnvelope /></i>
                        <span>develop285@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="footer-block">
                <p className="block-head">Social</p>
                <div className="footer-block-info s-n">
                    <a href='#' className="info">
                        <i><BiLogoInstagramAlt /></i>
                        <span>Instagram</span>
                    </a>
                    <a href='#' className="info">
                        <i><BiLogoFacebook /></i>
                        <span>Facebook</span>
                    </a>
                    <a href='#' className="info">
                        <i><BiLogoTwitter /></i>
                        <span>Twitter</span>
                    </a>
                </div>
            </div>
        </footer>
        <center><p className="copyright">© 2023 develop. All right reserved.</p></center>
    </div>
  )
}

export default Footer