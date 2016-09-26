// Define our User Controller

app.controller('usersController', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory) {
  $scope.register = function(user) {
    UserFactory.register(user, function() {
      $location.url('#/questions');
    });
  };

  $scope.login = function(user){
    UserFactory.login(user, function() {
      $location.url('/questions');
    });
  };
}]);
