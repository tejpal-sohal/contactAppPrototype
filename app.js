'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/person/:name", {
            templateUrl : "views/person.html",
            controller: "personCtrl"
        })
        .when("/404", {
            templateUrl : "views/error.html",
        })
        .otherwise({
            redirectTo: "/",
        })

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
}]);

