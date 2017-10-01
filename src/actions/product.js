import axios from 'axios';
import {createAction} from 'redux-actions';
import {CONFIG} from '../config/index';
import * as constants from './constant.js'
import {show_loading, hide_loading} from './frontend';

export function success_productList(data) {
	return createAction(constants.ACTION_SUCCESS_PRODUCTLIST)(data)
}

export function err_productList(data) {
	return createAction(constants.ACTION_UNSUCCESS_PRODUCTLIST)(data)
}

function getAsync_get_product_list() {
	return axios.post(`http://stag.chariotco.in:8080/olv/web/device/product/details`);
}
export function productList() {
	return (dispatch, getState) => {
		return new Promise(function(resolve, reject) {
			dispatch(show_loading());
			return getAsync_get_product_list().then((res) => {
				dispatch(hide_loading());
				if (res.status === 200) {
					dispatch(success_productList(res.data.data));
					resolve(res);
				} else {
					dispatch();
				}
			}, (error) => {
				dispatch(hide_loading());
			})
		})
	}
}
