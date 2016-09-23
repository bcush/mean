var app = angular.module('appName', ['ngRoute']);

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
            templateUrl:'partials/root.html'
        })
        .when('/catz', {
            templateUrl:'partials/catz.html'
        })
        .when('/products', {
            templateUrl:'partials/products.html'
        })
        .when('/orders', {
            templateUrl:'partials/orders.html'
        })
        .when('/editProduct/:id',{
            templateUrl:'partials/editProduct.html'
        })
        .when('/login', {
            templateUrl:'partials/loginreg.html',
            controller:'usersController'
        })
        .otherwise({
            redirectTo:'/'
        })
})