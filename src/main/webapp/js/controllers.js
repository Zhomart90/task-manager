var taskManagerControllers = angular.module('taskManagerControllers', []);

taskManagerControllers.controller('HomePageController', ['$scope','$log', '$http',
  function($scope, $http,$log) {
	 $log.debug('Hello from home page!');
  }]);

