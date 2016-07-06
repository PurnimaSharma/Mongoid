 angular.module('myapp').factory('editFact', ['Restangular', function (Restangular) {
 	var service = Restangular.service('users');
    service.edit_user = function(user_id){
     return Restangular.all("users").customGET( user_id + '/edit');
   }
    
   service.update_user = function(user, id){
   	console.log(id);
     return Restangular.all("users/" + id).customPUT(user);
   }
   return service
}]);