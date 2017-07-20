'use strict';

let $ = require('jquery');
console.log($("#login"));


let input = document.getElementById("input");
let findNewMovie = document.getElementById("findNewMovieBtn");
let searchUserMovies = document.getElementById("searchUserMovieBtn");
let watchedMovie = document.getElementById("watchedMovieBtn");
let addToWatchList = document.getElementById("addToWatchList");
let ratingStarsBtn = document.getElementById("ratingStarsBtn");
let deleteMovie = document.getElementById("deleteMoviebtn");
let movieContainer = document.getElementById("movieContainer");
let showUnwatched = "";
let showWatched = "";
let selectedMovie = "";

console.log("this is running");

input.addEventListener("click");
findNewMovie.addEventListener("click");
searchUserMovies.addEventListener("click");
watchedMovie.addEventListener("click");
addToWatchList.addEventListener("click");
ratingStarsBtn.addEventListener("click");
deleteMovie.addEventListener("click");
movieContainer.addEventListener("click"); 

console.log("this is also running");

