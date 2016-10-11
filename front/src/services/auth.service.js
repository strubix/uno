export default class AuthService {

  constructor() {
    this.currentUser = '';
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
AuthService.$inject = [];