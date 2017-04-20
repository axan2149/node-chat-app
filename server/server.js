/**
 * Created by mrozycki on 4/20/2017.
 */
const path =require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    "use strict";
    console.log('New User Connected');

    socket.emit('newEmail',{
        from: 'mike@example.com',
        text: "Hey. What's going on",
        createdAt: 123
    });
    
       
    socket.on('createEmail', (newEmail) => {
       console.log('createEmail', newEmail);
    });
    socket.on('disconnect', () =>{
        console.log('Client Disconnected');
    });
    
    //chat app
    socket.emit('newMessage', {
        from: 'Joe',
        text: 'Hey guys',
        createdAt: 123
    });
    
    socket.on('createMessage', (message) => {
        console.log(message);
    })
    
});

server.listen(port, () =>{
    "use strict";
    console.log(`starting server on port ${port}`);
    console.log(`http://localhost:${port}`);
});