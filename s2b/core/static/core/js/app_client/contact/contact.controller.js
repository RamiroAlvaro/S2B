(function () {
    'use strict';

    angular
        .module('s2bApp')
        .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$location'];

    function contactCtrl($location) {
        var vm = this;

        vm.submit = submit;
        vm.pageHeader = {
            title: 'CONTATO'
        };

        function submit() {
            console.log('Data contactForm ', vm.contact);
            $location.path('/');
        }
    }

})();