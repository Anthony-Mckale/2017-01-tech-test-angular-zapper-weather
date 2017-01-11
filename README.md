# AngularJS Zap Weather Technical Test Application


## Overview

The Test is built on top of the angular-seed project [https://github.com/angular/angular-seed],
and constructed using Bootstrap, and Angular.

Unit Testing is performed by Karma running Jasmine on a remote browser, with Jquery-Jasmine providing JSON mock data

Integration Testing is performed by Protractor running webdriver which spins up it's own customised browser

Due to the limited time, no package building is carried out in this project, normally I'd use Grunt / Gulp to minify / transpile assets,
and remove testing and mock assets from the built distribution


To Fit requirements, I've chosen Edinburgh, going to http://localhost:8000/#/weather/3333229 will display 5 day weather forecast

Can be verified here http://openweathermap.org/city/3333229

If you which to choose your own location, go to http://localhost:8000/#/weather/ filter and click the desired UK location


### Setup

- Requires NPM / Java (for webdriver) installed
- Install NPM dependencies: 
```
npm install
```

### How to View Locally
- Run Dev HTTP Server from root directory
```
sudo npm install -g http-server
http-server -a localhost -p 8000 app/
```
- Navigate to http://localhost:8000

### How to run Integration Tests Locally
- Run Integration Tests (requires Dev HTTP)
```
npm run update-webdriver
npm run protractor
```

You should see
```
weather-zap-angular-test$ npm run protractor

> angular-zapper-weather-tech-test@1.0.0 preprotractor weather-zap-angular-test
> npm run update-webdriver


> angular-zapper-weather-tech-test@1.0.0 preupdate-webdriver weather-zap-angular-test
> npm install


> angular-zapper-weather-tech-test@1.0.0 postinstall weather-zap-angular-test
> bower install


> angular-zapper-weather-tech-test@1.0.0 update-webdriver weather-zap-angular-test
> webdriver-manager update

[06:09:08] I/update - chromedriver: file exists weather-zap-angular-test/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.26mac64.zip
[06:09:08] I/update - chromedriver: unzipping chromedriver_2.26mac64.zip
[06:09:09] I/update - chromedriver: setting permissions to 0755 for weather-zap-angular-test/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.26
[06:09:09] I/update - chromedriver: v2.26 up to date
[06:09:09] I/update - selenium standalone: file exists weather-zap-angular-test/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar
[06:09:09] I/update - selenium standalone: v2.53.1 up to date
[06:09:10] I/update - geckodriver: file exists weather-zap-angular-test/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.11.1-macos.tar.gz
[06:09:10] I/update - geckodriver: unzipping geckodriver-v0.11.1-macos.tar.gz
[06:09:10] I/update - geckodriver: setting permissions to 0755 for weather-zap-angular-test/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.11.1
[06:09:10] I/update - geckodriver: vv0.11.1 up to date

> angular-zapper-weather-tech-test@1.0.0 protractor weather-zap-angular-test
> protractor e2e-tests/protractor.conf.js

(node:70593) DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
[06:09:10] I/local - Starting selenium standalone server...
[06:09:10] I/launcher - Running 1 instances of WebDriver
[06:09:11] I/local - Selenium standalone server started at http://192.168.1.106:63595/wd/hub
Started
......


6 specs, 0 failures
Finished in 17.669 seconds
[06:09:30] I/local - Shutting down selenium standalone server.
[06:09:30] I/launcher - 0 instance(s) of WebDriver still running
[06:09:30] I/launcher - chrome #01 passed
```


#### Troubleshooting
 - Protractor can be very tricky, if you get 'const builder = require('./builder');' bug, try upgrading to latest stable node version, remember it needs a JVM too
```
npm cache clean -f
npm install -g n
n stable
```


### How to run Unit Tests Locally
- Run Unit Tests
```
npm test
```

- You should see this in terminal
```
weather-zap-angular-test$ npm test

> angular-zapper-weather-tech-test@1.0.0 pretest weather-zap-angular-test
> npm install


> angular-zapper-weather-tech-test@1.0.0 postinstall weather-zap-angular-test
> bower install


> angular-zapper-weather-tech-test@1.0.0 test weather-zap-angular-test
> karma start karma.conf.js

11 01 2017 06:05:04.198:WARN [karma]: No captured browser, open http://localhost:9876/
11 01 2017 06:05:04.208:INFO [karma]: Karma v0.13.22 server started at http://localhost:9876/
11 01 2017 06:05:04.213:INFO [launcher]: Starting browser Chrome
11 01 2017 06:05:04.219:INFO [launcher]: Starting browser Firefox
11 01 2017 06:05:05.683:INFO [Chrome 55.0.2883 (Mac OS X 10.11.6)]: Connected on socket dfPv6n4CyuQdNQJHAAAA with id 35594332
11 01 2017 06:05:07.723:INFO [Firefox 50.0.0 (Mac OS X 10.11.0)]: Connected on socket CZey5LiHJ9z7Ds9bAAAB with id 22334750
Firefox 50.0.0 (Mac OS X 10.11.0): Executed 6 of 6 SUCCESS (0.387 secs / 0.362 secs)
Chrome 55.0.2883 (Mac OS X 10.11.6): Executed 6 of 6 SUCCESS (0.258 secs / 0.231 secs)
TOTAL: 12 SUCCESS
```



### Data Source : Cleaned up City List

Incase anyone was wondering where I got the city list from :

- http://bulk.openweathermap.org/sample/ -> city.list.json.gz
- Cleaned up using regex (100k+ cities 18mb -> 2k cities)
```
add commas to end of lines

kill non GB
^(?:(?!"GB").)+$ -> empty

manually add brackets
```

## Explanation of what could be done with more time

This is a very simple application

A small non complete list of improvements follows :

- Add Error Page for invalid location ids eg http://localhost:8000/#/weather/XXX
- Proxy pass the data feed through a server you control, to protect your exposed API key, and don't hardcode it
- Use High charts to map locations, and improvement user interface http://www.highcharts.com/maps/demo/mappoint-latlon
- Use Instanbul to generate coverage reports, as to direct testing / set coverage thresholds
- Test Journeys travelling between pages in Integration Tests
- Minify all JS assets, perhap use browserify / babel
- Style Application, using raw bootstrap styles, could use LESS/SASS bootstrap files and skin our own theme
- Package Management, use Grunt/Gulp to streamline some of the common dev tasks
- Continuous Integration, setup a jenkins server to point to git and polling to run tests/upload on changes# zapper-weather-tech-test
- Build some filters for displaying temperature conversation / date in a nicer fashion