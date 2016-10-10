module.exports = function(io, socket, rooms) {

  socket.on('new_room', (room) => {
    if (!rooms.includes(room)) {
      rooms.push(room);
      socket.join(room);
      io.emit('get_rooms', rooms);
    }
  });

  socket.on('get_rooms', () => {
    socket.emit('get_rooms', rooms);
  })
};