import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class App extends Component{
    render() {
        return (
            <div>
                <h1>Title</h1>
                <div>{this.props.children}</div>
            </div>
        );
    }
}