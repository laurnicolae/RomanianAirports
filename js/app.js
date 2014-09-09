'use strict';

/* App Module */

var airportApp = angular.module('airportApp', [
  'ngRoute',
  'airportControllers'
]);

airportApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/airports', {
        templateUrl: 'partials/airport-list.html',
        controller: 'AirportListCtrl'
      }).
      when('/airports/:airportId', {
        templateUrl: 'partials/airport-detail.html',
        controller: 'AirportDetailCtrl'
      }).
      when('/in-flight', {
        templateUrl: 'partials/in-flight.html',
        controller: 'InFlightCtrl'
      }).
      when('/weather', {
        templateUrl: 'partials/weather.html',
        controller: 'WeatherCtrl'
      }).
      otherwise({
        redirectTo: '/airports'
      });
  }]);
