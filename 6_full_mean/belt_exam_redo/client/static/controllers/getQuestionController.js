// Define our Answers Controller
app.controller('getQuestionController', ['$scope', '$routeParams', 'QuestionFactory', function ($scope, $routeParams, QuestionFactory) {
  QuestionFactory.getOne($routeParams.id, function (data) {
    $scope.question = data;
    console.log(question);
  });
}]);

// function whoami(){
//     AnswerFactory.whoami(function(whoami){
//         $scope.whoami = whoami;
//         console.log(whoami);
//     });
// }
