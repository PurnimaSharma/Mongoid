
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

        $scope.chartConfig = {
          options: {
            chart: {
              type: 'line'
            },
            plotOptions: {
              series: {
                stacking: ''
              }
            }
          },
          series: [{
            name: "Tokyo",
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            id: "series-0"
          }, {
            name: "New York",
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
            connectNulls: true,
            id: "series-1",
            type: "line"
          }, {
            name: "Berlin",
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
            type: "line",
            id: "series-2"
          }, {
            name: "London",
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
            type: "line",
            id: "series-3"
          }],
          title: {
            text: "Purnima"
          },
          credits: {
            enabled: true
          },
          loading: false,
          size: {},
          subtitle: {
            text: "Sharma"
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]
          },
          yAxis: {
            title: {
              text: 'Temperature (°C)'
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
        }

}]);