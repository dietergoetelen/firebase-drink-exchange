(function () {
    'use strict';
    
    var app = angular.module('app.login', ['ui.router']);
    
    app.config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $stateProvider
                        .state('login', {
                            url: '/login',
                            templateUrl: 'app/login/views/login.html'
                        })
                        .state('login.new', {
                            url: '/new',
                            templateUrl: 'app/login/views/login.new.html'
                        });
                }
           ]);
    
}());