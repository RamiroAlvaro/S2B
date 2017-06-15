(function () {
    'use strict';

    angular
       .module('s2bApp')
       .controller('tripDetailCtrl', tripDetailCtrl);


    function tripDetailCtrl() {

        var vm = this;

        vm.pageHeader = {
            title: 'DETAIL VIEW',
            strapline: ''
        };

    }

})();