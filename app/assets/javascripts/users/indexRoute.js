var app = angular.module('myapp');
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/assets/users/index.html',
      controller: 'IndexCtrl'
    })
}]);