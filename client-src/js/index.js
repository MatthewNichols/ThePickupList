import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './components/app-component';

require("../style/main.scss");

ReactDom.render(
    <App></App>,
    document.getElementById('appContainer'))
