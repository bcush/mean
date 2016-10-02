// Define our Questions Controller

app.controller('questionsController', ['$scope', '$location', 'QuestionFactory', function($scope, $location, QuestionFactory) {
  function updateHTML(){
      QuestionFactory.getAll(function(questions){
          $scope.questions = questions;
          whoami();
      });
  }

  function whoami(){
      QuestionFactory.whoami(function(whoami){
          $scope.whoami = whoami;
          console.log(whoami);
      });
  }

  $scope.ask = function(question) {
    QuestionFactory.ask(question, function() {
      $location.url('/questions');
    });
  };

  $scope.cancel = function(){
    $location.url('/questions');
  };

  updateHTML();

}]);
