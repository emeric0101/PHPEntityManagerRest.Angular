/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: '',
      'angular': 'npm:angular/angular.js',
      'angular-route': 'npm:angular-route/angular-route.js',
      'phpangular': 'npm:phpangular/index.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: 'js/Main.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);