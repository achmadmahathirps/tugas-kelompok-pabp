const express = require('express');
const server = express();

server.listen(3000, function(){
    console.log('Server in running on port 3000.')
});

server.use(express.static(__dirname + '/'));

server.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});