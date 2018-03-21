'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('projectApp')
.controller('logoutCtrl', function($scope,$route,$routeParams,$window,$http,$rootScope,$location){
            
       
         $scope.logout = function() {
           
            $rootScope.showsignin=true;
            $rootScope.showsignup=true;
            $rootScope.showlogout=true;
            $rootScope.showname=false;
            
            // $rootScope.showsignin=true;
            // $rootScope.showsignup=true;
            // $rootScope.showlogout=true;
            // $rootScope.showname=true;

        

            $window.localStorage.removeItem('id');
       

             console.log("llll");

             window.location.href = '/#!/home';


         };


})