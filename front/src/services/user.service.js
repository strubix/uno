export default class UserService {

  constructor() {
    this.nickname = '';
    this.socket = '';
  }

  setNick(nickname = null) {
    let sessionId = this.socket.io.engine.id;
    if(nickname){
      this.nickname = nickname;
    } else {
      this.nickname = `guest${sessionId}`;
    }
    this.socket.emit('new_user', { id: sessionId, nickname: this.nickname });
  }
}
UserService.$inject = [];