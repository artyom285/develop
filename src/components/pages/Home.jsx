import React from 'react';
import HomeCenter from '../home/HomeCenter';
import Bottom from '../Bottom';
import HomeServices from '../home/HomeServices';
import HomeAbout from '../home/HomeAbout';
import HomePlayer from '../home/HomePlayer';
import HomePortfolio from '../home/HomePortfolio';
import HomeStats from '../home/HomeStats';
import HomeAbout2 from '../home/HomeAbout2';
import HomeTeam from '../home/HomeTeam';
import HomeAbout3 from "../home/HomeAbout3";
import HomeBlog from '../home/HomeBlog';
import Footer from '../Footer';

function Home() {
  return (
    <div className='Home'>
      <div className="landing" id="home">
        <HomeCenter></HomeCenter>
        <Bottom></Bottom>
        <div className="effect1"></div>
      </div>
      <div className="content">
        <HomeServices></HomeServices>
        <HomeAbout></HomeAbout>
        <HomePlayer></HomePlayer>
        <HomePortfolio></HomePortfolio>
        <HomeStats></HomeStats>
        <HomeAbout2></HomeAbout2>
        <HomeTeam></HomeTeam>
        <HomeAbout3></HomeAbout3>
        <HomeBlog></HomeBlog>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home