var express = require('express');
var path = require('path');

// Create an server
var server = express();

// server.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   express.static(path.resolve(__dirname, 'www'));
//   next();
// });

server.get('/', function(req, res, next) {
  res.sendFile(`${__dirname}/www/404.html`);
  // Handle the get for this route
});

server.post('/', function(req, res, next) {
 // Handle the post for this route
});

// Serve the www directory
server.use(express.static(path.resolve(__dirname, 'www')));

// Send 404 for unknown routes
// server.get('*', (request, response) => {
//   response.sendFile(`${__dirname}/www/404.html`);
// });

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000...');
});
