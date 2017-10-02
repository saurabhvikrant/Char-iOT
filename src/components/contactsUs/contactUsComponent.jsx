import React from 'react';
import contactImg from '../../images/contact-img.png';
const TestData = require('./contactus.json');

export default class ContactUsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: ''
		}
	}
	render() {
		let contactUsData = TestData.body.map((val, i) => (
			<p key ={i} className="content-of-contact">
				{val.name}
			</p>
		));
		return (
			<div className="first">
				<section className="story-photo section-padding first">
					<div className="container-fluid">
						<div className="row p-a wow iot-platform-headeing">
							<div className="col-sm-6">
								<div className="app-list">
									<label className="heading-title-contact"><b>Contact us</b></label>
									<span className="content-of-contact">{contactUsData}</span>
								</div>
								<div className="inquries-style">
									<label className="heading-title-contact">Inquiries</label>
									<p className="content-of-contact">
										If u have any query. Tell us about it.<br/>
										Mail- info@chariotco.in
										<br/>
										Mobile- +919785967626
									</p>
									<label className="heading-title-contact">Careers</label>
									<p className="content-of-contact">
										We are always looking for talented people.<br/>
										Mail- careers@chariotco.in<br/>
										Mobile- +91 9785967626
									</p>
								</div>
							</div>
							<div className="col-sm-6 text-center">
								<img src={contactImg} className="img-90 max-width-400"/>
							</div>
						</div>
					</div>
				</section>
			</div>
		)

	}
}
