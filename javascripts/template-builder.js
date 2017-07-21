'use strict';

let $ = require("jquery");
let moviesController = require('./movies-controller');
let movieData = require('../templates/movie-list.hbs');
let movieForm = require('../templates/form.hbs');

module.exports.displayMovieData = (movieList) => {
	return movieData({movies: movieList});
};




// module.exports.buildSongForm = (song) => {
//   let songItem = {
//     title: "",
//     artist: "",
//     year: "",
//     album: "",
//     btnText: "save song",
//     header: "Add New Song",
//     btnClass: "save_new_btn"
//   };
//   let songData = song || songItem;
//   return formTemplate(songData);
// };
