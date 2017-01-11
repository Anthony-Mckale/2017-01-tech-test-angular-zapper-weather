'use strict';


describe('WeatherDetail', function() {
  var $httpBackend,
    $scope,
    WeatherDetails,
    edinburghForecastData;

  jasmine.getJSONFixtures().fixturesPath = 'base/mocks/';

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
    edinburghForecastData = getJSONFixture('weather-edinburgh.json');
  });

  beforeEach(module('controllers', 'services'));

  describe('WeatherDetail: should fetch weather data', function() {
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, _Weather_) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET(
        /http:\/\/api.openweathermap.org\/data\/2\.5\/forecast\?id=3333229.*/g
      ).respond(edinburghForecastData);

      $scope = $rootScope.$new();
      WeatherDetails = $controller('controllers.WeatherDetail', {$scope: $scope, Weather: _Weather_, $routeParams:{locationId:3333229}});
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the weather data from `openweathermap`', function() {
      expect($scope.forecast).toEqual({});

      $httpBackend.flush();

      expect($scope.forecast.city.id).toEqual(3333229);
    });
  });

});
