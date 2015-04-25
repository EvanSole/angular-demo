'use strict';

/* Services */

var loginServices = angular.module('loginServices', []);

loginServices.factory('User', ['$resource',
    function($resource) {
        return $resource('', {}, {

        });
    }
]);