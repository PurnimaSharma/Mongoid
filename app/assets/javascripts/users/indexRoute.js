var app = angular.module('myapp');
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '/assets/users/index.html',
      controller: 'IndexCtrl'
    })

    .state('show', {
      url: '/show',
      templateUrl: '/assets/users/show.html',
      controller: 'ShowCtrl',
      controllerAs: 'show'
    }) 

    .state('edit', {
      url: '/edit/{user_id}',
      templateUrl: '/assets/users/edit.html',
      controller: 'EditCtrl',
      controllerAs: 'edit'
    })

}]);