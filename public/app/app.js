/*global angular*/
(function () {
    'use strict';
    
    var app = angular.module('app', [
        'app.common',
        'app.overview',
        'app.exchange',
        'app.login',
        'ngAnimate',
        'ui.router'
    ]);
    
    app.config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/drink-exchange');
                }
           ]);
    
    // Check authentication
    app.run([
        '$rootScope', 'DataService', '$state',
        function ($rootScope, dataService, $state) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                if (toState.data && toState.data.login && toState.data.login === true) {
                    if (!dataService.user) {
                        event.preventDefault();
                        $state.go('login');
                    }
                }
            });
        }
    ]);

    app.constant('FBURL', 'https://drink-exchange-login.firebaseio.com/');
}());