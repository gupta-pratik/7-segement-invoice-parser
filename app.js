'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.parseInvoice',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/parseInvoice', {
      templateUrl: 'parseInvoice/parseInvoice.html',
      controller: 'ParseInvoiceCtrl'
    })
  .otherwise({redirectTo: '/parseInvoice'});
}]);
