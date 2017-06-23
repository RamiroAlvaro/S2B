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

        vm.trip = {
            dia: new Date(2017, 5, 26, 15, 30)
        };
        function submit() {
            console.log('Data tripForm ', vm.trip);
            $location.path('/');
        }

    }

})();