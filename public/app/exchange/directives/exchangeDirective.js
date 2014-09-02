(function () {
    'use strict';
    
    angular.module('app.exchange').directive('exchange', function () {
        return {
            restrict: 'AE',
            template: '<div ng-click="vote()" class="{{customClass}} panel panel-default">'+
                        '<div class="panel-heading">'+
                            '<h3 class="panel-title">{{value.name}}</h3>'+
                        '</div>    '+
                        '<div class="panel-body">'+
                            '<h2 class="price text-center">'+
                                '{{ value.price | currency:"€ " }}'+
                            '</h2>'+
                        '</div>'+
                    '</div>',
            scope: {
                value: '=',
                customClass: '@',
                vote: '&'
            },
            link: function (scope, elem, attrs) {
                
            }
        };
    });
}());