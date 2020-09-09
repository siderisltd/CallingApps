var express = require('express');
var request = require('request');

var app = express();

var urls = ['https://mathlessons.herokuapp.com/', 'https://qphotography.eu/']

app.get('/', function(req, res) {
    res.status(200).send({ alive: "true" });
});

setInterval(function() {
	
	urls.map(function(url){
			request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(body) 
			}
		});
	});
}, 15 * 1000 * 60) // 15 mins

app.listen(process.env.PORT || 3001);

