var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(['$routeProvider', function($routeProvider){
$routeProvider.
when('/home', {
  templateUrl :'partials/home.html',
  controller: 'homeCtrl'
}).
when('/portfolio', {
  templateUrl : 'partials/portfolio.html',
  controller: 'portfolioCtrl'
}).
when('/contact', {
  templateUrl : 'partials/contact.html',
  controller : 'contactCtrl'
}).
when('/admin', {
  templateUrl: 'partials/admin.html',
  controller: 'adminCtrl'
}).
otherwise({
  redirectTo : '/home'
});

}]);