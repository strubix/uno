module.exports = function(io, socket, rooms) {
  socket.on('new_room', (room) => {
    if (rooms.includes(room)) {
      return false;
    }
    rooms.push(room);
    socket.join(room);
    io.emit('get_rooms', rooms);
  });

  socket.on('get_rooms', () => {
    socket.emit('get_rooms', rooms);
  });

  socket.on('get_room_users', (room) => {
    socket.emit('room_users', io.sockets.adapter.rooms[room])
  });

  socket.on('join_room', (room) => {
    socket.join(room);
  });
};