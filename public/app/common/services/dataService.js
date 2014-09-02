(function () {
    'use strict';
    
    var DataService = (function () {
        
        function DataService(FBURL, firebase) {
            this._firebase = firebase;
            this._ref = new Firebase(FBURL);
        }
        
        DataService.prototype.get = function (child) {
            var reference = this._ref.child('/' + child);
            return this._firebase(reference);
        };
        
        DataService.prototype.set = function (child, value) {
            var reference = this._ref.child('/' + child);
            this._firebase(reference).$set(value);
        };
        
        DataService.$inject = ['FBURL', '$firebase'];
        
        return DataService;
        
    }());
    
    angular.module('app.common').service('DataService', DataService);
}());