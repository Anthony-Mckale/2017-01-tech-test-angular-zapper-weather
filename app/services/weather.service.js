'use strict';

// FIXME : Hardcoded API Key, in production this would never happen
// only here as this is a free API key which is rate limited for a technical test
// would normally be in a configuration file

var apiKey = "332b799f016e3c84f39b62adc20d8ef6";

angular.
  module('services').
  factory('Weather', ['$resource',
    function($resource) {
      return $resource('http://api.openweathermap.org/data/2.5/forecast?id=:locationId&appid=' + apiKey, {}, {
        forecast: {
          method: 'GET',
          params: {locationId: '3333229'}
        },
        cities: {
          url: 'json/uk-cities.json',
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
