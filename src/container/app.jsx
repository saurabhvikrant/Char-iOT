import React from 'react';
import Footer from '../generic/footer';
import Header from '../generic/header';
import AppBodyComponent from './../components/app/appBodyComponent';
import $ from 'jquery';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		$(window).ready(function() {
			window.scrollTo(0, 0);
			$("#ScrollTop").click(function() {
				$('html, body').animate({
					scrollTop: $("#top2").offset().top
				}, 2000);
			});
			$('#ScrollBottom').click(function() {
				let h = $(window).height() + $(window).scrollTop();
				$("html, body").animate({scrollTop: h}, "slow");
			});
		});
	}
	render() {
		return (
			<div className="main">
				<div><Header/></div>
				<div id="ScrollTop"><i className="fa fa-chevron-up" aria-hidden="true"></i></div>
				<div id="ScrollBottom" className="Scroller"><i className="fa fa-chevron-down" aria-hidden="true"></i></div>
				<section id='top2' className="section-1">
					<div className="container">
						<div className="row">
							<AppBodyComponent/>
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		)
	}
}
