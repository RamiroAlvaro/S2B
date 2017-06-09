(function () {
    'use strict';

    angular
        .module('s2bApp')
        .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$location'];

    function contactCtrl($location) {
        var vm = this;

        vm.home = home;
        vm.pageHeader = {
            title: 'CONTATO'
        };

        function home() {
            $location.path('/');
        }
    }

})();