import React from 'react';
import logo from '../images/logo.png'
import '../../styles/index.scss';
window.jQuery = require('jquery');
window.$ = require('jquery');
import $ from 'jquery';
import {notify} from '../services/notify';
const TestData = require('./generic.json');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: ''
		}
		this.loginPage = this.loginPage.bind(this);
	}
	loginPage(){
		notify('', 'Login Not Required Yet !', 'info');
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
		let headerData = TestData.header.map((val, i) => {
			return (
				<li key={i}>
					<a href={val.link} className={window.location.href.indexOf(val.link) >= 0 ? 'active' : ''}>{val.name}</a>
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
									<div className="logo-header col-md-2 col-sm-2 col-xs-4 text-left">
										<a href="#/">
											<img src={logo} className="img-width"></img>
										</a>
									</div>
									<div className="col-md-8 col-sm-8 col-xs-1">
										<nav className="navbar navbar-default " style={{'backgroundColor': '#FFFFFF'}}>
											<div className="navbar-header">
												<button type="button" id="navbar-button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
												</button>
												<div className="navigation navigation-responsive collapse navbar-collapse" id="myNavbar">
													<ul className="nav navbar-nav">{headerData}</ul>
												</div>
											</div>
										</nav>
									</div>
									<div className="col-md-2 col-sm-1 col-xs-5">
											<button onClick={this.loginPage} type="button" className="btn btn-warning border-radius-25" id="header-top-login">Login</button>
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
