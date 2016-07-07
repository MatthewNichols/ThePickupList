import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

require("../style/main.scss");

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('appContainer')
);
