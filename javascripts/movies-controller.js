'use strict';

let $ = require('jquery');

console.log($("#login"));

let input = document.getElementById("input");
let findNewMovieBtn = document.getElementById("findNewMovieBtn");
let searchUserMovieBtn = document.getElementById("searchUserMovieBtn");
let watchedMovieBtn = document.getElementById("watchedMovieBtn");
let addToWatchList = document.getElementById("addToWatchList");
let ratingStarsBtn = document.getElementById("ratingStarsBtn");
let deleteMovieBtn = document.getElementById("deleteMoviebtn");
let movieContainer = document.getElementById("movieContainer");
let showUnwatched = "";
let showWatched = "";
let selectedMovie = "";

console.log("this is running");

findNewMovieBtn.addEventListener("click");
watchedMovieBtn.addEventListener("click");
addToWatchList.addEventListener("click");
ratingStarsBtn.addEventListener("click");
input.addEventListener("click");
searchUserMovieBtn.addEventListener("click");
deleteMovieBtn.addEventListener("click");
movieContainer.addEventListener("click"); 


