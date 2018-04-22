// DEPENDENCIES
var path = require('path');

// ROUTING
module.exports = function(app){

	//GET
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}