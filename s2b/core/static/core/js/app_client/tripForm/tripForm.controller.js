(function () {
    'use strict';

    angular
        .module('s2bApp')
        .controller('tripFormCtrl', tripFormCtrl);

    tripFormCtrl.$inject = ['$location'];
    function tripFormCtrl($location) {
        var vm = this;
        vm.submit = submit;
        vm.pageHeader = {
            title: 'INSIRA SEU TRAJETO'
        };

        function submit() {
            console.log('Data tripForm ', vm.trip);
            $location.path('/');
        }

    }

})();