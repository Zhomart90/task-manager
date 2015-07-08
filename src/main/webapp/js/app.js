var taksManagerApp = angular.module('taksManagerApp', [
  'ngRoute',
  'taskManagerControllers'
]);

taksManagerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomePageController'
      }).
//      when('/phones/:phoneId', {
//        templateUrl: 'partials/phone-detail.html',
//       controller: 'PhoneDetailCtrl'
//      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);