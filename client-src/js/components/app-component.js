import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class App extends Component{
    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}