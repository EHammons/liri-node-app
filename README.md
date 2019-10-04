# liri-node-app
> This is a command line node app that takes in parameters and gives you back data.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Using Bandsintown, Spotify and OMBD, the user can chose from four options:
* node liri.js concert-this "artist"
* node liri.js spotify-this-song "song"
* node liri.js movie-this "movie"
* node liri.js do-what-it-says
* Choices must be input with something in place of the quotes
<br>    (ex: node liri.js movie-this Independence Day)

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* Bands in Town Artist Events API
* Spotify API
* OMDB API
* JavaScript
* Nodejs

## Setup
npm install axios, fs, moment and node-spotify-api <br>
A Spotify ID and Secret will be needed.

## Code Examples
Show examples of usage:
`switch(command) {
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
        console.log("\nNot a recognized command. \nPlease try again in the following format: \nnode liri.js concert-this <artist>\nnode liri.js spotify-this-song <song>\nnode liri.js movie-this <movie>\nnode liri.js do-what-it-says\nRemember to input your choices in place of the brackets (ex: node liri.js movie-this Independence Day)");
        break;
};`

## Features
List of features ready and TODOs for future development
* Awesome feature 1
* Awesome feature 2
* Awesome feature 3

To-do list:
* Wow improvement to be done 1
* Wow improvement to be done 2

## Status
Project is: _in progress_, _finished_, _no longer continue_ and why?

## Inspiration
Add here credits. Project inspired by..., based on...

## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!