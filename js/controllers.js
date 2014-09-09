'use strict';

/* Controllers */

var airportControllers = angular.module('airportControllers', []);

airportControllers.controller('AirportListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/airports.json').success(function(data) {
      $scope.airports = data;
    });

    $scope.orderProp = 'name';
  }]);

airportControllers.controller('AirportDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $scope.airportId = $routeParams.airportId;

    $http.get('data/airports.json').success(function(data) {
      $scope.airport = data[$scope.airportId];
      console.log($scope.airport);
    });
}]);

airportControllers.controller('InFlightCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.airportId = $routeParams.airportId;
}]);

airportControllers.controller('WeatherCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.airportId = $routeParams.airportId;
}]);