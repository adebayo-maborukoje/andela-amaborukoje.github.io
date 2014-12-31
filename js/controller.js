var portfolio = angular.module('portfolio' );

portfolio.controller('portfolioCtrl', [ '$scope', '$http', function($scope, $http){
		$http.get('./projects/projects.json').success(function(data){
		$scope.projects = data;
		//	console.log($scope.projects);
		}).error( function(err, status){
			$scope.projects.name = err;	
		});
}]);

portfolio.controller('homeCtrl', [ '$scope', '$http', function($scope, $http){
  $http.get('./projects/projects.json').success(function(data){
    $scope.projects = data;	
	console.log($scope.projects);
	$scope.order = '-age';
  });
}]);

portfolio.controller('contactCtrl', [ '$scope', function($scope){

}]);