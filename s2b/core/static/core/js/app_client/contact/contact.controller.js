(function () {
    'use strict';

    angular
        .module('s2bApp')
        .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$location'];

    function contactCtrl($location) {
        var vm = this;

        vm.redirect = redirect;
        vm.pageHeader = {
            title: 'CONTATO'
        };

        function redirect() {
            $location.path('/');
        }
    }

})();