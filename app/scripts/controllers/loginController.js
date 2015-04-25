'use strict';

/* Controllers */
var loginControllers = angular.module('loginControllers', []);
console.log('---loading loginControllers---');
loginControllers.controller('LoginCtrl', function($scope,  $http, $window) {
        //user login
        $scope.login = function () {
            console.log('---user login---');
            $http.post('api/user/login', $scope.user).success(function (data, status, headers, config) {
                console.log("Success: user login success");
                $window.sessionStorage.token = data.token;
                $scope.message = 'Welcome';
            }).error(function (data, status, headers, config) {
                console.log("Error: Invalid user or password");
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;
                // Handle login errors here
                $scope.message = 'Error: Invalid user or password';
            });

        }
});