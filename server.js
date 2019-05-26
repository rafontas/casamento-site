const path = require('path');
const express = require('express');
const app = express();
var server_port = process.env.PORT || 3001;
var server_host = '0.0.0.0';

// app.use(express.static('dist/casamento-site'));
app.use(express.static('dist'));

app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
