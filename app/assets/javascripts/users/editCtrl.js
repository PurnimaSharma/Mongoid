angular.module('myapp').controller('EditCtrl',['$scope','editFact',function($scope,editFact){
    var vm = this;
	vm.edit = function(user_id)
	{   
	  console.log(user_id);
	  editFact.post(users_id).then(function(data){
	})
	}


}]);