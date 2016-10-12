import angular from 'angular';

const routes = 'app.routes';

angular.module(routes, ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/rooms");
      $stateProvider
          .state("rooms", {
            url: "/rooms",
            template: "<rooms></rooms>",
            resolve: {
              security: ['$q', 'AuthService', 'SocketService', function($q, AuthService, SocketService){
                AuthService.setCurrentRoom('');
                SocketService.emit('leave_room');
              }]
            }
          })
          .state("room", {
            url: "/room",
            template: "<room></room>",
            resolve: {
              security: ['$q', 'AuthService', function($q, AuthService){
                if(AuthService.getCurrentRoom() === ''){
                  return $q.reject("Not Authorized");
                }
              }]
            }
          });
    }]);

export default routes;