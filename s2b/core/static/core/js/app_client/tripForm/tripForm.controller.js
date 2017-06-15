(function () {
    'use strict';

    angular
        .module('s2bApp')
        .controller('tripFormCtrl', tripFormCtrl);

    tripFormCtrl.$inject = ['$location'];
    function tripFormCtrl($location) {
        var vm = this;
        vm.redirect = redirect;
        vm.pageHeader = {
            title: 'INSIRA SEU TRAJETO'
        };

        function redirect() {
            $location.path('/');
        }

    }

})();