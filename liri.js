require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");

var command = process.argv[2];
var subject = process.argv.slice(3).join(" ");

function concert() {
    axios.get("https://rest.bandsintown.com/artists/" + subject + "/events?app_id=codingbootcamp")
    .then(function(response) {
        for (i = 0; i < 5; i++) {
            var date = moment(response.data[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a");
            console.log("\nVenue: " + response.data[i].venue.name + "\nLocation: " + response.data[i].venue.city + ", " + response.data[i].venue.region + "\nDate: " + date + "\n\n-------------------");
        }
    })
};

function song() {
    spotify.search({ type: 'track', query: subject },
    function(err, response) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(response.tracks.items[0]);
      });
}

switch(command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        song();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        random();
        break;
    default:
        console.log("Not a recognized command");
        break;
}