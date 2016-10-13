export default class RoomController {
  constructor(SocketService, AuthService, $state) {
    this.SocketService = SocketService;
    this.AuthService = AuthService;
    this.room = AuthService.getCurrentRoom();
    this.players = '';
    this.player = '';
    this.getUsers(this.room);
    this.full = false;
    this.$state = $state;
  }

  getUsers(room) {
    this.SocketService.emit('get_players', room);
    this.SocketService.on('recieve_players', (data)=> {
      this.players = data;
      let ready = 0;
      for (let i in this.players) {
        if (this.players[i].ready) {
          ready++;
        }
      }
      if (Object.keys(this.players).length === 4 && ready === 4) {
        return this.full = true;
      }
      this.full = false;
    });
    this.player = this.AuthService.getCurrentUser();
  }

  toggleReady(player) {
    if (player === this.AuthService.getCurrentUser().name) {
      const data = {};
      data.player = player;
      data.room = this.room;
      this.SocketService.emit('update_player', data);
    }
  }

  launchGame() {
    this.$state.go('game');
  }
}
RoomController.$inject = ['SocketService', 'AuthService', '$state'];