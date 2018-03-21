
'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('projectApp')
.controller('signInCtrl', function($scope,$route,$routeParams,$http,$rootScope){
	$scope.hello=true;
	console.log($scope.hello);
	$rootScope.showsignup=true;
	$rootScope.showsignin=false;
	$rootScope.showname=false;
	$rootScope.showlogout=true;
	 console.log("one",$rootScope.showsignup);
				 
							  console.log("two",$rootScope.showsignup);
				
				 console.log("three",$rootScope.showlogout);
				
				console.log("name",$rootScope.showname);

	



   console.log("signin");
	$scope.signInUser = function(){
	
		var userId=localStorage.getItem('id');
		
		var userToken=localStorage.getItem('token');

		var firstName=localStorage.getItem('first_name');
	   
		var lastName=localStorage.getItem('last_name');
	

		console.log("1",localStorage.getItem('id'));
		console.log("2",localStorage.getItem('token'));
		console.log("3",localStorage.getItem('first_name'));
		console.log("4",localStorage.getItem('last_name'));



	
		$http.post('http://localhost:1337/signin/', $scope.user).then(function(response){
			

			localStorage.setItem('id',response.data.user.id);
		
			
	
			console.log(response);
			console.log("lastname",response.data.user.last_name);
			console.log("firstname",response.data.user.first_name);
			localStorage.setItem('first_name',response.data.user.first_name);
			// localStorage.setItem('first_name',JSON.stringify(app));
			localStorage.setItem('last_name',response.data.user.last_name);

			
		
			window.location.href = '/#!/post';
				window.location.reload();
		})
	};

});