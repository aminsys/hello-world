
/*****Setting up a server******/
var app = require('express')(); // A function handler that you can supply to an HTTP server

var http = require('http').Server(app);

var io = require('socket.io')(http);

// Define a route handler that gets called when we hit our website home.
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


/***************Integrating the socket.io*****************/
io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('chat message', function(msg){
        console.log("message: " + msg);
    });
});

// Make the HTTP server listen on port 3000.
http.listen(3000, function(){
    console.log('listening on *:3000');
});

