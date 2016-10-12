export default class RoomsController {
  constructor(SocketService, AuthService) {
    this.rooms = [];
    this.SocketService = SocketService;
    this.AuthService = AuthService;

    this.getRooms();
  }

  getRooms() {
    this.SocketService.emit('get_rooms');
    this.SocketService.on('get_rooms', (data) => {
      this.rooms = data;
    });
  }

  create(room) {
    if (room.length > 3) {
      let data = {room: room, user: this.AuthService.getCurrentUser()};
      this.SocketService.emit('new_room', data);
    } else {
      alert('Le nom de la room doit être supérieure à 3 caractères.')
    }
  };

  joinRoom(room){
    let data = {room: room, user: this.AuthService.getCurrentUser()};
    this.SocketService.emit('join_room', data);

    this.SocketService.on('room_joined', (data) => {
      console.log(data.user.name,'joined', data.room);
    });
  }
}
RoomsController.$inject = ['SocketService', 'AuthService'];