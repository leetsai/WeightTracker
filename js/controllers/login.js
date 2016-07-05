/**
 * Controller: loginCtrl
 */
app.controller('loginCtrl', function($scope, $location, $rootScope) {
  $scope.submit = function() {
    // $rootScope is kind of like a global variable
    if($scope.username == 'admin' && $scope.password == 'admin') {
      $rootScope.loggedIn = true;
      $location.path('/dashboard');
    } else {
      alert("Username or password does not match with what is on record")
    }
  };
});
