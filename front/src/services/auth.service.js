export default class AuthService {

  constructor() {
    this.currentUser = '';
    this.currentRoom = '';
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
}
AuthService.$inject = [];