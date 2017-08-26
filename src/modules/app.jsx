import React from 'react';
import '../../styles/index.scss';
import Footer from '../generic/footer';
import banner from '../images/banner.jpg';
import piechart from '../images/pie-chart.png';
import device from '../images/device.png';
import Header from '../generic/header';
import lorawan from '../images/lorawan.png';
import server from '../images/server1.png';
import apple from '../images/apple.png';
import windows from '../images/window.png';
import BodySection from '../components/bodySection';
import IotSection from '../components/iotSection';
import $ from 'jquery';

var styles = {
  root: {
    display: "block"
  },
  section_1: {
      position: 'fixed center',
      backgroundImage: `url(${banner})`,
      overflow: 'hidden',
      backgroundSize: "100% 100%",
      height: "732px"
  },
}
export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div>
        <Header/>
      </div>
      <section className="section-1" style={styles.section_1}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 baner-inner-content">
            <h1>Smart World-Think IoT & beyond</h1>
            <p>Chariot welcomes you to the world of possibilities where we take internet of
              <br/> things to next level of inovation. Connect everything through our smart<br/>
              products and manage resources like you have never done before.</p>
            <p className="p20"> <a href="#" className="btn btn-primary btn-lg  border-radius-25"
               data-animation="animated fadeInLeft" id="banner-know-more-tab">Let’s Explore</a>
             </p>
         </div>
      </div>
   </div>
