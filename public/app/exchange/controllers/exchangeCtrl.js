(function () {
    'use strict';
    
    var ExchangeCtrl = (function () {
        
        function ExchangeCtrl(scope, DataService) {
            this.scope = scope;
            this.dataService = DataService;
            
            this.bindExchange();
        }
        
        ExchangeCtrl.prototype.bindExchange = function () {
            var vm = this;
            
            var syncObject = vm.dataService.get('').$asObject();
            
            syncObject.$bindTo(vm.scope, 'overview');
        };
        
        ExchangeCtrl.prototype.vote = function (exchange) {
            console.log(exchange);
        };

        ExchangeCtrl.$inject = ['$scope', 'DataService'];
        
        return ExchangeCtrl;
        
    }());
    
    
    angular.module('app.exchange').controller('ExchangeCtrl', ExchangeCtrl);
    
}());