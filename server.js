var express = require('express');
var app = express();

app.locals.title = 'mapapp-server';

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/api', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Content-Type', 'json');
 	res.send('json');
});

var server;

function start() {

	server = app.listen(3010, function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log('\n--------------------------------------');
		console.log('%s is starting...', app.locals.title);
		console.log('--------------------------------------');
		console.log('Listening at http://%s:%s', host, port);

	});
}

function stop() {

	server.close();

}

start();

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
	switch(data) {
	};

});