export default class RoomsController {
  constructor(SocketService, AuthService, $state) {
    this.rooms = [];
    this.SocketService = SocketService;
    this.AuthService = AuthService;
    this.$state = $state;

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
      this.AuthService.setCurrentRoom(room);
      this.$state.go('room');
    } else {
      alert('Le nom de la room doit être supérieure à 3 caractères.')
    }
  };

  joinRoom(room){
    let data = {room: room, user: this.AuthService.getCurrentUser()};
    this.SocketService.emit('join_room', data);

    this.SocketService.on('room_joined', (data) => {
      console.log(data.user.name,'joined', data.room);
      this.AuthService.setCurrentRoom(data.room);
      this.$state.go('room');
    });
  }
}
RoomsController.$inject = ['SocketService', 'AuthService', '$state'];