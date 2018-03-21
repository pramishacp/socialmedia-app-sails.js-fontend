'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
angular
  .module('projectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'signUpCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'signInCtrl',
      })
      .when('/post', {
        templateUrl: 'views/postCreate.html',
        controller: 'postCreateCtrl',
      })
      .when('/viewpost', {
        templateUrl: 'views/viewPost.html',
        controller: 'viewPostCtrl',
      })
      .when('/editpost/:postid', {
        templateUrl: 'views/editPost.html',
        controller: 'editCtrl',
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
      })
      .when('/h', {
        templateUrl: 'views/h.html',
        controller: 'homeC',
      })
         
         
      .otherwise({
        redirectTo: '/home'
      });
  });
