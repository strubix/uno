export default class RoomsController {
  constructor(SocketService) {
    this.rooms = [];
    this.SocketService = SocketService;

    this.getRooms();
  }

  create(room) {
    if (room.length > 3) {
      this.SocketService.emit('new_room', room);
    } else {
      alert('Le nom de la room doit être supérieure à 3 caractères.')
    }
  };

  getRooms() {
    this.SocketService.emit('get_rooms');

    this.SocketService.on('get_rooms', (data) => {
      this.rooms = data;
    });
  }
}
RoomsController.$inject = ['SocketService'];