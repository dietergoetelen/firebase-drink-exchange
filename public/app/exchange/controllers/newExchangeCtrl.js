(function () {
    'use strict';
    
    var NewExchangeCtrl = (function () {
        
        function NewExchangeCtrl($state, DataService) {
            this.newExchange = {};
            this.dataService = DataService;
            this.$state = $state;
        }
        
        NewExchangeCtrl.prototype.save = function (exchange) {
            if (exchange.name && exchange.rating) {
                // Set default amount to zero
                exchange.amount = 0;
                
                // Todo: save to database
                this.dataService.set(exchange.name, exchange);        
                
                this.$state.go('drink-exchange');
            } else {
                // Todo: show error message
            }
        };
        
        NewExchangeCtrl.$inject = ['$state', 'DataService'];

        return NewExchangeCtrl;
        
    }());
    
    
    angular.module('app.exchange').controller('NewExchangeCtrl', NewExchangeCtrl);
    
}());