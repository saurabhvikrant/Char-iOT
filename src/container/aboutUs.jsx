import React from 'react';
import Footer from '../generic/footer';
import Header from '../generic/header';
import AboutUs from './../components/aboutUs/aboutUs';
import $ from 'jquery';

export default class AboutUsContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		window.scrollTo(0, 0);
		$(window).ready(function() {
			window.scrollTo(0, 0);
			$("#ScrollTop").click(function() {
				$("html, body").animate({scrollTop: 0}, "slow");
				return false;
			});
		});
	}
	render() {
		return (
			<div className="main">
				<div>
					<Header/>
				</div>
				<div id="ScrollTop">
					<i className="fa fa-chevron-up" aria-hidden="true"></i>
				</div>
				<div id='top1' className="p50">
					<AboutUs/>
				</div>
				<Footer/>
			</div>
		)
	}
}
