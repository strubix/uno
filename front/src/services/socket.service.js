export default class SocketService {

  constructor() {
    this.init();
  }

  init() {
    let host = 'http://localhost:5000';
    console.log("socket.io connecting to", host);

    this.socket = io.connect(host);

    this.socket.on('connect', () => {
      let sessionId = this.socket.io.engine.id;

      console.log("socket.io connected with session id", sessionId);

      this.socket.emit('new_user', { id: sessionId });
    })
  }
}

SocketService.$inject = [];