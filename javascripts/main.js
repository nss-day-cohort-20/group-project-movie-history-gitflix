'use strict';

let $ = require('jquery');

let moviesController = require('./movies-controller');
let moviesFactory = require('./movies-factory');

module.exports.clearInput = () => {
    $("#input").val("");
};
// $("button").click(clearInput() {
//     $("input").val("");
// };

// moviesController.function();