module.exports = function(io, socket, rooms) {
  function joinRoom(data, rooms) {
    if (!rooms[data.room].users[data.user.name]
        && rooms[data.room].length < 4) {
      socket.join(data.room);
      rooms[data.room].users[data.user.name] = data.user;
      rooms[data.room].users[data.user.name].ready = false;
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
    const socketRooms = Object.keys(socket.rooms());
    if (socketRooms.length < 2) {
      joinRoom(data, rooms);
    }
  });

  socket.onclose = function() {
    const socketRooms = Object.keys(socket.rooms());
    if (socketRooms.length == 2) {
      delete rooms[socketRooms[1]].users[socket.name];
      rooms[socketRooms[1]].length--;
      if (rooms[socketRooms[1]].length <= 0) {
        delete rooms[socketRooms[1]];
      }
      io.sockets.emit('get_rooms', rooms);
    }
  };

  socket.on('leave_room', () => {
    const socketRooms = Object.keys(socket.rooms());
    if (socketRooms.length == 2) {
      delete rooms[socketRooms[1]].users[socket.name];
      socket.leave(socketRooms[1]);
      rooms[socketRooms[1]].length--;
      if (rooms[socketRooms[1]].length <= 0) {
        delete rooms[socketRooms[1]];
      }
      io.sockets.emit('recieve_players', rooms[socketRooms[1]].users);
    }
    io.sockets.emit('get_rooms', rooms);
  });

  socket.on('get_players', (room)=> {
    io.sockets.emit('recieve_players', rooms[room].users);
  });

  socket.on('update_player', (data)=>{
    console.log(data);
    console.log(rooms[data.room].users[data.player].ready);
    if(rooms[data.room].users[data.player].ready){
      rooms[data.room].users[data.player].ready = false;
      console.log('toto');
    } else {
      rooms[data.room].users[data.player].ready = true;
    }
    io.sockets.emit('recieve_players', rooms[data.room].users);
  });
};