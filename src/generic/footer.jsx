import React from 'react';
import '../../styles/index.scss';
import footer from '../images/footer-logo.png'
const TestData = require('./generic.json');
import {hashHistory } from 'react-router'


export default class Footer extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
    TestData: '',
    }
  }
  render() {
    let footerData = TestData.footer.map((val, i) => {
      return (
        <li key={i}><a href="">{val.name}</a></li>
        );
      });
      let footerNextData = TestData.nextFooter.map((val, i) => {
        return (
          <li key={i}><a href="">{val.name}</a></li>
          );
        });
        let mediaFooter = TestData.mediaFooter.map((val, i) => {
          return (
            <li key={i}><a href="">{val.name}</a></li>
            );
          });
    return (
      <div>
      <footer id="footer">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 zero-padding wow fadeInUp">
                      <div className="col-md-4 logo-sec">
                          <ul>
                              <li className="logo-header">
                                  <img src={footer}></img>
                              </li>
                              <li>
                                  <i className="fa fa-flag-o" aria-hidden="true"></i>
                                   K-88 A, Second Floor, New Mahaveer Nagar, Tilak Nagar,<br/>&nbsp; &nbsp;&nbsp; West Delhi New Delhi, India - 110018
                              </li>
                              <li>
                                  <i className="fa fa-envelope-o" aria-hidden="true">
                                  </i>&nbsp;info@chariotco.in</li>
                              <li><i className="fa fa-mobile mobile-style" aria-hidden="true"></i>&nbsp; +91-9785967626<br/> &nbsp; &nbsp;&nbsp; +91-9785967626</li>
                              <li><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;{"info@chariotco.in"}</li>
                              <li><i className="fa fa-mobile mobile-style" aria-hidden="true"></i>&nbsp; {"+91-9785967626"}<br/> &nbsp; &nbsp;&nbsp; {}
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-3 compny-sec">
                          {""}
                          <ul className="nav navbar-nav">
                              {footerData}
                          </ul>
                      </div>
                      <div className="col-md-3 compny-sec">
                          {""}
                          <ul className="nav navbar-nav">
                              {footerNextData}
                          </ul>
                      </div>
                      <div className="col-md-2 compny-sec">
                          {""}
                          <ul>
                              {mediaFooter}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
      <div className="footer-bottom">
          <div className="container">
              <div className="row">
                  <div className="col-md-4 wow fadeInLeft text-left">
                      <p className="footer-botem-style">Designed By- Phanendra Jangid </p>
                  </div>
                  <div className="col-md-4 wow fadeInLeft text-left footer-social text-center">
                      <ul>
                          <li><a href=''>
                      <i className="fa fa-facebook icon-style" aria-hidden="true"></i></a></li>
                          <li><a href=''><i className="fa fa-linkedin icon-style" aria-hidden="true"></i></a></li>
                          <li><a href=''><i className="fa fa-twitter icon-style" aria-hidden="true"></i></a></li>
                          <li><a href=''><i className="fa fa-instagram icon-style" aria-hidden="true"></i></a></li>
                      </ul>
                  </div>
                  <div className="col-md-4 text-right wow fadeInRight text-right">
                      <p className="footer-botem-style">CHARIOT TECH. PVT. LTD. @ 2017</p>
                      <p className="footer-botem-style1">ALL RIGHTS RESERVED</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
)
}
}
