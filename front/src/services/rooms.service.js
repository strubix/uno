export default class RoomsService {

  constructor() {
    this.socket = '';
    this.list = [];
  }

  create(room) {
    this.socket.emit('new_room', { name: room});
  }

  getRooms() {
    this.socket.emit('get_rooms');
  }

  leave(room) {
    //this.socket.leave(room);
  }
}
RoomsService.$inject = [];