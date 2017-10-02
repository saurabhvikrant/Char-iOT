import React from 'react';
import computer from '../images/computer.jpg';

const TestData = require('./home.json');
export default class IotSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TestData: '',
    }
  }
  render() {
    let iotSectionData = TestData.iotSec.map((val, i) => (
      <div key={i} className="col-sm-4 iot-section-second-heading">
        <h4 className="text-center">{val.header}</h4>
        <img src={computer} className="img-width p20"></img>
        <p>{val.content}</p>
      </div>
    ));
    return(
      <div>
        <section className="story-photo section-padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 wow fadeInUp p-a-md">
                <div className="row iot-platform-headeing">
                  <h2 className="heading-title text-center">IoT Platform</h2>
                  {iotSectionData}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
