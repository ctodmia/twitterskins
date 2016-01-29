var express = require('express');
var config = require('./config.js');
var Twitter = require('twitter');
var app = express();



var client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret,
  access_token_key: config.accessToken,
  access_token_secret: config.accessTokenSecret,
  // request_options: {
  //   proxy: 'http://carinetodmia.com'
  // }
});

var count = 0;
// var util = require('util');

// client.stream('filter', {track: 'love'}, function(stream){

// 	stream.on('data', function(data){
// 		// console.log(util.inspect(data));
// 		stream.destroy();
// 		process.exit(0);
// 	});
// });

var params = {screen_name: 'cinfinitymedia'};
// client.get('statuses/user_timeline', function(error, tweets, response){
//   if (!error) {
//     console.log(tweets);
//   }

//   console.log('tweets', tweets)
// });

client.get('favorites/list', params, function(error, tweets, response){
  if(error) {return error};
  console.log(tweets);  // The favorites. 
  // console.log(response);  // Raw response object. 
});

app.get('/', function(req, res){
	res.send('we got this');
	console.log('this is req.body', req.body)
})


app.listen('8080');
console.log('it is currently going down on port 8080');
