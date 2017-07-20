'use strict';

let $ = require("jquery");
let db = require("./movies-factory");
console.log($("#login"));

// defines functions findNewMoviesBtn- when the user enters the name of a movie in the input field and clicks on the find new movie button, the database is pulled up and all movies related to what the user entered in the input are displayed in the moviesContainer

$("#findNewMovieBtn").click(function() {
	db.findNewMovie($('#input').val())
	.then(function(movies) {
		console.log(movies.results);
		
	});
});

// $("#searchUserMovieBtn").click(function() {
// 	db.searchUserMovie($('#input').val());
// });

// $("#watchedMovieBtn").click(function (){});
// $("#addToWatchList").click(function (){});
// $("#ratingStarsBtn").click(function (){});
// $("#deleteMoviebtn").click(function (){});
// $(".movieContainer").click(function (){});
// let showUnwatched = "";
// let showWatched = "";
// let selectedMovie = "";