</section>
  <BodySection/>
  <IotSection/>
  <section className="p50">
     <div className="container">
        <div className="row">
           <div className="products-heading col-md-12 wow fadeInUp">
              <h2 className="heading-title text-center">Products</h2>
              <div className="flexslider">
                 <ul className="slides">
                    <li>
                       <div className="col-md-12">
                          <div className="col-md-7 company-page-middle zero-padding">
                             <div className="row">
                                <div className="col-md-6 varune-style">
                                   <h2>Varune</h2>
                                   <p>Smart water management</p>
                                   <h3>$69.00</h3>
                                </div>
                             </div>
                             <ul className="navigation-tab nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#created">FEATURES</a></li>
                                <li><a data-toggle="tab" href="#give"> SPECIFICATION</a></li>
                             </ul>
                             <div className="tab-content">
                                <div id="created" className="tab-pane fade in active">
                                   <div className=" list-section col-md-12 zero-padding">
                                      <ul>
                                         <li>Real time water consumption analysis.</li>
                                         <li>No maintenance required, install & forget.</li>
                                         <li>Theft protection to detect any kind of tampering to meter.</li>
                                         <li>Long lasting meter with life upto 8 years.</li>
                                         <li>Checks leaksge and sends Alerts.</li>
                                         <li>Checks the supply for back ﬂow.</li>
                                         <li>Easy to install can be easily mounted.</li>
                                         <li>Preinstalled long life battery to hold upto 8 years.</li>
                                      </ul>
                                   </div>
                                </div>
                                <div id="give" className="tab-pane fade">
                                   <div className="list-section col-md-12 zero-padding">
                                      <ul>
                                         <li>Real time water consumption analysis.</li>
                                         <li>No maintenance required, install & forget.</li>
                                         <li>Theft protection to detect any kind of tampering to meter.</li>
                                         <li>Long lasting meter with life upto 8 years.</li>
                                         <li>Checks leaksge and sends Alerts.</li>
                                         <li>Checks the supply for back ﬂow.</li>
                                         <li>Easy to install can be easily mounted.</li>
                                         <li>Preinstalled long life battery to hold upto 8 years.</li>
                                      </ul>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="col-md-5 chart-section">
                                <div id="demo-pie-2" className="pie-title-center"
                                  data-percent="80"> <span className="pie-value"></span> </div>
                             <img src={piechart}></img>
                          </div>
                       </div>
                    </li>
                    <li>
                       <div className="col-md-12">
                          <div className="col-md-7 company-page-middle zero-padding">
                             <div className="row">
                                <div className="col-md-6 varune-style">
                                   <h2>Varune</h2>
                                   <p>Smart water management</p>
                                   <h3>$69.00</h3>
                                </div>
                             </div>
                             <ul className="navigation-tab nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#created">FEATURES</a></li>
                                <li><a data-toggle="tab" href="#give"> SPECIFICATION</a></li>
                             </ul>
                             <div className="tab-content">
                                <div id="created" className="tab-pane fade in active">
                                   <div className="list-section col-md-12 zero-padding">
                                      <ul>
                                         <li>Real time water consumption analysis.</li>
                                         <li>No maintenance required, install & forget.</li>
                                         <li>Theft protection to detect any kind of tampering to meter.</li>
                                         <li>Long lasting meter with life upto 8 years.</li>
                                         <li>Checks leaksge and sends Alerts.</li>
                                         <li>Checks the supply for back ﬂow.</li>
                                         <li>Easy to install can be easily mounted.</li>
                                         <li>Preinstalled long life battery to hold upto 8 years.</li>
                                      </ul>
                                   </div>
                                </div>
                                <div id="give" className="tab-pane fade">
                                   <div className="list-section col-md-12 zero-padding">
                                      <ul>
                                         <li>Real time water consumption analysis.</li>
                                         <li>No maintenance required, install & forget.</li>
                                         <li>Theft protection to detect any kind of tampering to meter.</li>
                                         <li>Long lasting meter with life upto 8 years.</li>
                                         <li>Checks leaksge and sends Alerts.</li>
                                         <li>Checks the supply for back ﬂow.</li>
                                         <li>Easy to install can be easily mounted.</li>
                                         <li>Preinstalled long life battery to hold upto 8 years.</li>
                                      </ul>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="col-md-5 chart-section">
                                <div id="demo-pie-2"
                                  className="pie-title-center"
                                  data-percent="80">
                                  <span className="pie-value"></span>
                                 </div>

                             <img src={piechart}></img>
                          </div>
                       </div>
                    </li>
                    <li>
                       <div className="col-md-12">
                          <div className="col-md-7 company-page-middle zero-padding">
                             <div className="row">
                                <div className="col-md-6 varune-style">
                                   <h2>Varune</h2>
                                   <p>Smart water management</p>
                                   <h3>$69.00</h3>
                                </div>
                             </div>
                             <ul className="navigation-tab nav nav-tabs">
                                <li className="active"><a data-toggle="tab" href="#created">FEATURES</a></li>
                                <li><a data-toggle="tab" href="#give"> SPECIFICATION</a></li>
                             </ul>
                             <div className="tab-content">
                                <div id="created" className="tab-pane fade in active">
                                   <div className="list-section col-md-12 zero-padding">
                                      <ul>
                                         <li>Real time water consumption analysis.</li>
                                         <li>No maintenance required, install & forget.</li>
                                         <li>Theft protection to detect any kind of tampering to meter.</li>
                                         <li>Long lasting meter with life upto 8 years.</li>
                                         <li>Checks leaksge and sends Alerts.</li>
                                         <li>Checks the supply for back ﬂow.</li>
                                         <li>Easy to install can be easily mounted.</li>
                                         <li>Preinstalled long life battery to hold upto 8 years.</li>
                                      </ul>
                                   </div>
                                </div>
                                <div id="give" className="tab-pane fade">
                                   <div className="list-section col-md-12 zero-padding">
                                      <ul>
                                         <li>Real time water consumption analysis.</li>
                                         <li>No maintenance required, install & forget.</li>
                                         <li>Theft protection to detect any kind of tampering to meter.</li>
                                         <li>Long lasting meter with life upto 8 years.</li>
                                         <li>Checks leaksge and sends Alerts.</li>
                                         <li>Checks the supply for back ﬂow.</li>
                                         <li>Easy to install can be easily mounted.</li>
                                         <li>Preinstalled long life battery to hold upto 8 years.</li>
                                      </ul>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div className="col-md-5 chart-section">
                                <div id="demo-pie-2" className="pie-title-center" data-percent="80"> <span className="pie-value"></span> </div>
                             <img src={piechart}></img>
                          </div>
                       </div>
                    </li>
                 </ul>
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
                 <h2 className="heading-title text-center">App</h2>
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
                          <li><img src={server}></img></li>
                          <li><img src={apple}></img></li>
                          <li><img src={windows}></img></li>
                       </ul>
                    </div>
                 </div>
                 <div className="col-md-5">
                    <img src={device}></img>
                 </div>
                 <div className="row">
                    <div className="col-sm-12 partne-section">
                       <h2>Partners</h2>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col-sm-12 partner-img-section">
                       <ul className="row">
                          <li className="col-sm-4"><img src={lorawan}></img></li>
                          <li className="col-sm-4"><img src={lorawan}></img></li>
                          <li className="col-sm-4"><img src={lorawan}></img></li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
  <Footer/>
      </div>
    )
  }
}
