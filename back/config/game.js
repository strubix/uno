module.exports = function(io, socket) {
  socket.on('launchGame', (room) => {
    io.sockets.in(room).emit('game_launched');

    //then socket.emit('updateHand', Player.Cards)
  });

  socket.on('play', ()=>{
    // socket.emit('displayError', {error, message});
    // io.to(room).emit('updateGame', Card);
    // io.to(next Player).emit('updateHand', Player.cards);
  });

  socket.on('draw', ()=>{
    // socket.emit('updateHand', Cards);
  });

  socket.on('disconnect', ()=>{
    // io.to(room).emit('endGame');
    // io.emit('updateRooms', Games);
  });
};