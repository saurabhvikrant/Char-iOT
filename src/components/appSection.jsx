import React from 'react';
import windows from '../images/window.png';
import server from '../images/server1.png';
import apple from '../images/apple.png';
import device from '../images/device.png';

const BodyDataJson = require('./home.json');

export default class AppSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    BodyDataJson: '',
    }
  }
  render() {
    let BodyData = BodyDataJson.body.map((val, i) => (
      <li key={i}><a href="">{val.name}</a></li>
    ));
    return (
      <section className="story-photo section-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 wow fadeInUp">
              <div className="row p-a iot-platform-headeing">
                <h2 className="heading-title text-center">App</h2>
                <div className="col-sm-6 col-md-7">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xs-12 app-list">
                        <ul>{BodyData}</ul>
                      </div>
                    </div>
                    <div className="row download-style">
                      <h3>Download Now</h3>
                      <div className="col-xs-4"><img src={server}></img></div>
                      <div className="col-xs-4"><img src={apple}></img></div>
                      <div className="col-xs-4"><img src={windows}></img></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-5">
                  <img src={device} className="p-y img-90"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
