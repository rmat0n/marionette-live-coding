'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var baucis = require('baucis');
var mongoose = require('mongoose');
var hbs = require('express-hbs');
var swagger = require('baucis-swagger');

// start mongoose
mongoose.connect('mongodb://localhost/todos');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {

  /* test schema */
  var Todo = new mongoose.Schema({
    name: String,
    date: Date,
    done: Boolean
  });

  mongoose.model('todo', Todo);

  /* cors */
  var allowCrossOrigin = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    next();
  };

  /* express */
  var app = express();

  app.configure(function() {
    app.set('port', 9000);
    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '../app/scripts/views');
  });

  // simple log
  app.use(function(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
  });

  // cors
  app.use(allowCrossOrigin);

  // mount static
  app.use(express.static(path.join(__dirname, '../app')));
  app.use(express.static(path.join(__dirname, '../.tmp')));

  // bausics
  baucis.rest({
    singular: 'todo',
    plural: 'todos'
  });
  app.use('/api', baucis());

  // route index.html
  app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, '../app/index.html'));
  });

  // data
  app.get('/static/todos', function(req, res) {
    res.sendfile(path.join(__dirname, '../data/todos.json'));
  });

  // start server
  http.createServer(app).listen(app.get('port'), function() {
    console.log('Express App started!');
  });
});
