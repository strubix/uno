import angular from 'angular';

const routes = 'app.routes';

angular.module(routes, ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/rooms");
      $stateProvider
          .state("rooms", {
            url: "/rooms",
            template: "<rooms></rooms>"
          })
          .state("room", {
            url: "/room",
            template: "<room></room>"
          });
    }]);

export default routes;