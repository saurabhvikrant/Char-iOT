import React from 'react';
import aboutImg from '../../images/contact-img.png'
import '../../../styles/index.scss';
import lorawan from '../../images/lorawan.png';
import arrow from '../../images/down-arrow-in-small-circle.png';
import men from '../../images/men.png';
import $ from 'jquery';
const TestData = require('./about.json');

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }
  componentDidMount() {
    $("#img-tab").click(function() {
      $('html, body').animate({
        scrollTop: $("#team").offset().top
      }, 1000);
    });
  }
  render() {
    let aboutUsData = TestData.about.map((val, i) => {
      return (

           <p  key={i}className="content">
            {val.data}
          </p>
        );
      });

      let headUsData = TestData.body.map((val, j) => {
        return (
        <span key={j}>
          <h3>{val.heading}</h3>
          <p>{val.subHead}</p>
          <h3>{val.vision}</h3>
          <p>{val.subData}</p>

        </span>

          );
        });
        let companyData = TestData.head.map((val, k) => {
          return (
            <div key={k} className="col-sm-4 col-md-4">
               <div className="col-md-12 iot-section-second-heading">
                  <div className="men-box">
                     <img src={men} className="img-width"></img>
                  </div>
                  <h4 className=" text-center name-of-dp">{val.heading}</h4>
                  <h6 className="co-founder-style">{val.position}</h6>
                  <p>{val.subhead}</p>
               </div>
            </div>
            );
          });
    return (
<div>
<section className="story-photo section-padding first">
   <div className="container">
      <div className="row">
         <div className="col-md-12 zero-padding wow fadeInUp">
            <div className="col-md-12 zero-padding iot-platform-headeing">
               <h2 className="heading-title-about">About us</h2>
               <div className="col-md-6 ">
                   <div  className="col-md-8 app-list">
                  {aboutUsData}
                </div>
                    <div className="col-md-12 mission-style">
                  {headUsData}
                </div>
               </div>
               <div className="col-md-6 about-img">
                 <img src={aboutImg}></img>
               </div>
               <div className="row">
                  <div className="col-sm-5">
                  </div>
                  <div className="col-sm-1 down-arrow-about">
                     <button id="img-tab">
                       <img src={arrow}></img></button>
                  </div>
                  <div className="col-sm-6">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<section className="story-photo section-padding second">
   <div className="container">
      <div className="row">
         <div className="col-md-12 zero-padding wow fadeInUp">
            <div className="col-md-12 zero-padding">
               <h2 id='team' className="heading-title-squad text-center">Squad</h2>
               {companyData}
               <div className="row">
                  <div className="col-sm-12 partne-section-about">
                     <h2>Partners</h2>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-12 partner-img-section"></div>
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
    </section>
   </div>
)
}
}
