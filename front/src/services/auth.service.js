export default class AuthService {

  constructor() {
    this.currentUser = '';
    this.currentRoom = '';
    this.currentGame = '';
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentRoom(room) {
    this.currentRoom = room;
  }

  getCurrentRoom(){
    return this.currentRoom;
  }

  setCurrentGame(game) {
    this.currentGame = game;
  }

  getCurrentGame(){
    return this.currentGame;
  }
}
AuthService.$inject = [];