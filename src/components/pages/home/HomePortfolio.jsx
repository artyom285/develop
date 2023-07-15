import React from 'react';
import "./HomePortfolio.css";
import { BiGridAlt } from "react-icons/bi";

function HomePortfolio() {
  return (
    <div className='HomePortfolio' id='portfolio'>
        <center><p className="block-head1 player">Our Portfolio</p></center>
        <center><p className="block-head2 player">Work Showcase</p></center>
        <center><p className="block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas incidunt perferendis eos aliquam quis nemo.</p></center>
        <div className="showcase-center">
            <div className="showcase-grid">
                <div className="project p-1">
                    <img src="/portfolio/home3.jpg" alt="project" />
                    <div className="project-text">
                        <p className="type">Graphic</p>
                        <p className="title">Standing Woman</p>
                    </div>
                </div>
                <div className="project p-2">
                    <img src="/portfolio/home4.jpg" alt="project" />
                    <div className="project-text">
                        <p className="type">Graphic</p>
                        <p className="title">Residential Building</p>
                    </div>
                </div>
                <div className="project">
                    <img src="/portfolio/home5.jpg" alt="project" />
                    <div className="project-text">
                        <p className="type">Graphic</p>
                        <p className="title">Orange Sunglasses</p>
                    </div>
                </div>
                <div className="project p-4">
                    <img src="/portfolio/home6.jpg" alt="project" />
                    <div className="project-text">
                        <p className="type">Graphic</p>
                        <p className="title">Lake Powell</p>
                    </div>
                </div>
                <div className="project">
                    <img src="/portfolio/home7.jpg" alt="project" />
                    <div className="project-text">
                        <p className="type">Graphic</p>
                        <p className="title">Basketball Court</p>
                    </div>
                </div>
                <div className="project">
                    <img src="/portfolio/home8.jpg" alt="project" />
                    <div className="project-text">
                        <p className="type">Graphic</p>
                        <p className="title">Chinatown In London</p>
                    </div>
                </div>
            </div>
        </div>
        <center>
            <a href="#" className='showcase-link'>
                <i><BiGridAlt /></i>
                <span>Show More</span>
            </a>
        </center>
    </div>
  )
}

export default HomePortfolio