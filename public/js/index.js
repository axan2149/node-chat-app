var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail',{
    //     to: 'jane@example.com',
    //     text: 'hey this is Martin',
    // });

    socket.emit('createMessage', {
        from: 'Bill',
        text: 'Hi guys'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from the server');
});


socket.on('newMessage', function (message) {
   console.log('New Message', message);
});
