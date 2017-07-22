'use strict';

let firebase = require('firebase/app');
let fbData = require("./fbgetter")();





var config = {
    apiKey: "AIzaSyBZiWRVQSHtJ_zu9pdzT5mfkeb6xk6jsJk",
    authDomain: "gitflix-837d2.firebaseapp.com",
    databaseURL: "https://gitflix-837d2.firebaseio.com",
    projectId: "gitflix-837d2",
    storageBucket: "gitflix-837d2.appspot.com",
    messagingSenderId: "447160436342"
};
firebase.initializeApp(config);


module.exports = firebase;
