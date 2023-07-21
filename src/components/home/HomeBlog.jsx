import React from 'react';
import "./HomeBlog.css";
import { BiNews } from "react-icons/bi";

function HomeBlog() {
  return (
    <div className='HomeBlog' id='blog'>
        <center><p className="block-head1 player">Our News & Articles</p></center>
        <center><p className="block-head2 player">Latest Blog Posts</p></center>
        <center><p className="block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas incidunt perferendis eos aliquam quis nemo.</p></center>
        <div className="blog-center">
            <div className="blogs">
                <div className="blog">
                    <div className="blog-img">
                        <img src="/bg2.jpg" alt="blog" />
                    </div>
                    <div className="blog-data">
                        <p className="date">26 Nov</p>
                        <p className="article">Basic Rules Of Running Web Agency Business</p>
                        <a href="#" className='art-link'>Learn More</a>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-img">
                        <img src="/blog/blog1.jpg" alt="blog" />
                    </div>
                    <div className="blog-data">
                        <p className="date">20 Nov</p>
                        <p className="article">Become The Best Sale Marketer</p>
                        <a href="#" className='art-link'>Learn More</a>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog-img">
                        <img src="/blog/blog2.jpg" alt="blog" />
                    </div>
                    <div className="blog-data">
                        <p className="date">16 Nov</p>
                        <p className="article">Introducing Latest Develop Features</p>
                        <a href="#" className='art-link'>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        <center>
            <a href="#" className='showcase-link blog-l'>
                <i><BiNews /></i>
                <span>Show More</span>
            </a>
        </center>
    </div>
  )
}

export default HomeBlog