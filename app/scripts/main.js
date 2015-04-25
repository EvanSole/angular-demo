'use strict';

/* App Module */

var myApp = angular.module('myApp', [
    'loginControllers',
    'loginServices'
]);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('api/user/login', {
                controller: 'LoginCtrl',
                templateUrl: 'views/login.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);