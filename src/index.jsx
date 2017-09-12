import React from 'react';
import 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './container/home'
import App from './container/app'
import ContactUsContainer from './container/contactUsContainer'
import ProductPageContainer from './container/product'
import AboutUsContainer from './container/aboutUs'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import reducer from './reducers/index';

// -for iPhone iPad safari
if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
  fetch = require('whatwg-fetch');
}

const store = createStore(reducer, {}, compose(
      applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f,
     ));
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
    <Route path='/' >
        <IndexRoute component={Home}/>
        <Route path='app' component={App}/>
        <Route path='contactus' component={ContactUsContainer}/>
        <Route path='product' component={ProductPageContainer}/>
        <Route path='aboutus' component={AboutUsContainer}/>
    </Route>
</Router>
</Provider>,
 document.getElementById("app"));
