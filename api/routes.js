
//Configures / Handles API routes
module.exports = (app) => {
    "use strict";

    //TODO: THis should probably switch with environment val of some type.
    var config = require('../config/config.dev');

    var mongoose = require("mongoose");
    mongoose.connect(config.mongoConnectionString);

    //Get Models
    var List = require("./models/list-model");

    var express = require('express');

    var apiRouter = express.Router();
    apiRouter.get('/', (req, res) => {
        "use strict";

        res.json({ message: 'Bye!!'});
    });

    apiRouter.route('/lists')

        .post((req, res) => {
            var list = new List();
            list.name = req.body.name;

            list.save((err) => {
                if (err) {
                    res.send(err);
                }

                res.json({ message: 'List Created'});
            })
        })

        .get((req, res) => {
            List.find(function (err, lists) {
                if (err) {
                    res.send(err);
                }

                res.json(lists);
            });
        });

    app.use('/api', apiRouter);

    app.use(function (req, res, next) {
        // res.status(404);
        // res.send("File not found");
        res.sendFile(__dirname + '../public/index.html');
    });

}
