
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//Configure API Routes
require('./api/routes')(app);

//Set up Static files
app.use(express.static('public'));

app.listen(port);

console.log(`running on port ${port}`);
