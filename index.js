var express = require('express'),
    http = require('http'),
    mdns = require('mdns');

var app = express(),
    server;


//set up routes
app.get('/test',function(req,res){
    res.send({ 'answer' : 'test' });
});


function startServer(){

    server = http.createServer(app);
    server.listen(8080);
}

startServer();
