'use strict';

let $ = require("jquery");
let db = require("./movies-factory");
let dom = require("./main.js");
let tb = require("./template-builder");
let $container = $(".uiContainer--wrapper");
console.log($("#login"));
let movieArray;

// adds a click event listen to find new movie button
$("#findNewMovieBtn").click(function() {
  db.findNewMovie($('#input').val())
  .then(function(movies) {
    dom.clearInput();
    buildMovieObjects(movies.results);
  });
});

// $(document).on("click", ".delete-btn", function() {
//   let songId = $(this).data("deleteId");
//   db.deleteSong(songId)
//   .then( (song) => {
//     console.log("song deleted", song);
//     module.exports.loadSongsToDom();
//   })
//   .catch( (err) => {
//     console.log("Song could not be detected", err.statusText);
//   });
// });

// adds a click event listener for the deleteMovieBtn id and runs an anonymous function
$(document).on("click", "#deleteMovieBtn", function() {
  // sets movieId to equal the data within the movie card that is being selected and setting it to delete
  let movieId = $(this).closest(".movie");
  // passes the movieId into the deleteMovie function within the movies-factory
  db.deleteMovie(movieId)
  // then run an anonymous function while epecting movie to pass through
  .then((movie) => {
    // console log stating that movie got deleted and shows which movie it was
    console.log("movie deleted", movie);
    // exports and executes storeMovieData
    module.exports.storeMovieData();
  })
  // anonymous function that expects err to pass through it on the catch 
  .catch((err) => {
    // console log stating error is move could not be deleted
    console.log("Could not delete movie", err.statusText);
  });
});

// adds a click event listener to the add to watchlist button
$(document).on("click", "#addToWatchlist", function() {
  extractObjToAdd($(this).closest(".movie").attr("id"));
		// $container.html(movieForm);
});

// adds a click event listener to the show unwatched button
$(document).on("click", "#showUnwatched", function() {
	db.showUnwatched()
	.then( (movie) => {
		let movieList = tb.displayMovieData(movie);
    $('.container').html(movieList);
	});
});

$(document).on("click", "#showWatched", function() {
	db.showWatched()
	.then( (movie) => {
		let movieList = tb.displayMovieData(movie);
    $('.container').html(movieList);
	});
});

$(document).on("click", "#watchedMovieBtn", function() {
		extractObjToAdd($(this).closest(".movie").attr("id"));
		// $container.html(movieForm);
});

// defines function extract objects to add while expecting id to be passed in (from line 54)
function extractObjToAdd(id) {
	movieArray.forEach( function(movie) {
		console.log("id", id, movie.id);
		if(id == movie.id) {
			db.addToWatchList(movie)
			.then( () => {
				console.log("remove", $(`#${movie.id}`));
				$(`#${movie.id}`).remove();
			});
		}
	});
}

// defines function storeMovieData while expecting movies to be passed in
function storeMovieData(movies) {
    movieArray = movies;
    let movieList = tb.displayMovieData(movies);
    $('.container').html(movieList);
}

// defines function buildMovieObjects and expets movies to be passed in (from line 16)
function buildMovieObjects(movies) {
	let newMovieArr = [];
	movies.forEach( function(movie) {
		let newMovieObj = {
			title: movie.title,
			year: movie.release_date,
			poster: `http://image.tmdb.org/t/p/w500${movie.poster_path}`,
			id: movie.id,
			cast: [],
			summary: movie.overview,
			rating: 0,
			watched: false
		};
		newMovieArr.push(newMovieObj);
	});
	storeMovieData(newMovieArr);
}
