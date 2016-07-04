
//Configures / Handles API routes
module.exports = function(app) {
    "use strict";

    var express = require('express');

    var router = express.Router();
    router.get('/', function(req, res) {
        "use strict";

        res.json({ message: 'Bye!!'});
    });
    app.use('/api', router);


}
