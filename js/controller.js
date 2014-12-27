var portfolio = angular.module('portfolio' );

portfolio.controller('portfolioCtrl', [ '$scope', function($scope){

}]);

portfolio.controller('homeCtrl', [ '$scope', '$http', function($scope, $http){
  $http.get('./projects/projects.json').success(function(data){
    $scope.projects = data;
console.log($scope.projects);
  });
}]);

portfolio.controller('contactCtrl', [ '$scope', function($scope){

}]);