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

const TestData = require('./app.json');

export default class AppBodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }
  render() {
    let appData = TestData.body.map((val, i) => {
      return (
           <ul key={i}>
              <li>{val.name}</li>
           </ul>

        );
      });
      let appBodyData = TestData.head.map((val, k) => {
        return (

                <div key={k} className="col-sm-4 col-md-4">
                    <div className="col-md-12 iot-section-second-heading">
                      <h4  className=" text-center">{val.heading}</h4>
                      <img src={mobilev} className="p20 image-style"></img>
                      <p>{val.data}
                      </p>
                    </div>
                  </div>
          );
        });

        let secBodyData = TestData.section.map((val, j) => {
          return (

                  <div key={j} className="col-sm-4 col-md-4">
                      <div  className="col-md-12 iot-section-second-heading">
                        <h4  className=" text-center">{val.heading}</h4>
                        <img src={mobilev} className="p20 image-style"></img>
                        <p>{val.data}
                        </p>
                      </div>
                    </div>
            );
          });
    return(
      <div>
        <section className="story-photo section-padding">
           <div className="container">
              <div className="row space">
                 <div className="col-md-12 zero-padding wow fadeInUp">
                    <div className="col-md-12 zero-padding iot-platform-headeing">
                       <div className="col-md-7">
                         <div className="col-md-12 app-list">
                           {appData}
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
                        {appBodyData}
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
                      {secBodyData}
                    </div>
                 </div>
              </div>
           </div>
        </section>
        </div>
    )
  }
}
