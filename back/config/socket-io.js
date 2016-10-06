
module.exports = function(app, server) {
  const socketIO = require('socket.io').listen(server);

  socketIO.sockets.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('new_user', function(data) {
      console.log(data);
      console.log(`user ${data.id} registered`);
    });

    socket.on('disconnect', function() {
      console.log('a user disconnected');
    });

    // rooms
    require('./rooms')(socket);
  });
};