
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();
router.get('/', function(req, res) {
    "use strict";

    res.json({ message: 'Hi'});
});
app.use('/api', router);


app.use(express.static('public'));

app.listen(port);

console.log('running on port' + port);
