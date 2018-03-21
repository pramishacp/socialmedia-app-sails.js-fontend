
'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('projectApp')
.controller('signUpCtrl', function($scope,$route,$routeParams,$http,$rootScope){
 
    $rootScope.showsignup=false;
	$rootScope.showsignin=true;
	$rootScope.showlogout=true;
	$rootScope.showname=false;
	
	$scope.signUpUser = function(user){
	console.log("hai",user);
		
		$http.post('http://localhost:1337/signup', $scope.user).then(function(response){

			// console.log(response);
			// console.log(response.id);
			// console.log(response.token);
 
            localStorage.setItem('id',response.data.user.id);
			localStorage.setItem('token',response.data.token);
			 
			// var app=response.data.user.first_name;
		    // console.log('app',app);
			localStorage.setItem('first_name',response.data.user.first_name);
			// localStorage.setItem('first_name',JSON.stringify(app));
			localStorage.setItem('last_name',response.data.user.last_name);
			window.location.href = '/#!/signin';
		});
	};

});