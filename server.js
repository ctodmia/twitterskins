var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('we got this');
	console.log('this is req.body', req.body)
})

app.listen('8080');
console.log('it is currently going down on port 8080');
