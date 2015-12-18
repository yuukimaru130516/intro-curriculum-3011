'use strict';
let http = require('http');
var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain',
		'charset': 'utf-8'
	});
	res.write(req.headers['user-agent']);
	res.end();
});
var port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
