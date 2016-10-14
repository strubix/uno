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
              security: ['AuthService', 'SocketService', function(AuthService, SocketService){
                AuthService.setCurrentRoom('');
                SocketService.emit('leave_room');
                SocketService.emit('get_rooms');
              }]
            }
          })
          .state("room", {
            url: "/room",
            template: "<room></room>",
            resolve: {
              security: ['$q', 'AuthService', '$state', function($q, AuthService, $state){
                if(AuthService.getCurrentRoom() === ''){
                  $state.go('rooms');
                  return $q.reject("Not Authorized");
                }
              }]
            }
          })
          .state("game", {
            url: "/game",
            template: "<game></game>",
            /* TODO: Uncomment when /game design finished
            resolve: {
              security: ['$q', 'AuthService', '$state', function($q, AuthService, $state){
                if(AuthService.getCurrentGame() === ''){
                  $state.go('rooms');
                  return $q.reject("Not Authorized");
                }
              }]
            }
            */
          });
    }]);

export default routes;