import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, browserHistory } from 'react-router';
import { routerMiddleware, push, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

require("../style/main.scss");

//console.log(reducers);
const store = createStore(
    // combineReducers({
    //     ...reducers,
    //     routing: routerReducer
    // }),
    reducers,
    applyMiddleware(promise, routerMiddleware(browserHistory)),
    window.devToolsExtension && window.devToolsExtension()
);
  //  applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('appContainer')
);
