module.exports = function(app, server) {
  const io = require('socket.io').listen(server);
  let rooms = [];

  io.sockets.on('connection', function(socket) {

    // rooms
    require('./rooms')(io, socket, rooms);
    // users
    require('./users')(io, socket);
  });
};