// Define our Questions Controller

app.controller('questionsController', ['$scope', '$location', 'QuestionFactory', function($scope, $location, QuestionFactory) {
  $scope.ask = function(question) {
    QuestionFactory.register(question, function() {
      $location.url('#/questions');
    });
  };
}]);
