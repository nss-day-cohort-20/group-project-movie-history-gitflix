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

// defines function deleteMovie to be exported while setting it to equal an anonymous function while expecting movieId to be passed in 
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

// defines function addToWatchlist to be exported while setting it to equal an anonymous function while expecting movieObj to be passed in 
module.exports.addToWatchList = (movieObj) => {
	console.log("movie = ", movieObj);
	return new Promise( (resolve,reject) => {
		// let currentUser = firebase.auth().currentUser.uid;
		// movieObj.uid = currentUser;
		$.ajax({
			url: `${fbURL}/movie.json`,
			type: "POST",
			data: JSON.stringify(movieObj),
			dataType: "json"
		}).done( (movie) => {
			resolve(movie);
		});
	});
};

module.exports.showUnwatched = () => {
	console.log("show unwatched is running");
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: `${fbURL}/movie.json?orderBy="watched"&equalTo=true`,
			type: "GET"
			// data: JSON.stringify(),
			// dataType: "json"
		}).done((movie) => {
			resolve(movie);
		});
	});
};

module.exports.showWatched = () => {
	console.log("show watched is running");
	return new Promise( (resolve, reject) => {
		$.ajax({
			url: `${fbURL}/movie.json?orderBy="watched"&equalTo=false`,
			type: "GET"
			// data: JSON.stringify(),
			// dataType: "json"
		}).done((movie) => {
			resolve(movie);
		});
	});
};

module.exports.watchedMovie = (movieObj) => {
	console.log("watched movie = ", movieObj);
	return new Promise( (resolve,reject) => {
		// let currentUser = firebase.auth().currentUser.uid;
		// movieObj.uid = currentUser;
		$.ajax({
			url: `${fbURL}/movie.json`,
			type: "POST",
			data: JSON.stringify(movieObj),
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
