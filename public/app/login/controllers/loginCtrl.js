(function () {
    
    'use strict';
    
    var LoginCtrl = (function () {
        
        function LoginCtrl(DataService, $state) {
            var self = this;
            
            this.state = $state;
            this.user = {};
            this.dataService = DataService;
            
            this.dataService.successLoginCb = function () {
                self.state.go('overview');
            };
        }
        
        LoginCtrl.prototype.login = function (user) {
            this.dataService.login(user);
        };
        
        LoginCtrl.$inject = ['DataService', '$state'];
        
        return LoginCtrl;
        
    }());
    
    angular.module('app.login').controller('LoginCtrl', LoginCtrl);
    
}());