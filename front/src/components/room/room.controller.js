export default class RoomController {
  constructor(SocketService, AuthService) {
    this.SocketService = SocketService;
    this.AuthService = AuthService;
    this.room = AuthService.getCurrentRoom();
    this.players = '';
    this.getUsers(this.room);
    this.full = false;
  }

  getUsers (room){
    this.SocketService.emit('get_players', room);
    this.SocketService.on('recieve_players', (data)=> {
      this.players = data;
      let ready = 0;
      for (let i in this.players) {
        if(this.players[i].ready){
          ready++;
        }
      }
      if(Object.keys(this.players).length === 4 && ready === 4) {
        return this.full = true;
      }
        this.full = false;
    });
  }

  toggleReady(player){
    if(player === this.AuthService.getCurrentUser().name){
      const data = {};
      data.player = player;
      data.room = this.room;
      this.SocketService.emit('update_player', data);
    }
  }

  launchGame(){
    console.log('game launched');
  }
}
RoomController.$inject = ['SocketService', 'AuthService'];