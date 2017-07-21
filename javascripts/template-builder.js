'use strict';

let $ = require("jquery");
let moviesController = require('./movies-controller');
let movieData = require('../templates/movie-list.hbs');
let movieForm = require('../templates/form.hbs');

module.exports.displayMovieData = (movieList) => {
	console.log(movieList);
	return movieData({movies: movieList});
	// let movieData = movieList;
	// $(".container").html(movies);
};

module.exports.buildMovieForm = (movies) => {
  let movieItem = {
    title: "",
    overview: "",
    year: "",
    poster: "",
    genre: "",
    btnText: "Add To Watchlist",
    header: "Add New Movie",
    btnClass: "save_new_btn"
  };

 let movieList = movies|| movieItem;
  return movieForm(movies);
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
