'use strict';

let $ = require('jquery');
// let fbURL = "https://fir-101-6198a.firebaseio.com";
// let firebase = require('./firebaseConfig');

// defines the function findNewMovie to export while setting it to equal the result of a function while expecting searchString to be passed in
module.exports.findNewMovie = (searchString) => {
	console.log(searchString, "test");
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

// module.exports.searchUserMovie = (searchString) => {
// 	console.log(searchString);
// };





