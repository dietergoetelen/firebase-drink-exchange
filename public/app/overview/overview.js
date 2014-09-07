(function () {
    'use strict';
    
    
    var app = angular.module('app.overview', [
       'ui.router' 
    ]);
    
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('overview', {
                url: '/overview',
                data: {
                    login: true
                },
                templateUrl: 'app/overview/views/overview.html'
            });
    }]);
    
    app.run([
        '$rootScope', 'DataService', '$state',
        function ($rootScope, dataService, $state) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                console.log(fromState);
                
                if (toState.data && toState.data.login && toState.data.login === true) {
                    if (!dataService.user) {
                        event.preventDefault();
                        $state.go('login');
                    }
                    
                }
                
            });
        }
    ]);
    
}());