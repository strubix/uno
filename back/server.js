const express = require('express'),
    fs = require('fs'),
    http = require('http'),
    app = express(),
    port = 5000;


var server = app.listen(port);
console.log('Express listening at port ' + port);
require('./config/socket-io')(app, server);

// expose app
exports = module.exports = app;