import React from 'react';
import footer from '../images/footer-logo.png'
import lorawan from '../images/lorawan.png'
const TestData = require('./generic.json');
import $ from 'jquery'

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: ''
		}
	}
	componentWillMount() {
		$(window).ready(function() {
			window.scrollTo(0, 0);
			$("#first-m").addClass('fade-in-up').delay(200).removeClass('hidden');
			$("#sec-m").addClass('fade-in-up').delay(2500).removeClass('hidden');
			$("#third").addClass('fade-in-up').delay(5500).removeClass('hidden')
		});
	}
	render() {
		let footerData = TestData.footer.map((val, i) => (
			<li className='f-w-400' key={i}>
				<a href="">{val.name}</a>
			</li>
		));
		let footerNextData = TestData.nextFooter.map((val, i) => (
			<li className='f-w-400' key={i}>
				<a href="">{val.name}</a>
			</li>
		));
		let mediaFooter = TestData.mediaFooter.map((val, i) => (
			<li className='f-w-400' key={i}>
				<a href="">{val.name}</a>
			</li>
		));

		return (
			<div>
				<section id="first-m" className="story-photo section">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-12 partne-section"><h2>Partners</h2></div>
							<div className="col-sm-12 partner-img-section">
								<div className='row'>
									<div className='col-sm-4'>
										<img src={lorawan} className="img-90 max-width-300 m-a-c"/>
									</div>
									<div className='col-sm-4'>
										<img src={lorawan} className="img-90 max-width-300 m-a-c"/>
									</div>
									<div className='col-sm-4'>
										<img src={lorawan} className="img-90 max-width-300 m-a-c"/>
									</div>
								</div>
							</div>
							<div className="col-sm-12 partne-section"><h2>Media</h2></div>
							<div className="col-sm-12 partner-img-section">
								<div className='row p-y'>
									<div className='col-sm-4'>
										<img src={lorawan} className="img-90 max-width-300 m-a-c"/>
									</div>
									<div className='col-sm-4'>
										<img src={lorawan} className="img-90 max-width-300 m-a-c"/>
									</div>
									<div className='col-sm-4'>
										<img src={lorawan} className="img-90 max-width-300 m-a-c"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<article className="section footer-article" id="section5">
					<div id="stop" className="scrollTop">
						<span><a href=""><i className="fa fa-chevron-up" aria-hidden="true"></i></a></span>
					</div>
				</article>
				<footer className="footer">
					<div className="container-fluid">
						<div className="row">
							<div id="sec-m" className="col-md-12 wow fade-in-up">
								<div className="row">
									<li><a href="index.html"><img src={footer} className="img-90 max-width-150"/></a></li>
								</div>
								<div className="row">
									<div className="col-md-4 logo-sec">
										<ul>
											<li>
												<i className="fa fa-flag-o" aria-hidden="true"></i>
												<p>K-88 A, Second Floor, New Mahaveer Nagar,&nbsp; &nbsp;&nbsp; Tilak Nagar, West Delhi New Delhi,</p> India - 110018
											</li>
											<li><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;info@chariotco.in</li>
											<li><i className="fa fa-mobile mobile-style" aria-hidden="true"></i>&nbsp; +91-9785967626<br/>&nbsp; &nbsp;&nbsp; +91-9785967626</li>
										</ul>
									</div>
									<div className="col-md-3 compny-sec">
										<h3>COMPANY</h3>
										<ul>{footerData}</ul>
									</div>
									<div className="col-md-3 compny-sec">
										<h3>SUPPORT</h3>
										<ul>{footerNextData}</ul>
									</div>
									<div className="col-md-2 compny-sec">
										<h3>REACH</h3>
										<ul>{mediaFooter}</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
				<div id="third" className="footer-bottom">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-4 wow fadeInLeft text-left">
								<p className="footer-botem-style">Designed By- Phanendra Jangid</p>
							</div>
							<div className="col-md-4 wow fadeInLeft text-left footer-social text-center">
								<ul>
									<li><a><i className="fa fa-facebook icon-style" aria-hidden="true"></i></a></li>
									<li><a><i className="fa fa-linkedin icon-style" aria-hidden="true"></i></a></li>
									<li><a><i className="fa fa-twitter icon-style" aria-hidden="true"></i></a></li>
									<li><a><i className="fa fa-instagram icon-style" aria-hidden="true"></i></a></li>
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
