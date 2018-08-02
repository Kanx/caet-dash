// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/mock-point');

const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-HTTP-METHOD,  X-RequestDigest, If-Match');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
};


// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);
// Point static path to dist
app.use(express.static(path.join(__dirname, 'assets')));

// Set our api routes
app.use('/_api', api);

// Catch all other routes and return the index file
app.get('*', function(req, res) {
  // res.sendFile(path.join(__dirname, 'assets/prof-pic.png'));
});

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || process.env.port || 3000;

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function() { console.log('API running on localhost: ' + port)});
