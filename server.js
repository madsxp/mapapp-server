var express = require('express');
var app = express();

app.locals.title = 'mapapp-server';

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.get('/api', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');

	// Make call to overpass
	$.get('http://overpass-api.de/api/interpreter?data=[out:json];(node(55.675212,12.567147,55.677152,12.569317);rel(bn)->.x;way(55.675212,12.567147,55.677152,12.569317);node(w)->.x;);out meta;', function(data) {
		console.log("success?..");
		//console.log(data);
		//testDrawNodes(data.elements);
	});

 	res.send('json');
});

var server;

function start() {

	server = app.listen(3010, function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log('\n--------------------------------------');
		console.log('%s has started!', app.locals.title);
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