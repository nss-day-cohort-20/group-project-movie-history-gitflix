'use strict';

let firebase = require('firebase/app');
let fbData = require("./fbgetter")();

var config = {
  apiKey: fbData.key,
  authDomain: fbData.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;
