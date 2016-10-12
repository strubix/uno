export default class RoomController {
  constructor(SocketService, AuthService) {
    this.SocketService = SocketService;
    this.AuthService = AuthService;
    this.room = AuthService.getCurrentRoom();
    this.players = '';
    this.getUsers(this.room);
  }

  getUsers (room){
    this.SocketService.emit('get_players', room);
    this.SocketService.on('recieve_players', (data)=> {
      this.players = data;
    })
  }
}
RoomController.$inject = ['SocketService', 'AuthService'];