// This is our client side app
var app = angular.module('questionApp', ['ngRoute', 'ngMessages']);

// Set up our client side configs
app.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push(
      function($q, $location) {
        return {
          'responseError': function(rejection) {
            if (rejection.status == 401) {
              $location.url('/login');
            }
            return $q.reject(rejection);
       }
       };
  });

      $routeProvider
        .when('/new_question', {
          // Angular route to add new question
          templateUrl: 'partials/new_question.html',
          controller: 'questionsController'
        })
        .when('/question/:id/new_answer', {
          // Angular route to add answer to question
          templateUrl: 'partials/answer.html'
        })
        .when('/question/:id', {
          // Angular route to view question
          templateUrl: 'partials/question.html'
        })
        .when('/questions', {
          // Angular route to view all questions
          templateUrl: 'partials/questions.html'
        })
        .when('/login', {
          // Angular route to present login fields
          templateUrl: 'partials/login.html',
          controller:  'usersController'
        })
       .otherwise({
          // Otherwise ???
          redirectTo: '/login'
        });
});
