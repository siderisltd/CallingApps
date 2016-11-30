var express = require('express');
var request = require('request');

var app = express();

var urls = ['http://www.laughfactory.com/jokes/joke-of-the-day']

setInterval(function() {
	
	urls.map(function(url){
			request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body) 
			}
		});
	});
}, 15 * 1000 * 60) // 15 mins -> 15 * 1000 * 60 = 900000

app.listen(process.env.PORT || 3001);

