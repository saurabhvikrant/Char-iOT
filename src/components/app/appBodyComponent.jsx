import React from 'react';
import windows from '../../images/window.png';
import server from '../../images/server1.png';
import apple from '../../images/apple.png';
import mobile from '../../images/mobile.png';
import goal from "../../images/goals.png";
import mobilev from "../../images/mobile-venue.png";
import compare from "../../images/compare.png";
import menu from "../../images/menu.png";
import meter from "../../images/meter.png";
import stats from "../../images/stats.png";

export default class AppBodyContainer extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return(
      <div>
        <section className="story-photo section-padding">
           <div className="container">
              <div className="row space">
                 <div className="col-md-12 zero-padding wow fadeInUp">
                    <div className="col-md-12 zero-padding iot-platform-headeing">
                       <div className="col-md-7">
                          <div className="col-md-12 app-list">
                             <ul>
                                <li>Complete water consumption analytics.</li>
                                <li>Real time leakage alert to prevent wastage of water.</li>
                                <li>Remote shut-off button cuts off main line. </li>
                                <li>Online bill generation depending upon usage and online degital payment option.</li>
                                <li>Impact league: Reward challenge to promote water saving and creating awareness.</li>
                                <li>For any assistance on water supply or leakage issue plumber on demand can be avialed.</li>
                                <li>Easy to install can be easily mounted.</li>
                                <li>Preinstalled long life battery to hold upto 8 years.</li>
                             </ul>
                          </div>
                          <div className="col-md-12 download-style">
                             <h3>Download Now</h3>
                          </div>
                          <div className="icon-app">
                             <ul>
                                <li><img src={windows}></img></li>
                                <li><img src={server}></img></li>
                                <li><img src={apple}></img></li>
                             </ul>
                          </div>
                       </div>
                       <div className="col-md-5 app-mobile-section">
                          <img src={mobile}></img>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <section className="story-photo section-padding">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 zero-padding wow fadeInUp">
                    <div className="col-md-12 zero-padding iot-platform-headeing">
                       <div className="col-sm-4 col-md-4">
                          <div className="col-md-12 iot-section-second-heading">
                             <h4 className=" text-center">Usage</h4>
                             <img src={mobilev} className="p20 image-style"></img>
                             <p>A Serial Entreprenur and one of the core team member for developement of India's first Super Car DC Avanti. He has served as the Asst. V.P. for a Pune based startup Adclever. He has also been a public speaker and a motivator at platforms. He is an Alumni of UPES Dehradun.
                             </p>
                          </div>
                       </div>
                       <div className="col-sm-4 col-md-4">
                          <div className="col-md-12 iot-section-second-heading">
                             <h4 className="text-center">Goals</h4>
                             <img src={goal} className="p20 image-style"></img>
                             <p> He is an IIT Roorkee graduate, Software Enginee, Innovator, Fast learner and most importantly a Problem solver. Having experience of working in both software and hardware field with an experience in building the whole environment for product in startups.
                             </p>
                          </div>
                       </div>
                       <div className="col-sm-4 col-md-4">
                          <div className="col-md-12 iot-section-second-heading">
                             <h4 className="text-center">Compare</h4>
                             <img src={compare} className="p20 image-style"></img>
                             <p>A team player, who likes to lead and deliver results. Working in markting and management since colleage days laterworked with India's No. 1 Two-wheeler Company, Hero Motocorp ltd. He is an active environmentalist and a HBTI Kanpur alumni.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <section className="story-photo section-padding">
           <div className="container">
              <div className="row">
                 <div className="col-md-12 zero-padding wow fadeInUp">
                    <div className="col-md-12 zero-padding iot-platform-headeing">
                       <div className="col-sm-4 col-md-4">
                          <div className="col-md-12 iot-section-second-heading">
                             <h4 className=" text-center">Stats</h4>
                             <img src={stats} className="p20 image-style"></img>
                             <p className="content-style">A Serial Entrepreneur and one of the core team member for development of India’s ﬁrst Super Car DC Avanti. He has served as the Asst. V.P. for a Pune based startup Adclever. He has also been a public speaker and a motivator at platforms. He is an Alumni of UPES Dehradun. </p>
                          </div>
                       </div>
                       <div className="col-sm-4 col-md-4">
                          <div className="col-md-12 iot-section-second-heading">
                             <h4 className="text-center">Menu</h4>
                             <img src={menu} className="p20 image-style"></img>
                             <p> He is an IIT Roorkee graduate, Software Enginee, Innovator, Fast learner and most importantly a Problem solver. Having experience of working in both software and hardware field with an experience in building the whole environment for product in startups.</p>
                          </div>
                       </div>
                       <div className="col-sm-4 col-md-4">
                          <div className="col-md-12 iot-section-second-heading">
                             <h4 className="text-center">Meter</h4>
                             <img src={meter} className="p20 image-style"></img>
                             <p>A team player, who likes to lead and deliver results. Working in markting and management since colleage days laterworked with India's No. 1 Two-wheeler Company, Hero Motocorp ltd. He is an active environmentalist and a HBTI Kanpur alumni.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        </div>
    )
  }
}
