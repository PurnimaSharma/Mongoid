(function() {
  'use strict';
  angular.module('myapp').directive('chart', chart);

  function chart() {
    var ddo = {
      restrict: 'E',
      templateUrl: '/assets/directives/highcharts.html',
      scope: {
        chartConfig: '=',
        chartId: '='
      }

    };
    return ddo;

    function link(scope, elem, attr) {

    }

  }

  
})();
