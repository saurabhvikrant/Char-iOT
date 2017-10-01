import React from 'react';
import Footer from '../generic/footer';
import Header from '../generic/header';
import LoadingIcon from '../generic/LoadingIcon';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import $ from 'jquery';

import ProductPage from './../components/product/product';
import * as productActions from '../actions/product.js';

class ProductPageContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		$(window).ready(function() {
			window.scrollTo(0, 0);
			$("#ScrollTop").click(function() {
				$('html, body').animate({
					scrollTop: $("#top4").offset().top
				}, 2000);
			});
		});
		this.props.onRequestProductList()
	}
	render() {
		let {showLoading} = this.props.frontend;
		return (
			<div className="main">
				<div>
					<Header/>
				</div>
				<div id="ScrollTop">
					<i className="fa fa-chevron-up" aria-hidden="true"></i>
				</div>
				<div id='top4' className="p50">
					<LoadingIcon loading={this.props.frontend} {...this.props}/>
					<ProductPage Products={this.props.productList} {...this.props}/>
				</div>
				<Footer/>
			</div>
		)
	}
}
function mapStateToProps(state) {
	let products = state.productList.toJS();
	let frontend = state.productList.toJS();
	return {
    frontend: frontend.show_loading,
    productList: products.products
  };
}

const mapDispatchToProps = (dispatch) => {
	return {
		onRequestProductList: () => {
			return dispatch(productActions.productList())
		}
	}
}

const VisibleProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);
const RouterVisibleProductPageContainer = withRouter(VisibleProductPageContainer);

export default RouterVisibleProductPageContainer;
