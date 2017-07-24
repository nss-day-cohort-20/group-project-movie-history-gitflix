'use strict';

let $ = require("jquery");
let db = require("./movies-factory");
let dom = require("./main.js");
let tb = require("./template-builder");
let $container = $(".uiContainer--wrapper");
console.log($("#login"));
let movieArray;

$("#findNewMovieBtn").click(function(){
	db.findNewMovie($('#input').val())
	.then(function(movies) {
		dom.clearInput();
		buildMovieObjects(movies.results);
	});
});

// $(document).on("click", ".delete-btn", function() {
//     let songId = $(this).data("deleteId");
//     db.deleteSong(songId)
//     .then( (song) => {
//       console.log("song deleted", song);
//       module.exports.loadSongsToDom();
//     })
//     .catch( (err) => {
//       console.log("Song could not be detected", err.statusText);
//     });
//   });

// adds a click event listener for the deleteMovieBtn id and runs an anonymous function
$(document).on("click", "#deleteMovieBtn", function() {

	// sets movieId to equal the data within the movie card that is being selected and setting it to delete
	let movieId = $(this).closest(".movie");
	
	// passes the movieId into the deleteMovie function within the movies-factory
	db.deleteMovie(movieId)

	// then run an anonymous function while epecting movie to pass through
	.then( (movie) => {

		// console log stating that movie got deleted and shows which movie it was
		console.log("movie deleted", movie);

		// exports and executes storeMovieData
		module.exports.storeMovieData();
	})

	// anonymous function that expects err to pass through it on the catch 
	.catch( (err) => {

		// console log stating error is move could not be deleted
		console.log("Could not delete movie", err.statusText);
	});
});

$(document).on("click", "#addToWatchlist", function() {
	console.log("add watch list click worked!");
	let movieForm = buildMovieObjects();
	$container.html(movieForm);
});

// $("#searchUserMovieBtn").click(function() {
// 	db.searchUserMovie($('#input').val());
// });

// defines function storeMovieData while expecting movies to be passed in
function storeMovieData(movies) {
	movieArray = movies;
	let movieList = tb.displayMovieData(movies);
	$('.container').html(movieList);
}

function buildMovieObjects(movies) {
	let newMovieArr = [];
	movies.forEach( function(movie) {
		// console.log(movie);
		let newMovieObj = {
			title: movie.title,
			year: movie.release_date,
			poster: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
			id: movies.id,
			cast: [],
			summary: movies.overview,
			rating: 0,
			watched: false
		};
		newMovieArr.push(newMovieObj);
	});
	console.log(newMovieArr);
	storeMovieData(newMovieArr);
}


