var app = angular.module('WeightApp', ['ngRoute']);

app.config(function($routeProvider) {
  // configure urls
  $routeProvider
    // login route
    .when('/', {
      templateUrl: 'views/login.html'
    })
    .when('/dashboard', {
      // prevent the user from going straight to the dashboard
      // resolve: {
      //   // checks against a function
      //   "check": function($location, $rootScope) {
      //     if(!$rootScope.loggedIn) {
      //       $location.path('/');
      //     }
      //   }
      // },
      templateUrl: 'views/dashboard.html'
    })
    .otherwise({
      // default
      redirectTo: '/'
    });
});
