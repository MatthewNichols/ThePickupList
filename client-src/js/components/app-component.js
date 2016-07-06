import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import Lists from './lists-component';


export default function () {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Lists} ></Route>
        </Router>
    );

}