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
              <div className="col-md-6 logo-sec">
                 <ul>
                    <li className="logo-header"><img src={footer}></img></li>
                    <li><i className="fa fa-user"></i> K-88 A, Second Floor, New Mahaveer Nagar,
                       Tilak Nagar,<br/> West Delhi New Delhi,
                       India - 110018
                    </li>
                    <li><i className="fa fa-user"></i> info@chariotco.in</li>
                    <li><i className="fa fa-user"></i> +91-9785967626<br/>
                       +91-9785967626
                    </li>
                 </ul>
              </div>
              <div className="col-md-4 compny-sec">
                 <h3>COMPANY</h3>
                 <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">About Us</a></li>
                 </ul>
              </div>
              <div className="col-md-2 compny-sec">
                 <h3>SUPPORT</h3>
                 <ul>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Feedback</a></li>
                    <li><a href="#">FAQ’s</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
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
                 <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              </ul>
           </div>
           <div className="col-md-4 text-right wow fadeInRight text-right">
              <p className="footer-botem-style">CHARIOT TECH. PVT. LTD. @ 2017</p>
              <br/>
              <p className="footer-botem-style">ALL RIGHTS RESERVED</p>
           </div>
        </div>
     </div>
  </div>
</div>
)
}
}
