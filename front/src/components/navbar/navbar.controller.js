export default class Navbar {
  constructor(AuthService, $timeout, $rootScope) {
    this.AuthService = AuthService;
    this.$timeout = $timeout;
    this.$rootScope = $rootScope;
    this.$timeout(() => {
        this.user = this.AuthService.getCurrentUser();
    }, 1000);
  }
}
Navbar.$inject = ['AuthService', '$timeout', '$rootScope'];