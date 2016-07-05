  angular.module('myapp').factory('showFact', ['Restangular', function (Restangular) {
   var service = Restangular.all('users')
   return service

   service.delete_user = function(user_id){
     return Restangular.all("users").customDELETE('/users/'+ user_id);
   }

}]);