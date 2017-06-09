(function () {
    'use strict';

    angular
       .module('s2bApp')
       .controller('homeCtrl', homeCtrl);


    function homeCtrl() {

        var vm = this;

        vm.pageHeader = {
            title: 'S2B-P@@L ',
            strapline: 'Carona solidária !!!'
        };
    }

})();