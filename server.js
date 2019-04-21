const path = require('path');
const express = require('express');
const app = express();
var server_port = process.env.PORT || 3000;
var server_host = '0.0.0.0';

// Serve static files
app.use(express.static(__dirname + '/dist/casamento-site'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/casamento-site/index.html'));
});

// default Heroku port
app.listen(server_port, server_host, function(){
    console.log('Erro ao iniciar');
});
    
//  server.listen(server_port, function() {
//      console.log('Listening on port %d', server_port);
//  });
//  
// server.listen(server_port);