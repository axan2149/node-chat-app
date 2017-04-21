/**
 * Created by mrozycki on 4/20/2017.
 */
const path =require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

const {generateMessage, generateLocationMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    "use strict";
    console.log('New User Connected');

    socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin', 'New User joined'));


    socket.on('disconnect', () =>{
        console.log('Client Disconnected');
    });
    
    //chat app


    
    socket.on('createMessage', (message, callback) => {
        console.log(message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server.');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });

    });
    socket.on('createLocationMessage', (coords) =>{
       io.emit('newLocationMessage', generateLocationMessage('Location', coords.latitude, coords.longitude));
    });

});

server.listen(port, () =>{
    "use strict";
    console.log(`starting server on port ${port}`);
    console.log(`http://localhost:${port}`);
});