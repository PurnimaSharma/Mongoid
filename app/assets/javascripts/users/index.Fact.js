  angular.module('myapp').factory('indexFact', ['Restangular','$stateParams', function (Restangular,$stateParams) {
   var service = Restangular.service('users');
   return service
}]);