'use strict';


describe('Weather', function() {
  var $httpBackend,
    Weather,
    edinburghForecastData,
    citiesData;

  jasmine.getJSONFixtures().fixturesPath = 'base/mocks/';

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
    edinburghForecastData = getJSONFixture('weather-edinburgh.json');
    citiesData = getJSONFixture('../json/uk-cities.json');
  });

  beforeEach(module('services'));

  describe('Weather: forecast', function() {
    beforeEach(inject(function(_$httpBackend_, _Weather_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET(
        /http:\/\/api.openweathermap.org\/data\/2\.5\/forecast\?id=3333229.*/g
      ).respond(edinburghForecastData);

      Weather = _Weather_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the forecast data from `openweathermap`', function() {
      var edinburghForecast = Weather.forecast({locationId: 3333229});

      expect(edinburghForecast).toEqual({});

      $httpBackend.flush();

      expect(edinburghForecast.city.id).toEqual(3333229);
    });
  });

  describe('Weather: forecast', function() {
    beforeEach(inject(function(_$httpBackend_, _Weather_) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET("json/uk-cities.json").respond(citiesData);

      Weather = _Weather_;
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the cities data from `flat json`', function() {
      var cities = Weather.cities();

      expect(cities).toEqual([]);

      $httpBackend.flush();

      expect(cities.length).toEqual(2133);
    });
  });

});
