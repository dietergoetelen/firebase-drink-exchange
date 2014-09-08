(function () {
    'use strict';
    
    var DataService = (function () {
        
        function DataService(FBURL, firebase) {
            var self = this;
            
            this.successLoginCb = function () {
            };
            
            this._firebase = firebase;
            this._ref = new Firebase(FBURL);
            
            this.user;
            
            this._authClient = new FirebaseSimpleLogin(this._ref, function (error, user) {
                if (error) {
                    alert('Error...');
                    return;
                }
                
                if (user) {
                    self.user = user;
                    self.successLoginCb();    
                }
            });
        }
        
        DataService.prototype.get = function (child) {
            var reference = this._ref.child('/' + child);
            return this._firebase(reference);
        };
        
        DataService.prototype.set = function (child, value) {
            var reference = this._ref.child('/' + child);
            this._firebase(reference).$set(value);
        };
        
        DataService.prototype.login = function (user) {
            this._authClient.login('password', {
                email: user.username,
                password: user.password,
                rememberMe: true
            });
        };
        
        DataService.prototype.register = function (user, successCb, errorCb) {
            this._authClient.createUser(user.username, user.password, function (error, user) {
                if(error) {
                    if(errorCb) {                     
                        errorCb(error);
                    }
                } else if(successCb) {
                    successCb();
                }
            });
        };
        
        DataService.$inject = ['FBURL', '$firebase'];
        
        return DataService;
        
    }());
    
    angular.module('app.common').service('DataService', DataService);
}());