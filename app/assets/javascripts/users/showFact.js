  angular.module('myapp').factory('showFact', ['Restangular', function (Restangular) {
   var service = Restangular.all('users')
   
   service.delete_user = function(user_id){
     return Restangular.all("users").customDELETE(user_id);
   }
   return service


}]);