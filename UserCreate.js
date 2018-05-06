var weather = require("weather-js"); // Use weather-js npm package to do weather searches
var moment = require("moment");
var fs = require("fs"); // To read & write files


// Constructor function to create User objects
var User = function(name, location) {
    this.name = name;
    this.location = location;
    this.date = moment().format('LLLL');

    this.getWeather = function() {
        weather.find({ search: this.location, degreeType: "F"}, function(err, result){
            if (err) {
                console.log(err);
            }
            console.log(JSON.stringify(result, null, 2));
        });
    }
}

var Joanne = new User("Joanne", "Plano");
Joanne.getWeather();

