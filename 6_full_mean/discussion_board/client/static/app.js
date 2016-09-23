/* Start Angular */
var app = angular.module('appName', ['ngRoute']);

/* Configure our routeProvider provider */
app.config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push(
        function($q, $location) {
        return {
            'responseError':function(rejection){
            if (rejection.status == 401){
                $location.url('/login');
            }
            return $q.reject(rejection);
        }
        };
    });


    $routeProvider
        .when('/', {
            templateUrl:'partials/loginreg.html',
            controller:'usersController'
        })
        .when('/login', {
            templateUrl:'partials/loginreg.html',
            controller:'usersController'
        })
        .when('/dashboard', {
            templateUrl:'partials/dashboard.html'
        })
        .when('/topic/:id', {
            templateUrl:'partials/topic.html'
        })
        .when('/user/:id',{
            templateUrl:'partials/user.html'
        })
        .otherwise({
            redirectTo:'/'
        })
})