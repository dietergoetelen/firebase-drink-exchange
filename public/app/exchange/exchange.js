(function () {
    'use strict';
    
    
    var app = angular.module('app.exchange', [
        'ui.router',
        'firebase'
    ]);
    
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('drink-exchange', {
                url: '/drink-exchange',
                data: {
                    login: true
                },
                templateUrl: 'app/exchange/views/exchange.html'
            })
            .state('drink-exchange.new', {
                url: '/new',
                data: {
                    login: true
                },
                templateUrl: 'app/exchange/views/exchange.new.html'
            });
    }]);
    
}());