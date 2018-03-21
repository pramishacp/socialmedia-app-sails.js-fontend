
'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('projectApp')
.controller('homeCtrl', function($scope,$route,$routeParams,$http,$rootScope){

    
	$scope.viewHome = function(){
	console.log("hai");
        
		 
		$http.get('http://localhost:1337/posts',$scope.post).then(function(response){
			//$scope.employee = response.data;
         console.log(response);
        //  console.log(response.data.title);
		//  console.log(response.data.content);
		//  console.log(response.data.category.name);
			   
		        //  $rootScope.showsignup=false;
				// 	$rootScope.showsignin=false;
				
				// 	 $rootScope.showlogout=false;
				// 	$rootScope.showname=true;
				   $rootScope.showsignup=true;
				   $rootScope.showsignin=true;
				
				    $rootScope.showlogout=true;
				    $rootScope.showname=false;



	
				  console.log("one",$rootScope.showsignup);
				 
							  console.log("two",$rootScope.showsignup);
				
				 console.log("three",$rootScope.showlogout);
				
				console.log("name",$rootScope.showname);
						
				$scope.posts=response.data;
						console.log($scope.posts);
		
							
		});
	};

    

})