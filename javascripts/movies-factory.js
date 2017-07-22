'use strict';

let $ = require('jquery');
let fbURL = "https://gitflix-837d2.firebaseio.com";
let firebase = require('./fbConfigfile');

// defines the function findNewMovie to export while setting it to equal the result of a function while expecting searchString to be passed in
module.exports.findNewMovie = (searchString) => {
	return new Promise( (resolve, reject) => {
	console.log(searchString);
		$.ajax({
			url: `https://api.themoviedb.org/3/search/movie?api_key=a2f31ca982e50c3e2cffa569dbe66d43&query=${searchString}`
		}).done( (movies) => {
			console.log(movies);
			resolve(movies);
		});
	});
};

module.exports.deleteMovie = (movieId) => {
	return new Promise( (resolve, reject) => {
		console.log(movieId);
		$.ajax({
			url: ``
		}).done( (movieId) => {
			console.log(movieId);
			resolve(movieId);
		});
	});
};

module.exports.addMovie = (movieFormObj) => {
	return new Promise( (resolve,reject) => {
		let currentUser = firebase.auth().currentUser.uid;
		movieFormObj.uid = currentUser;
		$.ajax({
			url: `${fbURL}/movies.json`,
			type: "POST",
			data: JSON.stringify(movieFormObj),
			dataType: "json"
		}).done( (movie) => {
			resolve(movie);
		});
	});
};

// module.exports.storeMovieData = (searchString) => {
// 	return new Promise( (resolve, reject) => {
// 		$.ajax({
// 			// url: `https://api.themoviedb.org/3/search/movie?api_key=a2f31ca982e50c3e2cffa569dbe66d43&query=${searchString}`
// 		}).done( (movies) => {
// 			let storedMovies = movies.results;
// 			console.log(storedMovies);
// 			resolve(storedMovies);
// 		});
// 	});
// };

// module.exports.searchUserMovie = (searchString) => {
// 	console.log(searchString);
// };
