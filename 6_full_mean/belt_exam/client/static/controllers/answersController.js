app.controller('answersController',['$scope', '$http','answerFactory','$location', '$routeParams', function($scope, $http,answerFactory, $location, $routeParams){
    function updateHTML(){
        answerFactory.getAnswers(function(answers){
            $scope.answers = answers;
        })
    }
    updateHTML();
    $scope.addAnswer = function(answerInfo){
        answerFactory.addAnswer(answerInfo, function(){
            updateHTML();
        });
    };

    $scope.logout = function(){
        answerFactory.logout(function(){
            $location.url('/login');
        })
    }

    $scope.getAnswer = function(){
        answerFactory.getAnswer($routeParams.id, function(answer){
            $scope.answer = answer;
            console.log($scope.answer);
        });
    };

    $scope.getAnswer();

}])