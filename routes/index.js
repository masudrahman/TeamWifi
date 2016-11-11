// Get all of our wifi data
var data = require('../data.json');

exports.view = function(req, res){
	res.render('index', data);
};