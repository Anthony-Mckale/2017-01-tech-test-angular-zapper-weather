'use strict';

// Define the `controllers` module
angular.
  module('controllers').controller('controllers.WeatherDetail', [
  'Weather', '$scope', '$routeParams', function (Weather, $scope, $routeParams) {
      $scope.locationId = $routeParams.locationId;
      $scope.forecast = Weather.forecast({locationId:$scope.locationId});
    }
  ]);