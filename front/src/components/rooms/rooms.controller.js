
export default class RoomsController {
  constructor(SocketService){
    this.rooms = [];
    this.create = function(room) {
      if(room.length > 3){
        SocketService.Rooms.create(room);
      }
    };

    SocketService.Rooms.getRooms();
    this.rooms = SocketService.Rooms;
  }
}
RoomsController.$inject = ['SocketService'];