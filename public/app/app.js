/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app', [
        'app.common',
        'app.overview',
        'app.exchange',
        'ui.router'
    ]);
    
    app.config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/overview');
                }
           ]);
    
    app.constant('FBURL', 'https://drink-exchange.firebaseio.com/');
}());