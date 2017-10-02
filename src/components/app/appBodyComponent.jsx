import React from 'react';
import windows from '../../images/window.png';
import server from '../../images/server1.png';
import apple from '../../images/apple.png';
import mobile from '../../images/mobile.png';
import goal from "../../images/goals.png";
import mobilev from "../../images/mobile-venue.png";
import compare from "../../images/compare.png";
import menu from "../../images/menu.png";
import meter from "../../images/meter.png";
import stats from "../../images/stats.png";
import $ from 'jquery';


const TestData = require('./app.json');

export default class AppBodyContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: ''
		}
	}
	componentWillMount() {
		window.scrollTo(0, 0);
		$(window).ready(function() {
			$("#first").addClass('fade-in-up').delay(200).removeClass('hidden');
			$("#sec").addClass('fade-in-up').delay(2500).removeClass('hidden');
			$("#third").addClass('fade-in-up').delay(5500).removeClass('hidden')
		});

	}
	render() {
		let appData = TestData.body.map((val, i) => (
			<ul key={i}>
				<li>{val.name}</li>
			</ul>
		));
		let appBodyData = TestData.head.map((val, k) => (
			<div key={k} className="col-sm-4 iot-section-second-heading text-center">
				<h4 className="text-center">{val.heading}</h4>
				<img src={mobilev} className="p-y-lg img-90 max-width-300"/>
				<p>{val.data}</p>
			</div>
		));

		let secBodyData = TestData.section.map((val, j) => (
			<div key={j} className="col-sm-4 iot-section-second-heading text-center">
				<h4 className="text-center">{val.heading}</h4>
				<img src={mobilev} className="p-y-lg img-90 max-width-300"/>
				<p>{val.data}</p>
			</div>
		));
		return (
			<div>
				<section className="story-photo section-padding">
					<div className="container-fluid">
						<div className="row space">
							<div id="first" className="col-md-12 wow fadeInUp">
								<div className="row p-a iot-platform-headeing">
									<div className="col-sm-7">
										<div className="container-fluid">
	                    <div className="row">
	                      <div className="col-xs-12 app-list">
													{appData}
												</div>
											</div>
											<div className="row download-style">
	                      <h3>Download Now</h3>
												<div className="col-xs-4 text-center"><img src={windows} className="img-90 max-width-100"/></div>
	                      <div className="col-xs-4 text-center"><img src={server} className="img-90 max-width-100"/></div>
	                      <div className="col-xs-4 text-center"><img src={apple} className="img-90 max-width-100"/></div>
	                    </div>
										</div>
									</div>
									<div className="col-sm-5 text-center">
	                  <img src={mobile} className="max-width-300 img-90"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="story-photo section-padding">
					<div className="container-fluid">
						<div className="row">
							<div id="sec" className="col-md-12 zero-padding wow fade-in-up">
								<div className="row p-a iot-platform-headeing">{appBodyData}</div>
							</div>
						</div>
					</div>
				</section>
				<section className="story-photo section-padding">
					<div className="container-fluid">
						<div className="row">
							<div id="third" className="col-md-12 zero-padding wow fade-in-up">
								<div className="row p-a iot-platform-headeing">{secBodyData}</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
