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
    if (!subject) {
        subject = "Celine Dion"
    };
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
};

function movie() {
    if (!subject) {
        subject = "Mr. Nobody"
    };
    var queryUrl = "http://www.omdbapi.com/?t=" + subject + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function(response) {
          console.log("\nMovie Title: " +response.data.Title + "\nRelease Year: " +response.data.Year + "\nIMDB Rating: " +response.data.imdbRating + "\nRotten Tomatoes Rating: " +response.data.Ratings[1].Value + "\nCountry: " +response.data.Country + "\nLanguage: " +response.data.Language + "\nPlot: " +response.data.Plot + "\nActors: " +response.data.Actors);
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
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