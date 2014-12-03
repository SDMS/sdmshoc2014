var express = require('express')
var app = express();
var http = require('http').Server(app);


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.get('/style.css', function(req, res) {
	res.sendFile(__dirname + '/style.css');
});
app.get('/sphero.html', function(req, res){
	res.sendFile(__dirname + '/sphero.html');
});
app.get('/hopscotch.html', function(req, res){
	res.sendFile(__dirname + '/hopscotch.html');
});
app.use('/images', express.static(__dirname + '/images'));

var server = http.listen(3001, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s%s', host, port);
});