import React from 'react';
import choose from '../images/choose.jpg';
import control from '../images/control.jpg';

const TestData = require('./home.json');

export default class BodySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }
  render() {
    let BodySectionData = TestData.howItWorks.map((val, i) => {
      return (
        <div key={i} className="col-sm-4 col-md-4">
           <div className="col-md-12 how-it-work-heading">
              <h4 className=" text-center">{val.header}</h4>
              <img src={choose} className="img-width p20"></img>
              <p className="how-it-work-content">
                {val.content}
              </p>
           </div>
        </div>
        );
      });
      return(
        <div>
          <section className="story-photo section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12 zero-padding wow fadeInUp">
                  <div className="col-md-12 zero-padding">
                    <h2 className="heading-title text-center">How it works</h2>
                    {BodySectionData}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
)
}
}
