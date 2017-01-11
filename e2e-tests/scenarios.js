'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Weather Application', function() {

  it('should redirect `index.html` to `index.html#!/weather', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toBe('/weather');
  });

  describe('View: Weather Home', function() {
    beforeEach(function () {
      browser.get('index.html#/weather');
    });

    it('should render title', function () {
      var headerElement = element(by.css('h1'));
      expect(headerElement.getText()).toBe('Simple Weather Technical Test');
    });

    it('should render all cities', function () {
      var expectedCities = 2133;

      var cityElements = element.all(by.css('.city'));
      expect(cityElements.count()).toBe(expectedCities);
    });

    it('should render all cities, selected by filter', function () {
      var expectedCities = 2;
      var givenFilter = 'Edinburgh';

      var inputField = element(by.model('filterText'));
      inputField.sendKeys(givenFilter);

      var cityElements = element.all(by.css('.city'));
      expect(cityElements.count()).toBe(expectedCities);
    });
  });

  describe('View: Weather Detail', function() {
    beforeEach(function() {
      browser.get('index.html#/weather/3333229');
    });

    it('should render title', function() {
      var headerElement = element(by.css('h1'));
      expect(headerElement.getText()).toBe('Details For City of Edinburgh');
    });

    it('should render weather slices', function() {
      // due to not always rendering all of today's weather expect
      // at least 4 days worth
      var expectedWeatherSlices = 4 * (24 / 3);

      var weatherSlicesElements = element.all(by.css('.weather-slice'));
      expect(weatherSlicesElements.count()).toBeGreaterThan(expectedWeatherSlices);
    });
  });
});
