//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js',
      { pattern: 'json/*.json', included: false },
      { pattern: 'mocks/*.json', included: false }
    ],

    autoWatch: true,

    frameworks: [
      'jasmine-jquery',
      'jasmine'
    ],

    browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-jasmine-jquery',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]

  });
};
