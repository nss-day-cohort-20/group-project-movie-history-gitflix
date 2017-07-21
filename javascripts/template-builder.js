'use strict';

let $ = require("jquery");
let moviesController = require('./movies-controller');

module.exports.displayMovieData = (movies) => {
	let movieData = movies;
	$(".container").html(movies);
};
