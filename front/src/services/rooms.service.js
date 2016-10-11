export default class RoomsService {

  constructor(SocketService) {
    this.SocketService = SocketService;
  }

  create(room) {
    this.SocketService.emit('new_room', room);
  }

  join(room) {
    this.SocketService.emit('join_room', room);
  }

  getRooms() {
    this.SocketService.emit('get_rooms');
  }

  getRoomUsers(room) {
    this.SocketService.emit('get_room_users', room);
  }

  leave(room) {
    //this.socket.leave(room);
  }
}
RoomsService.$inject = ['SocketService'];