(function () {
    'use strict';
    
    var ExchangeCtrl = (function () {
        
        var calculatePrice = {
            '+': function (price, rating) {
                return +(price + (rating / 100)).toFixed(2);
            },
            '-': function (price, rating) {
                return +(price - (rating / 100)).toFixed(2);
            }
        };
        
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
            var updatedExchange = exchange,
                vm = this;
            
            updatedExchange.amount = updatedExchange.amount + 1;
            updatedExchange.price = calculatePrice['+'](updatedExchange.price, updatedExchange.rating);
            
            // Update this price
            vm.dataService.set(exchange.name, updatedExchange);
            
            // Update other prices
            angular.forEach(vm.scope.overview, function (ex) {
                if (ex && ex.name != exchange.name) {
                    ex.price = calculatePrice['-'](ex.price, ex.rating);
                    
                    if (ex.price < 1) {
                        ex.price = 1;
                    }
                    
                    vm.dataService.set(ex.name, ex);
                }
            });
        };

        ExchangeCtrl.$inject = ['$scope', 'DataService'];
        
        return ExchangeCtrl;
        
    }());
    
    
    angular.module('app.exchange').controller('ExchangeCtrl', ExchangeCtrl);
    
}());