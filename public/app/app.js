/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app', [
        'app.exchange',
        'ui.router'
    ]);
    
    app.config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/drink-exchange');
                }
           ]);
    
    app.constant('FBURL', 'https://drink-exchange.firebaseio.com/');
}());