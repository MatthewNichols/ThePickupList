import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Hello from './components/hello';

require("../style/main.scss");

let name = "Matthew";
console.log(`Hi ${name}`);

ReactDom.render(<Hello></Hello>, document.getElementById('appContainer'))
