module.exports = function(io, socket, user) {

  socket.on("new_user", function(data) {

    const newName = "Guest " + user.nameCounter++;
    user.participants.push({ id: data.id, name: newName });

    io.sockets.emit("new_connection", {
      user: {
        id: data.id,
        name: newName
      },
      participants: user.participants
    });

    console.log(`${newName} connected.`);
  });
};