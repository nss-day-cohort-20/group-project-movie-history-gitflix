'use strict';

let $ = require("jquery");
let db = require("./movies-factory");
let dom = require("./main.js");
let tb = require("./template-builder");
console.log($("#login"));
let movieArray;

// defines functions findNewMoviesBtn- when the user enters the name of a movie in the input field and clicks on the find new movie button, the database is pulled up and all movies related to what the user entered in the input are displayed in the moviesContainer

$("#findNewMovieBtn").click(function(){
 //  console.log($('#input').val(), "hello");
	db.findNewMovie($('#input').val())
	.then(function(movies) {
		dom.clearInput();
		// console.log(movies.results);
		storeMovieData(movies.results);
	});
});

function storeMovieData(movies) {
	movieArray = movies;
	console.log("Movies = ", movies);
	tb.displayMovieData(movies);
}


// function buildSongObj() {
//  let songObj = {
//     title: $("#form--title").val(),
//     album: $("#form--album").val(),
//     artist: $("#form--artist").val(),
//     year: $("#form--year").val()
//   };
//   return songObj;
// }

// module.exports.loadSongsToDom = () => {
//   db.getSongs()
//   .then( (songData) => {
//     console.log("songData", songData);
//     let songList = templates.makeSongList(songData);
//     $container.html(songList);
//   });
// };



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
