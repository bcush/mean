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

    whoami: function(callback){
        $http({
            method:"GET",
            url:'/whoami'
        }).then(function(res){
            whoami = res.data;
            callback(whoami);
        });
    },

    getAll: function(callback){
        $http({
            method:"GET",
            url:'/questions'
        }).then(function(res){
            questions = res.data;
            callback(questions);
        });
    },

    getOne: function(id, callback) {
      $http({
        method: "GET",
        url: "/questions/" + id,
      }).then(function(res) {
        question = res.data;
        callback(question);
      });
    }
  };
}]);
