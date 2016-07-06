import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Routes from './routes';

require("../style/main.scss");

ReactDom.render(
    <Routes></Routes>,
    document.getElementById('appContainer'))
