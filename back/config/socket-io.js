module.exports = function(app, server) {
  const io = require('socket.io').listen(server);

  let rooms = {};
  let user = { participants: [], nameCounter: 1 };

  io.sockets.on('connection', function(socket) {
    // rooms
    require('./rooms')(io, socket, rooms);
    // users
    require('./users')(io, socket, user);
    // game
    require('./game')(io, socket);
  });
};