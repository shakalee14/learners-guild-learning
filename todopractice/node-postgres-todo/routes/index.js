var express = require('express');
var router = express.Router();
var pg =  require('pg');

ar connectionString = require(path.join(__dirname, '../', '../', 'config'););

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
