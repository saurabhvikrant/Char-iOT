import React from 'react';
import 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './container/home'
import App from './container/app'
import ContactUsContainer from './container/contactUsContainer'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

injectTapEventPlugin();


// -for iPhone iPad safari
if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
  fetch = require('whatwg-fetch');
}

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path='/' >
        <IndexRoute component={Home}/>
        <Route path='app' component={App}/>
        <Route path='contactus' component={ContactUsContainer}/>
    </Route>
</Router>,
 document.getElementById("app"));
