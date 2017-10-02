import React from 'react';
import aboutImg from '../../images/contact-img.png';
import lorawan from '../../images/lorawan.png';
import arrow from '../../images/down-arrow-in-small-circle.png';
import men from '../../images/men.png';
import $ from 'jquery';
const TestData = require('./about.json');

export default class AboutUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: ''
		}
	}
	componentDidMount() {
		$("#img-tab").click(function() {
			$('html, body').animate({
				scrollTop: $("#team").offset().top
			}, 1000);
		});
	}

	componentWillMount() {
		window.scrollTo(0, 0);
		$(window).ready(function() {
			$("#first").addClass('fade-in-up').delay(100).removeClass('hidden');
			$("#sec").addClass('fade-in-up').delay(3500).removeClass('hidden');
		});

	}
	render() {
		let aboutUsData = TestData.about.map((val, i) => (
			<span className="content" key={i}>
				<h2>About us</h2>
				{val.data}
			</span>
		));

		let headUsData = TestData.body.map((val, j) => (
			<span key={j}>
				<h3>{val.heading}</h3>
				<p>{val.subHead}</p>
				<h3>{val.vision}</h3>
				<p>{val.subData}</p>
			</span>
		));

		let companyData = TestData.head.map((val, k) => (
			<div key={k} className="col-md-4 p-a iot-section-second-heading">
				<div className="men-box">
					<img src={men} className="img-width"/>
				</div>
				<h4 className="text-center name-of-dp p-a-xs">{val.heading}</h4>
				<h6 className="co-founder-style p-a-sm">{val.position}</h6>
				<p className="p-a">{val.subhead}</p>
			</div>
		));
		return (
			<div>
				<section className="story-photo section-padding first">
					<div className="container-fluid">
						<div className="row p-a wow iot-platform-headeing">
							<div id="first" className="col-xs-12 wow fade-in-up">
								<div className="col-sm-6 ">
									<div className="p-a-md app-list">{aboutUsData}</div>
									<div className="p-a-md mission-style">{headUsData}</div>
								</div>
								<div className="col-sm-6 text-center"><img src={aboutImg} className="img-90 max-width-500"/></div>
							</div>
						</div>
					</div>
				</section>
				<section className="story-photo section-padding second">
					<div className="container-fluid">
						<div className="row p-a">
							<div id="sec" className="col-xs-12 wow fade-in-up">
								<h2 id='team' className="heading-title-squad text-center">Squad</h2>
								{companyData}
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
