  angular.module('myapp').factory('indexFact', ['Restangular', function (Restangular) {
   var service = Restangular.service('users');
   return service
}]);