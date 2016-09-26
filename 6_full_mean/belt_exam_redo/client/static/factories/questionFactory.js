// Build out our Question Factory

app.factory('QuestionFactory', ['$http', function($http) {
  return {
    ask: function(question, callback) {
      $http({
        method: "POST",
        url: "/questions",
        data: question
      }).then(function(question) {
        callback();
      });
    },

    getOne: function(id, callback) {
      $http({
        method: "GET",
        url: "/questions/" + id,
      }).then(function(res) {
        question.data = res.data;
        callback(question);
      });
    }
  };
}]);
