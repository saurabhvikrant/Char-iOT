import React from 'react';
import '../../../styles/index.scss';
import piechart from '../../images/pie-chart.png';
import {hashHistory} from 'react-router'
const TestData = require('./product.json');

export default class ProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			TestData: '',
			products: this.props.Products || null
		}
	}
	componentWillReceiveProps(props) {
		window.scrollTo(0, 0);
		this.setState({products: props.Products});
	}

	componentWillMount() {
		window.scrollTo(0, 0);
		$(window).ready(function() {
			$("#first").addClass('fade-in-up').delay(400).removeClass('hidden');
			$("#sec").addClass('fade-in-up').delay(2500).removeClass('hidden');

		});

	}
	render() {
		let FlexBoxData = TestData.body.map((val, i) => {
			return (
				<div key={i} className=" list-section col-md-12 zero-padding">
					<ul style={{
						'marginLeft': '5%'
					}}>
						<li>{val.name}</li>
					</ul>
				</div>
			);
		});
		let FlexBoxHead = TestData.head.map((data, k) => {
			return (
				<div key={k} className="row">
					<div className="col-md-6 varune-style">
						<h2>{data.head}</h2>
						<h4>{data.subhead}</h4>
						<h3>{data.price}</h3>
					</div>
				</div>
			);
		});
		let {products} = this.state;

		let dataBody = [];
		dataBody = products && products.productDetails && products.productDetails.Smart_Water_Solution
		let list = dataBody && dataBody.map((val, idx) => {

			return (
				<ul key={idx} className="slides">
					<li>
						<div className="col-md-12">
							<div className="col-md-7 company-page-middle zero-padding">
								<div className="row">
									<div className="col-md-6 varune-style">
										<h2>{val.productName}</h2>
										<p className="varune-style-p">{val.productDescription}</p>
										<h3>{val.price}</h3>
									</div>
								</div>
								<ul className="navigation-tab nav nav-tabs">
									<li className="active">
										<a data-toggle="tab" href="#created">FEATURES</a>
									</li>
									<li>
										<a data-toggle="tab" href="#give">
											SPECIFICATION</a>
									</li>
									<li>
										<a data-toggle="tab" href="#give2">ANALYTICS FEATURES</a>
									</li>
								</ul>
								<div className="tab-content">
									<div id="created" className="tab-pane fade in active">
										<div className=" list-section col-md-12 zero-padding" style={{
											"marginLeft": "5%"
										}}>
											<ul>
												<li className='display-linebreak'>
													{val.features}
												</li>
											</ul>
										</div>
									</div>
									<div id="give" className="tab-pane fade">
										<div className="list-section col-md-12 zero-padding">
											<ul>
												<li className='display-linebreak'>
													{val.specifications}
												</li>
											</ul>
										</div>
									</div>
									<div id="give2" className="tab-pane fade">
										<div className="list-section col-md-12 zero-padding">
											<ul>
												<li className='display-linebreak'>
													{val.analyticsFeatures}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-5 chart-section">
								<div id="demo-pie-2" className="pie-title-center" data-percent="80">
									<span className="pie-value"></span>
								</div>
								<img src={piechart}></img>
							</div>
						</div>
					</li>
				</ul>
			)
		});

		return (
			<section className="p50">
				<div className="container">
					<div className="row">
						<div id='first' className="products-heading col-md-12 wow fadeInUp">
							<h2 className="heading-title text-center">Utility Meter</h2>
							<p className='products-heading3-p '>NRS Chariot Tech Pvt. Ltd. is an Indian start-up providing end-to-end internet of things (IoT) and M2M solutions. We at our innovation lab develop smart IoT based solutions bring.
							</p>
							<div id="myCarousel" className="carousel slide" data-ride="carousel">
								<ol className="carousel-indicators">
									<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
									<li data-target="#myCarousel" data-slide-to="1"></li>
									<li data-target="#myCarousel" data-slide-to="2"></li>
								</ol>
								<div className="carousel-inner">
									<div className="item active">
										<ul className="slides">
											<li>
												{list}
											</li>
										</ul>
									</div>
									<div className="item">
										{list}
									</div>
									<div className="item">
										{list}
									</div>
								</div>
								<a className="left carousel-control" href="#myCarousel" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="right carousel-control" href="#myCarousel" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div id='sec' className="products-heading col-md-12 wow fadeInUp">
							<h2 className="heading-title text-center">Smart Street Light</h2>
							<p>NRS Chariot Tech Pvt. Ltd. is an Indian start-up providing end-to-end internet of things (IoT) and M2M solutions. We at our innovation lab develop smart IoT based solutions bring.
							</p>
							<div id="myCarousel" className="carousel slide" data-ride="carousel">
								<ol className="carousel-indicators">
									<li data-target="#myCarousel1" data-slide-to="0" className="active"></li>
									<li data-target="#myCarousel2" data-slide-to="1"></li>
									<li data-target="#myCarousel3" data-slide-to="2"></li>
								</ol>
								<div className="carousel-inner">
									<div className="item active">
										<ul className="slides">
											<li>
												{list}
											</li>
										</ul>
									</div>
									<div className="item">
										{list}
									</div>
									<div className="item">
										{list}
									</div>
								</div>
								<a className="left carousel-control" href="#myCarousel" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
									<span className="sr-only">Previous</span>
								</a>
								<a className="right carousel-control" href="#myCarousel" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
					</div>
				</div>

			</section>

		)
	}
}
