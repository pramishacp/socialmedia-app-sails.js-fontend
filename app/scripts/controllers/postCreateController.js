
'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('projectApp')
.controller('postCreateCtrl', function($scope,$route,$routeParams,$http,$rootScope){
	
    $rootScope.showsignup=false;
	$rootScope.showsignin=false;
	$rootScope.showlogout=false;
	$rootScope.showname=true;

	$scope.firstName=localStorage.getItem('first_name');
	   
	$scope.lastName=localStorage.getItem('last_name');
	
	console.log("first",localStorage.getItem('first_name'));
		console.log("last",localStorage.getItem('last_name'));



	$scope.postCreate = function(employee){
	 console.log("hai",employee);

		var userToken=localStorage.getItem('token');
		

		$http.post('http://localhost:1337/post/',{'user_id':localStorage.getItem('id'),'post':$scope.post},{headers: {'authorization': 'Bearer ' + userToken}}).then(function(response){
			 
			
			// console.log(response);
			// console.log(response.data.post.id);
	      
			 localStorage.setItem('categoryId',response.data.post.category.id);

			window.location.href = '/#!/viewpost';
			window.location.reload();

		});
	};

})





