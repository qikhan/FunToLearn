'use strict';

/**
 * @ngdoc overview
 * @name funToLearnApp
 * @description
 * # funToLearnApp
 *
 * Main module of the application.
 */
angular
  .module('funToLearnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', 
    function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.tpl.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/multiplygrid', {
        templateUrl: 'views/multiplygrid.tpl.html',
        controller: 'MultiplyGridCtrl',
        controllerAs: 'multiplyGrid'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  ]);
