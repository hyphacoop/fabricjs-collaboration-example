const CSS = [
  'bootstrap/dist/css/bootstrap.min.css',
  'font-awesome/css/*.min.css',
  'font-awesome/fonts/*',
  'bootstrap/dist/css/bootstrap-theme.min.css',
];

const JS = [
  'socket.io-client/dist/socket.io.min.js',
  'fabric/dist/fabric.min.js',
  'angular/angular.min.js',
  'angular-route/angular-route.min.js',
  'jquery/dist/jquery.min.js',
  'bootstrap/dist/js/bootstrap.min.js',
];

module.exports = [ ...JS, ...CSS ];
