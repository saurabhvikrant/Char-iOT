import React from 'react';
import '../../styles/index.scss';
import {hashHistory } from 'react-router'


export default class Footer extends React.Component  {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
     <footer id="footer">
        <div className="container">
           <div className="row">
              <div className="col-md-12 zero-padding wow fadeInUp">
                 <div className="col-md-4 logo-sec">
                    <ul>
                       <li className="logo-header">
                          {this.footerImage.footer}
                       </li>
                       <li><i className="fa fa-flag-o" aria-hidden="true">
                       </i>{this.footerData.line1}<br/>&nbsp; &nbsp;&nbsp;{this.footerData.line2} <br/>
                     &nbsp; &nbsp;&nbsp; {this.footerData.line3}<br/> &nbsp; &nbsp;&nbsp;{this.footerData.line4}<br/>
                   &nbsp; &nbsp;&nbsp; {this.footerData.line5}
                       </li>
                       <li><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;{"info@chariotco.in"}</li>
                       <li><i className="fa fa-mobile mobile-style" aria-hidden="true"></i>&nbsp; {"+91-9785967626"}<br/>
                          &nbsp; &nbsp;&nbsp; {}
                       </li>
                    </ul>
                 </div>
                 <div className="col-md-3 compny-sec">
                    {this.footerHead.footer1}
                    <ul>
                       <li><a href="#"onClick={() => { hashHistory.push('/')}}>Products</a></li>
                       <li><a href="#"onClick={() => { hashHistory.push('/')}}>Technology</a></li>
                       <li><a href="#"onClick={() => { hashHistory.push('/')}}>Blogs</a></li>
                       <li><a href="#"onClick={() => { hashHistory.push('/')}}>About Us</a></li>
                    </ul>
                 </div>
                 <div className="col-md-3 compny-sec">
                     {this.footerHead.footer2}
                    <ul>
                       <li><a href="#">Help</a></li>
                       <li><a href="#">Feedback</a></li>
                       <li><a href="#">FAQ’s</a></li>
                       <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                 </div>
                 <div className="col-md-2 compny-sec">
                    {this.footerHead.footer3}
                    <ul>
                       <li><a href="#">Media</a></li>
                       <li><a href="#">Careers</a></li>
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
                    <li><a href={this.footerData.flink}>
                      <i className="fa fa-facebook icon-style" aria-hidden="true"></i></a></li>
                    <li><a href={this.footerData.linkdin}><i className="fa fa-linkedin icon-style" aria-hidden="true"></i></a></li>
                    <li><a href={this.footerData.twitter}><i className="fa fa-twitter icon-style" aria-hidden="true"></i></a></li>
                    <li><a href={this.footerData.insta}><i className="fa fa-instagram icon-style" aria-hidden="true"></i></a></li>
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
