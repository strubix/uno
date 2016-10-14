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
    this.SocketService.on('game_launched', ()=> {
      this.AuthService.setCurrentGame(this.room);
      this.$state.go('game');
    });
    this.player = this.AuthService.getCurrentUser();
  }

  toggleReady(player) {
    if (player === this.AuthService.getCurrentUser().name) {
      this.SocketService.emit('update_player', { player: player, room: this.room });
    }
  }

  launchGame() {
    this.SocketService.emit('launch_game', this.room);
  }
}
RoomController.$inject = ['SocketService', 'AuthService', '$state'];