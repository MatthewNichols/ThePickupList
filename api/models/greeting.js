//A fake model to complete the "Hello World" phase of the project

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GreetingSchema = new Schema({
    phrase: String,
    name: String
});

module.exports = mongoose.model('Greeting', GreetingSchema);