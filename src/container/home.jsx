import React from 'react';
import $ from 'jquery';
import Header from '../generic/header';
import Footer from '../generic/footer';
import IotSection from '../components/iotSection';
import AppSection from '../components/appSection';
import FlexBox from '../components/flexBox';

import banner from '../images/banner.jpg';
import choose from '../images/choose.jpg';
// import * as fullPage from '../js/bundle.js';

import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';

const TestData = require('../components/home.json');
var styles = {
	root: {position: 'relative'},
	section_1: {
		backgroundImage: `url(${banner})`,
		overflow: 'hidden',
		backgroundSize: "100% 100%",
		height: "732px"
	},
	video_background: {
		top: '50%',
		left: "50%",
		marginTop: "15%",
		minWidth: "100%",
		minHeight: "100%",
		zIndex: '-100',
		transform: "translateX(-50%) translateY(-50%)",
		backgroundSize: "cover",
		transition: "1s opacity",
		display: "inline-block",
		verticalAlign: "baseline"
	}
}
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: ''
		}
	}
	componentWillMount() {
		$(window).ready(function() {
			window.scrollTo(0, 0);
			$("#first").addClass('fade-in-up').delay(100).removeClass('hidden');
			$("#sec").addClass('fade-in-up').delay(2500).removeClass('hidden');
			$("#third").addClass('fade-in-up').delay(5500).removeClass('hidden');
			$("#fourth").addClass('fade-in-up').delay(6500).removeClass('hidden');
			$('#ScrollTop').click(function() {
				$("html, body").animate({scrollTop: 0}, "veryslow");
				return false;
			});
			$('#ScrollBottom').click(function() {
				$("html, body").animate({scrollBottom: 0}, "slow");
				return false;
			});
		});

		$(window).scroll(function() {
			let scrollAmount = $(window).scrollTop();
			if (scrollAmount < 500) {
				$('#ScrollTop').fadeOut("slow");
				$('#ScrollBottom').fadeOut("slow");
			} else {
				$('#ScrollTop').fadeIn("slow");
			}
		});
	}
	componentDidMount() {
		$("#banner-know-more-tab").click(function() {
			$('html, body').animate({scrollTop: $("#section2").offset().top}, 2000);
		});
	}

	render() {
		let BodySectionData = TestData.howItWorks.map((val, i) => {
			return (
				<div key={i} id="fullpage" className="col-sm-4 how-it-work-heading">
					<h4 className="text-center">{val.header}</h4>
					<img src={choose} className="img-width p20"></img>
					<p className="how-it-work-content">{val.content}</p>
				</div>
			);
		});
		return (
			<div className="main">
				<div><Header /></div>
				<div id="ScrollTop" className="Scroller"><i className="fa fa-chevron-up" aria-hidden="true"></i></div>
				<div id="ScrollBottom" className="Scroller">
					<i className="fa fa-chevron-Bottom" aria-hidden="true"></i>
				</div>
				<section className="section-1 bottom-m">
					<div style={styles.root}>
						<Video style={styles.video_background} autoPlay loop muted controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} onCanPlayThrough={() => {}}>
							<source src='http://technobrix.in/newtbx/chariot/video/chariot_main_gif_screen.mp4' type="video/mp4"></source>
							<track label="English" kind="subtitles" srcLang="en" default/>
						</Video>
					</div>
					<div className="container-fluid margin-top-p">
						<div className="col-sm-8 col-md-6 baner-inner-content">
							<h1>Smart World-Think IoT & beyond</h1>
							<p>Chariot welcomes you to the world of possibilities where we take internet of
								things to next level of inovation. Connect everything through our smart
								products and manage resources like you have never done before.</p><br/>
							<a className="btn btn-primary btn-lg border-radius-25" data-animation="animated fadeInLeft" id="banner-know-more-tab">
								Let’s Explore
							</a>
						</div>
					</div>
				</section>
				<div id='section2'>
					<section className="story-photo section-padding">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-12 wow fade-in-up p-a-md">
									<div className="row">
										<h2 className="heading-title text-center">How it works</h2>
										{BodySectionData}
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div id="first">
					<IotSection/>
				</div>
				<div id="sec">
					<FlexBox/>
				</div>
				<div id="third">
					<AppSection/>
				</div>
				<div id="fourth">
				</div>
				<Footer/>
			</div>
		)
	}

}
