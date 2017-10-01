import Immutable from 'immutable'

let initialState = {
  show_loading: '',
  products: {},
  error: ''
}
export function productList (state = Immutable.fromJS(initialState), action) {
  if (action.type === 'ACTION_SHOW_LOADING') {
    return state.set('show_loading', '1');
  } else if (action.type === 'ACTION_HIDE_LOADING') {
    return state.set('show_loading', '');
  }	else if (action.type === 'ACTION_SUCCESS_PRODUCTLIST') {
    return state.set('products', action.payload)
  } else if (action.type === 'ACTION_UNSUCCESS_PRODUCTLIST') {
    return state.set('error', action.payload)
  } else {
    return state
  }
}
