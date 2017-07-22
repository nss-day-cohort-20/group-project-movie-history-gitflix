'use strict';

let $ = require("jquery");
let moviesController = require('./movies-controller');
let movieData = require('../templates/movie-list.hbs');
let movieForm = require('../templates/form.hbs');

module.exports.displayMovieData = (movieList) => {
	return movieData({movies: movieList});
};


