 angular.module('myapp').factory('editFact', ['Restangular', function (Restangular) {
   var service = Restangular.service('users');
   return service
}]);