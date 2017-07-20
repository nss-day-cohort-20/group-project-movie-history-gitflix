'use strict';

let $ = require('jquery');
let db = require('./movies-factory');

console.log($("#login"));

let input = $("userInput").click(function (){});
let findNewMovie = $("findNewMovieBtn").click(function (){});
let searchUserMovies = $("searchUserMovieBtn").click(function (){});
let watchedMovie = $("watchedMovieBtn").click(function (){});
let addToWatchList = $("addToWatchList").click(function (){});
let ratingStarsBtn = $("ratingStarsBtn").click(function (){});
let deleteMovie = $("deleteMoviebtn").click(function (){});
let movieContainer = $("movieContainer").click(function (){});
let showUnwatched = "";
let showWatched = "";
let selectedMovie = "";

console.log("this is also running");

// defines functions findNewMoviesBtn- when the user enters the name of a movie in the input field and clicks on the find new movie button, the database is pulled up and all movies related to what the user entered in the input are displayed in the moviesContainer

module.exports.findNewMoviesBtn = () => {
	return new Promise( (resolve, reject) => {
		$("#").click(function() {
	
		});
	});
};


