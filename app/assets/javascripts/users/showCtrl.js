angular.module('myapp').controller('ShowCtrl',['$state','showFact', function($state,showfact)
{

	var vm = this;
	vm.show = function()
	{   

		showfact.customGET().then(function(data){
			vm.users = data.users.data
			console.log(vm.users)
		})
	}

	vm.delete_user = function(user_id)
	{      
		vm.user_id = user_id
		showfact.delete_user(vm.user_id).then(function(data){

		})
	}

	vm.edit_user = function(user_id)
	{      
		vm.user_id = user_id
		$state.go('edit', {user_id: vm.user_id});

	}



}]);
