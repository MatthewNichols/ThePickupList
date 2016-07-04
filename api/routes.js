
//Configures / Handles API routes
module.exports = (app) => {
    "use strict";

    //TODO: THis should probably switch with environment val of some type.
    var config = require('../config/config.dev');

    var mongoose = require("mongoose");
    mongoose.connect(config.mongoConnectionString);

    //Get Models
    var Greeting = require("./models/greeting");


    var express = require('express');
    var router = express.Router();

    router.get('/', (req, res) => {
        "use strict";

        res.json({ message: 'Bye!!'});
    });

    router.route('/greetings')

        .post((req, res) => {
            var greeting = new Greeting();
            greeting.phrase = req.body.phrase;
            greeting.name = req.body.name;

            greeting.save((err) => {
                if (err) {
                    res.send(err);
                }

                res.json({ message: 'Greeting Created'});
            })
        })

        .get((req, res) => {
            Greeting.find(function (err, greetings) {
                if (err) {
                    res.send(err);
                }

                res.json(greetings);
            });
        });



    app.use('/api', router);


}
