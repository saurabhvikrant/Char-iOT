import React from 'react';
import '../../styles/index.scss';

import windows from '../images/window.png';
import server from '../images/server1.png';
import apple from '../images/apple.png';
import device from '../images/device.png';
import lorawan from '../images/lorawan.png';

const BodyDataJson = require('./home.json');


export default class AppSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    BodyDataJson: '',
    }
  }
  render() {
    let BodyData = BodyDataJson.body.map((val, i) => {
      return (
        <li key={i}><a href="">{val.name}</a></li>
        );
      });
    return (
  <section className="story-photo section-padding">
     <div className="container">
        <div className="row">
           <div className="col-md-12 zero-padding wow fadeInUp">
              <div className="col-md-12 zero-padding iot-platform-headeing">
                 <h2 className="heading-title text-center">App</h2>
                 <div className="col-md-7">
                    <div className="col-md-12 app-list">
                       <ul>
                         {BodyData}
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
)
}
}
