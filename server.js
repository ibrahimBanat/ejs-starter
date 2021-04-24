'use strict';

// modules importing
const listener = require('./routes/listener');
const proof = require('./routes/life-proof');
const home = require('./routes/home');
const result = require('./routes/getCountryResult');
const allCountries = require('./routes/allCountries');
const add = require('./routes/addRecord');
const records = require('./routes/myRecords');

// requiering the environment variables
require('dotenv').config();

// Require express to run server and routes
const express = require('express');
const app = express();

// Require postegrues
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

//Require Superagent with HTTP requests
const superagent = require('superagent');

// cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Intialize the main project folder
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Server setup
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

// app routes
client.connect().then(() => {
  app.listen(PORT, listener.listening(PORT));
});

// proof of life route
app.get('/proof', proof.lifeProof);
// home page route
app.get('/', home.homeRoute);
// get country results
app.get('/getCountryResult', result.conutryResult);
// get all countries cases
app.get('/summary', allCountries.countries);
// handle the add recored
app.post('/addRecored', add.addToMyRecord);
// my records route
