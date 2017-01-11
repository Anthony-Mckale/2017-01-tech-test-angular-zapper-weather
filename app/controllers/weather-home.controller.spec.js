'use strict';


describe('WeatherHome', function() {
  var $httpBackend,
    $scope,
    WeatherHome,
    citiesData;

  jasmine.getJSONFixtures().fixturesPath = 'base/mocks/';

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
    citiesData = getJSONFixture('../json/uk-cities.json');
  });

  beforeEach(module('controllers', 'services'));

  describe('WeatherHome: should fetch cities data', function() {
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, _Weather_) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET("json/uk-cities.json").respond(citiesData);

      $scope = $rootScope.$new();
      WeatherHome = $controller('controllers.WeatherHome', {$scope: $scope, Weather: _Weather_});
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the cities data from `flat json`', function() {
      expect($scope.cities).toEqual([]);

      $httpBackend.flush();

      expect($scope.cities.length).toEqual(2133);
    });
  });

});
