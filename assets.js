const CSS = [
  'font-awesome/css/*.min.css',
  'font-awesome/fonts/*',
  'bootstrap/dist/css/bootstrap.min.css',
  'bootstrap/dist/css/bootstrap.min.css.map',
  'bootstrap/dist/css/bootstrap-theme.min.css',
  'bootstrap/dist/css/bootstrap-theme.min.css.map',
];

const JS = [
  'socket.io-client/dist/socket.io.min.js',
  'socket.io-client/dist/socket.io.min.js.map',
  'fabric/dist/fabric.min.js',
  'angular/angular.min.js',
  'angular/angular.min.js.map',
  'angular-route/angular-route.min.js',
  'angular-route/angular-route.min.js.map',
  'jquery/dist/jquery.min.js',
  'bootstrap/dist/js/bootstrap.min.js',
];

module.exports = [ ...JS, ...CSS ];
