module.exports = function(io, socket) {
  socket.on('launch_game', (room) => {
    io.sockets.in(room).emit('game_launched');
  });
};