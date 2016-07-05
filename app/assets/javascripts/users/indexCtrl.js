
angular.module('myapp').controller('IndexCtrl',['$scope','$state','indexFact', function($scope,$state,indexFact){
$scope.save = function(users)
{   
	$scope.users = users
	indexFact.post($scope.users).then(function(data){
		console.log(data.status)
		if (data.status == 200)
			$state.go('show');
		else
            $state.go('index');
	})

}
}]);