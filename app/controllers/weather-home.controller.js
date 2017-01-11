'use strict';

// Define the `controllers` module
angular.
  module('controllers').controller('controllers.WeatherHome', [
  'Weather', '$scope' , function (Weather, $scope) {
      $scope.cities = Weather.cities();
      $scope.filterText = '';
    }
  ]);