import React from 'react';
import Footer from '../generic/footer';
import Header from '../generic/header';
import ContactUsComponent from './../components/contactsUs/contactUsComponent';
import SendMessageComponent from './../components/contactsUs/sendMessageComponent';
import $ from 'jquery';

export default class ContactUsContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		$(window).ready(function() {
			window.scrollTo(0, 0);
			$("#first").addClass('fade-in-up').delay(100).removeClass('hidden');
			$("#message").addClass('fade-in-up').delay(2500).removeClass('hidden');
		});
		$('#ScrollTop').click(function() {
			$(window).scrollTop(0);
		});
	}
	componentWillReceiveProps(props) {
		window.scrollTo(0, 0);
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
				<section id='top3' className="section-1">
					<div className="container">
						<div id="first" className="row hidden">
							<ContactUsComponent/>
						</div>
						<div id="message" className="row hidden">
							<SendMessageComponent/>
						</div>
					</div>
				</section>
				<Footer/>
			</div>
		)
	}
}
