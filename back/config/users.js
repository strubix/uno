module.exports = function(io, socket) {
  socket.on('new_user', function(data) {
    socket.sessionId = data.sessionId;
    socket.nickname = data.nickname;
    io.emit('new_user', data.nickname);
    console.log(`user ${data.nickname} connected.`);
  });

  socket.on('disconnect', function() {
    io.emit('disconnect', socket.nickname);
    console.log(`user ${socket.nickname} disconnected.`);
  });
};