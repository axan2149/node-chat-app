/**
 * Created by mrozycki on 4/20/2017.
 */
const path =require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const {isRealString} = require('./utils/validation');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {Users} = require('./utils/users');
var users = new Users();
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    "use strict";
    console.log('New User Connected');



    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            callback('Name and room name are required.');
        }
        socket.join(params.room);
        users.removeUser(socket.id);
        users.addUser(socket.id,params.name,params.room);
        io.to(params.room).emit('updateUserList', users.getUserList(params.room));
        // socket.leave('room name')
        // io.emit -> io.to('room name').emit
        // socket.broadcast.emit -> socket.broadcast.to('room name').emit
        socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));

        socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin', `${params.name} has joined`));

        callback();
    });



    socket.on('disconnect', () =>{
        var user = users.removeUser(socket.id);
        if (user){
            io.to(user.room).emit('updateUserList', users.getUserList(user.room));
            io.to(user.room).emit('newMessage',generateMessage('Admin',`${user.name} has left`));
        }
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