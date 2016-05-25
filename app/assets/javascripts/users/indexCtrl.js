
angular.module('myapp').controller('IndexCtrl',['$scope','indexFact', function($scope,indexFact){
$scope.save = function(users)
{   
	$scope.users = users
	indexFact.post($scope.users).then(function(data){

	})
     
}
}]);