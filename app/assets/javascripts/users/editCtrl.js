angular.module('myapp').controller('EditCtrl',['$scope','$state','$stateParams','editFact',function($scope,$state,$stateParams,editFact){
    var vm = this;
    vm.id= $stateParams.user_id
    	editFact.edit_user(vm.id).then(function(data){
         vm.user = data.user.data.attributes;
         console.log(vm.user )
	})

  vm.update = function(user)
  {   
  	console.log(user)
	vm.user = user
	vm.id= $stateParams.user_id
	editFact.update_user(vm.user, vm.id ).then(function(data){
		$state.go('show')

	})

  }



}]);