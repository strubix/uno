import io from 'socket.io-client';

export default class SocketService {

  constructor(AuthService, $rootScope) {
    this.AuthService = AuthService;
    this.$rootScope = $rootScope;
    this.host = 'http://localhost:5000';

    this.socket = io.connect(this.host);

    this.init();
  }

  init() {
    this.socket.on('connect', () => {
      let sessionId = this.socket.io.engine.id;

      this.socket.emit('new_user', { id: sessionId });

      this.socket.on('new_connection', (data) => {
        if (data.user.id === sessionId) {
          this.$rootScope.$apply(() => {
            this.AuthService.setCurrentUser(data.user);
          });
        }
        console.log(`${data.user.name} connected.`);
      });
    });
  }

  on(key, callback) {
    this.socket.on(key, (data) => {
      this.$rootScope.$apply(() => {
        callback(data)
      });
    });
  }

  emit(key, data) {
    this.socket.emit(key, data);
  }
}
SocketService.$inject = ['AuthService', '$rootScope'];