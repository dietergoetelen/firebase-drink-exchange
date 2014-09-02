(function () {
    'use strict';
    
    var NewExchangeCtrl = (function () {
        
        function NewExchangeCtrl($state) {
            this.newExchange = {};
            this.$state = $state;
        }
        
        NewExchangeCtrl.prototype.save = function (exchange) {
            this.$state.go('drink-exchange');
        };
        
        NewExchangeCtrl.$inject = ['$state'];

        return NewExchangeCtrl;
        
    }());
    
    
    angular.module('app.exchange').controller('NewExchangeCtrl', NewExchangeCtrl);
    
}());