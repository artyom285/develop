import React from 'react';
import "./HomeTeam.css";

function HomeTeam() {
  return (
    <div className='HomeTeam'>
        <center><p className="block-head1 player">Meet the team</p></center>
        <center><p className="block-head2 player">Expert people</p></center>
        <center><p className="block-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas incidunt perferendis eos aliquam quis nemo.</p></center>
        <div className="team">
          <div className="team-grid">
            <div className="expert">
              <img src="/experts/expert1.jpg" alt="" />
              <div className="expert-data">
                <p className="e-name">Mark Hardson</p>
                <p className="e-position">Senior Designer</p>
              </div>
            </div>
            <div className="expert">
              <img src="/experts/expert2.jpg" alt="" />
              <div className="expert-data">
                <p className="e-name">Jessica Brown</p>
                <p className="e-position">General Manager</p>
              </div>
            </div>
            <div className="expert">
              <img src="/experts/expert3.jpg" alt="" />
              <div className="expert-data">
                <p className="e-name">John Albert</p>
                <p className="e-position">Brand Officer</p>
              </div>
            </div>
            <div className="expert">
              <img src="/experts/expert4.jpg" alt="" />
              <div className="expert-data">
                <p className="e-name">Alexa Grasso</p>
                <p className="e-position">Senior Designer</p>
              </div>
            </div>
            <div className="expert">
              <img src="/experts/expert5.jpg" alt="" />
              <div className="expert-data">
                <p className="e-name">Kevin Smith</p>
                <p className="e-position">CO Founder</p>
              </div>
            </div>
            <div className="expert">
              <img src="/experts/expert6.jpg" alt="" />
              <div className="expert-data">
                <p className="e-name">Rose Hill</p>
                <p className="e-position">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeTeam