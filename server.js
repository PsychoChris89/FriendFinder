
// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// new express app
var app = express(); 

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//ROUTER
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//PORT
var PORT = process.env.PORT || 3000; 

// LISTENING port
app.listen(PORT, function(e) {
  if (e) throw e
});
