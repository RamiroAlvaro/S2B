(function () {
    'use strict';

    angular
        .module('s2bApp')
        .controller('tripTableCtrl', tripTableCtrl);

    tripTableCtrl.$inject = ['$location'];
    function tripTableCtrl($location) {
        var vm = this;
        vm.pageHeader = {
            title: 'MEUS TRAJETOS'
        };



    }

})();