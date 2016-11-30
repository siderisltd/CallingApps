var express = require('express');
var request = require('request');

var app = express();

var urls = ['https://mathlessons.herokuapp.com/']

setInterval(function() {
	
	urls.map(function(url){
			request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body) 
			}
		});
	});
}, 20 * 1000 * 60) // 20 mins

app.listen(process.env.PORT || 3001);

