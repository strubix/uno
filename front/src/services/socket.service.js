import io from 'socket.io-client';

export default class SocketService {

  constructor(UserService, RoomsService, $rootScope) {
    this.$rootScope = $rootScope;
    this.host = 'http://localhost:5000';

    this.socket = io.connect(this.host);
    this.User = UserService;

    this.User.socket = this.socket;
    this.Rooms = RoomsService;

    this.Rooms.socket = this.socket;

    this.init();
  }

  init() {
    this.socket.on('connect', () => {
      this.User.setNick();
    });

    this.socket.on('get_rooms', (data) => {
      this.Rooms.list = data;
      this.$rootScope.$apply();
    });

    this.socket.on('new_user', (data) => {
      console.log(`${data} connected.`);
    });

    this.socket.on('disconnect', (data) => {
      console.log(`${data} disconnected.`);
    });
  }
}
SocketService.$inject = ['UserService', 'RoomsService', '$rootScope'];