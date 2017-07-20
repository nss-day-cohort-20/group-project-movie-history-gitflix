'use strict';

let $ = require('jquery');

let input = document.getElementById("input");
let findnewMoviebtn = document.getElementById("findnewMoviebtn");
let watchedMoviebtn = document.getElementByid("watchedMoviebtn");
let addtoWatchList = document.getElementById("addtoWatchList");
let rateStarsbtn = document.getElementById("rateStarsbtn");
let searchUserMoviebtn = document.getElementByid("searchUserMoviebtn");
let deleteMoviebtn = document.getElementById("deleteMoviebtn");
let movieContainer = document.getElementById("movieContainer");
let showUnwatched = "";
let showWatched = "";
let selectedMovie = "";

findnewMoviebtn.addEventListener("click");
watchedMoviebtn.addEventListener("click");
addtoWatchList.addEventListener("click");
rateStarsbtn.addEventListener("click");
input.addEventListener("click");
searchUserMoviebtn.addEventListener("click");
deleteMoviebtn.addEventListener("click");
movieContainer.addEventListener("click");