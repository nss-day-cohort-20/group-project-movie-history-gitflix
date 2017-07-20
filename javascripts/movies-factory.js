'use strict';

let $ = require('jquery');
// let fbURL = "https://fir-101-6198a.firebaseio.com";
// let firebase = require('./firebaseConfig');

// 
module.exports.findNewMovie = (searchString) => {
	return new Promise ( (resolve, reject) => { 
	$.ajax({
            url: `https://api.themoviedb.org/3/search/movie?api_key=a2f31ca982e50c3e2cffa569dbe66d43&query=${searchString}`
        }).done((movies) => {
        	console.log(movies);
        	resolve(movies);
});
});

};

