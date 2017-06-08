(function () {
    'use strict';

    angular
       .module('s2bApp')
       .controller('homeCtrl', homeCtrl);


    function homeCtrl() {

        var vm = this;

        vm.pageHeader = {
            title: 'S2B',
            strapline: 'Find places to work with wifi near you!'
        };
    }

})();