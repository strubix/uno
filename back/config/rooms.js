module.exports = function(io, socket, rooms) {
  function joinRoom(data, rooms) {
    if (!rooms[data.room].users[data.user.name]
        && rooms[data.room].length < 4) {
      socket.join(data.room);
      rooms[data.room].users[data.user.name] = data.user;
      rooms[data.room].length++;
      io.sockets.emit('get_rooms', rooms);
      socket.emit('room_joined', data);
    }
  }

  socket.on('new_room', (data) => {
    rooms[data.room] = { name: data.room, users: {}, length: 0 };
    joinRoom(data, rooms);
  });

  socket.on('get_rooms', () => {
    io.sockets.emit('get_rooms', rooms);
  });

  socket.on('join_room', (data) => {
    joinRoom(data, rooms);
  });
};