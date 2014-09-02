(function () {
    'use strict';
    
    
    var app = angular.module('app.overview', [
       'ui.router' 
    ]);
    
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('overview', {
                url: '/overview',
                templateUrl: 'app/overview/views/overview.html'
            });
    }]);
    
}());