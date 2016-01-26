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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
