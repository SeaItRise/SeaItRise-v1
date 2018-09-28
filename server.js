// From the node.js express tutorial, from M. Hamedani
const config = require('config');
const Joi = require('joi');
const logger = require('./middleware/logger');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const debug = require('debug')('server:startup');
const sirGoogle = require('./routes/sirGoogle');
const flickr = require('./routes/flickr');
const sirKinvey = require('./routes/sirKinvey');

// Create an server

const path = require('path');

console.log('Application Name' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Server: ' + config.get('mail.password'));

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

console.log(`server: ${app.get('env')}`);

// server.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   express.static(path.resolve(__dirname, 'www'));
//   next();
// });

app.use(express.json());
app.use(express.urlencoded( {extended: true} )); //for url encoded payload req
app.use(express.static('www'));
app.use(helmet());
app.use('/api/sirGoogle', sirGoogle);
app.use('/api/flickr', flickr);
app.use('/api/sirKinvey', sirKinvey);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan is enabled');
}

app.use(logger);

app.get('/', function(req, res, next) {
  res.sendFile(`${__dirname}/www/404.html`);
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

// Serve the www directory
app.use(express.static(path.resolve(__dirname, 'www')));

// Send 404 for unknown routes
// server.get('*', (request, response) => {
//   response.sendFile(`${__dirname}/www/404.html`);
// });

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port http://localhost:3000...');
});
