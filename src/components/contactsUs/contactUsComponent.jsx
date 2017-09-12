import React from 'react';
import contactImg from '../../images/contact-img.png'
import '../../../styles/index.scss';
const TestData = require('./contactus.json');

export default class ContactUsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }
  render() {
    let contactUsData = TestData.body.map((val, i) => {
      return (
        <p key ={i} className="content-of-contact">
          {val.name}
        </p>
        );
      });
    return (
      <div>
   <section className="story-photo section-padding10 first">
      <div className="container">
         <div className="row">
            <div className="col-md-12 zero-padding wow fadeInUp">
               <div className="col-md-12 zero-padding iot-platform-headeing">
                  <div className="col-md-6 ">
                     <div className="col-md-12 app-list">
                        <label className="heading-title-contact">Contact us</label>
                        <span className="content-of-contact">
                        {contactUsData}
                      </span>
                     </div>
                     <div className="col-md-12 inquries-style">
                         <label className="heading-title-contact">Inquiries</label>
                        <p className="content-of-contact">
                          If u have any query. Tell us about it.<br/>
                           Mail- info@chariotco.in <br/>
                           Mobile- +919785967626
                        </p>
                        <label className="heading-title-contact">Careers</label>
                        <p className="content-of-contact">
                          We are always looking for talented people.<br/>
                        Mail- careers@chariotco.in<br/>
                      Mobile- +91 9785967626
                        </p>
                     </div>
                  </div>
                  <div className="col-md-6 contact-img">
                     <img src={contactImg}></img>
                  </div>
                  <div className="row">
                     <div className="col-sm-5">
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
