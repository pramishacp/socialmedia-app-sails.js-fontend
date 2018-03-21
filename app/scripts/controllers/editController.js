'use strict';

/**
 'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappApp
 */
angular.module('projectApp')
.controller('editCtrl', function($scope,$route,$routeParams,$http){
    
    console.log("editCtrl");

	$scope.updatePost = function(){

		var id = $routeParams.postid;

		var userToken=localStorage.getItem('token');

		$http.put('http://localhost:1337/posts/'+ id ,{'user_id':localStorage.getItem('id'),'category_id':$scope.post.category.id,'post':$scope.post},{headers: {'authorization': 'Bearer ' + userToken}}).then(function(response){
			
			$scope.post = response.data;
			console.log("update response",response);
			
			window.location.href = '/#!/viewpost';
		});
	};
    $scope.showPost = function(){

        console.log("inside showPost");
        
        var id =$routeParams.postid;
		console.log("showpostId", id);
		
		var userToken=localStorage.getItem('token');
		console.log(localStorage.getItem('token'));
		
		
		$http.get('http://localhost:1337/post/'+id,{headers: {'authorization': 'Bearer ' + userToken}}, $scope.post).then(function(response){
			$scope.post = response.data;
			console.log(response);

		});
	};
});