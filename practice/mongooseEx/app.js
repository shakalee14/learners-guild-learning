const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./book.model');

const db = 'mongodb://localhost/example';

mongoose.connect(db);

const port = 8080;

app.listen(port, function(){
  console.log('app listening on port' + port)
})