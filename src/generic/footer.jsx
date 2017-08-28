import React from 'react';
import '../../styles/index.scss';
import footer from '../images/footer-logo.png';

export default class Footer extends React.Component {
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
                          <img src={footer}></img>
                       </li>
                       <li><i className="fa fa-flag-o" aria-hidden="true">
                          </i>{"K-88 A, Second Floor,"}<br/>&nbsp; &nbsp;&nbsp;{"New Mahaveer Nagar,"} <br/>
                          &nbsp; &nbsp;&nbsp; {"Tilak Nagar,"}<br/> &nbsp; &nbsp;&nbsp;{ " West Delhi New Delhi, "} <br/>
                          &nbsp; &nbsp;&nbsp; {"India - 110018 "}
                       </li>
                       <li><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;{"info@chariotco.in"}</li>
                       <li><i className="fa fa-mobile mobile-style" aria-hidden="true"></i>&nbsp; {"+91-9785967626"}<br/>
                          &nbsp; &nbsp;&nbsp; {"+91-9785967626"}
                       </li>
                    </ul>
                 </div>
                 <div className="col-md-3 compny-sec">
                    <h3>COMPANY</h3>
                    <ul>
                       <li><a href="#">Products</a></li>
                       <li><a href="#">Technology</a></li>
                       <li><a href="#">Blogs</a></li>
                       <li><a href="#">About Us</a></li>
                    </ul>
                 </div>
                 <div className="col-md-3 compny-sec">
                    <h3>SUPPORT</h3>
                    <ul>
                       <li><a href="#">Help</a></li>
                       <li><a href="#">Feedback</a></li>
                       <li><a href="#">FAQ’s</a></li>
                       <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                 </div>
                 <div className="col-md-2 compny-sec">
                    <h3>REACH</h3>
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
                    <li><a href="#"><i className="fa fa-facebook icon-style" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin icon-style" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter icon-style" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram icon-style" aria-hidden="true"></i></a></li>
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
