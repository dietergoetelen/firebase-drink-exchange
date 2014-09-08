(function () {
    'use strict';
    
    var OverviewCtrl = (function () {
        function OverviewCtrl(scope, DataService) {
            this.dataService = DataService;
            this.scope = scope;
            
            this.bindOverview();
        }
        
        OverviewCtrl.prototype.bindOverview = function () {
            var vm = this;
            
            var syncObject = vm.dataService.get(vm.dataService.user.uid).$asObject();
            syncObject.$bindTo(vm.scope, 'overview');
        };
        
        OverviewCtrl.$inject = ['$scope', 'DataService'];
        
        return OverviewCtrl;
    }());
    
    
    angular.module('app.overview').controller('OverviewCtrl', OverviewCtrl);
    
}());