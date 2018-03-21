
'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('projectApp')
.controller('viewPostCtrl', function($scope,$route,$routeParams,$mdDialog,$http,$location,$rootScope){
	
    $rootScope.showsignup=false;
	$rootScope.showsignin=false;
	$rootScope.showname=true;
	$rootScope.showlogout=false;

	$scope.viewPost = function(){
	console.log("hai view");



		var userToken=localStorage.getItem('token');
		console.log(localStorage.getItem('token'));
		 
		$http.get('http://localhost:1337/posts/'+localStorage.getItem('id'),{headers: {'authorization': 'Bearer ' + userToken}},$scope.post).then(function(response){
			//$scope.employee = response.data;
         console.log(response);
        //  console.log(response.data.title);
		//  console.log(response.data.content);
		//  console.log(response.data.category.name);
		        $scope.posts=response.data;
			
							
		});
	};

	$scope.deletePost = function(deleteId){
	console.log("delete");

    // localStorage.getItem('postId');
    // console.log('postId',postId);


		var userToken=localStorage.getItem('token');
		console.log(localStorage.getItem('token'));
		 
		$http.delete('http://localhost:1337/posts/'+deleteId,{headers: {'authorization': 'Bearer ' + userToken}},$scope.post).then(function(response){

       
							
		});
	};

	

})