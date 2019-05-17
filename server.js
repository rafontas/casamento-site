const path = require('path');
const express = require('express');
const app = express();
var server_port = process.env.PORT || 3001;
var server_host = '0.0.0.0';

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// app.use(express.static('dist'));
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '/dist/casamento-site', 'index.html'));
});

app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
