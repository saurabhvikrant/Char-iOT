import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './container/home'
import App from './container/app'
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
    </Route>
</Router>,
 document.getElementById("app"));
