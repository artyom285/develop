import React from 'react';
import HomeCenter from './HomeCenter';
import Bottom from '../../Bottom';
import HomeServices from './HomeServices';
import HomeAbout from './HomeAbout';
import HomePlayer from './HomePlayer';
import HomePortfolio from './HomePortfolio';
import HomeStats from './HomeStats';
import HomeAbout2 from './HomeAbout2';
import HomeTeam from './HomeTeam';
import HomeAbout3 from "./HomeAbout3";
import HomeBlog from './HomeBlog';
import Footer from '../../Footer';

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