var server_port = process.env.PORT || 3000;
var server_host = '0.0.0.0';

server.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
