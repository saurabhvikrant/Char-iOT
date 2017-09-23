import React from 'react';
import logo from '../images/logo.png'
import '../../styles/index.scss';
window.jQuery = require('jquery');
window.$ = require('jquery');
import $ from 'jquery';
const baseUrl = 'http://localhost:8888';

const TestData = require('./generic.json');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: ''
		}
	}

	render() {
		$(window).scroll(function() {
			let scrollAmount = $(window).scrollTop();
			if (scrollAmount > 10) {
				$('#header').addClass('header-sticker ');
			} else {
				$('#header').removeClass('header-sticker');
			}
		})
		//   $('#myNavbar > ul.nav li a').click(function(e) {
		//     var $this = $(this);
		//     $this.parent().siblings().removeClass('active').end().addClass('.navbar-toggle');
		//     e.preventDefault();
		// });
		let headerData = TestData.header.map((val, i) => {
			return (
				<li key={i}>
					<a href={val.link}>{val.name}</a>
				</li>
			);
		});
		var selector = '.nav li';
		$(selector).on('click', function() {
			$(selector).removeClass('active');
			$(selector).removeClass('.navbar-toggle');
			$(this).addClass('.navbar-toggle');
		});
		return (
			<div id="fullpage">
				<article className="section right" id="section0">
					<header style={{
						'backgroundColor': '#FFFFFF'
					}}>
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-12 col-xs-12" id="header">
									<div className="logo-header col-md-3 col-xs-6 text-left p10">
										<a href="#/">
											<img src={logo} className="img-width"></img>
										</a>
									</div>
									<div className="col-md-7 col-sm-10 col-xs-3">
										<nav className="navbar navbar-default " style={{
											'backgroundColor': '#FFFFFF'
										}}>
											<div className="navbar-header">
												<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
												</button>
												<div className="navigation collapse navbar-collapse" id="myNavbar">
													<ul className="nav navbar-nav">
														{headerData}
													</ul>
												</div>
											</div>

										</nav>
									</div>
									<div className="col-md-2 col-sm-1 col-xs-3 p10">
										<a href="#" className="pull-right ">
											<button type="button" className="btn btn-warning border-radius-25" id="header-top-login">Login</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</header>
				</article>
			</div>

		)
	}
}
