(function () {
    'use strict';
    
    var NewUserCtrl = (function () {
        function NewUserCtrl(DataService, $state) {
            var self = this;
            
            this.user = {};
            
            this.state = $state;
            this.dataService = DataService;
            
            this.dataService.successLoginCb = function () {
                self.state.go('overview');
            };
        }
        
        NewUserCtrl.prototype.register = function (user) {
            var self = this;
            
            this.dataService.register(user, function success() {
                self.dataService.login(user);
            });
        };
        
        NewUserCtrl.$inject = ['DataService', '$state'];
        
        return NewUserCtrl;
    }());
    
    angular.module('app.login').controller('NewUserCtrl', NewUserCtrl);
    
}());