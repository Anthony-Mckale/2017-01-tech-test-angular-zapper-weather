'use strict';

angular.
  module('weatherApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/weather', {
          templateUrl: 'view/weather-home.tmp.html',
          controller: 'controllers.WeatherHome'
        }).
        when('/weather/:locationId', {
          templateUrl: 'view/weather-details.tmp.html',
          controller: 'controllers.WeatherDetail'
        }).
        otherwise('/weather');
    }
  ]);
