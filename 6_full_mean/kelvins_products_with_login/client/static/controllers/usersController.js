app.controller('usersController', ['$scope','$location','UserFactory', function($scope, $location, UserFactory){
    $scope.test = "hallo";
    $scope.create = function(user){
        UserFactory.create(user,function(){
            $location.url('/products');
        })
    }
    $scope.login = function(user){
        UserFactory.login(user,function(){
            $location.url('/products');
        })
    }
}])