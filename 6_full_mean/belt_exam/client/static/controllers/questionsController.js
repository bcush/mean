app.controller('questionsController',['$scope', '$http','questionFactory','$location', '$routeParams', function($scope, $http,questionFactory, $location, $routeParams){
    function updateHTML(){
        questionFactory.getQuestions(function(questions){
            $scope.questions = questions;
        })
    }
    updateHTML();
    $scope.addQuestion = function(questionInfo){
        questionFactory.addQuestion(questionInfo, function(){
            updateHTML();
        });
    };

    $scope.logout = function(){
        questionFactory.logout(function(){
            $location.url('/login');
        })
    }

    $scope.getQuestion = function(){
        questionFactory.getQuestion($routeParams.id, function(question){
            $scope.question = question;
            console.log($scope.question);
        });
    };

    $scope.getQuestion();

}])