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
		let aboutUsData = TestData.about.map((val, i) => {
			return (
				<p className="content" key={i}>
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
							<div id="first" className="col-md-12 zero-padding wow fade-in-up">
								<div className="col-md-12 zero-padding iot-platform-headeing">
									<h2 className="heading-title-about">About us</h2>
									<div className="col-md-6 ">
										<div className="col-md-8 app-list">
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
										<div className="col-sm-5"></div>
										<div className="col-sm-6 down-arrow-about">
											<button id="img-tab">
												<img src={arrow}></img>
											</button>
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
							<div id="sec" className="col-md-12 zero-padding wow fade-in-up">
								<div className="col-md-12 zero-padding">
									<h2 id='team' className="heading-title-squad text-center">Squad</h2>
									{companyData}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
