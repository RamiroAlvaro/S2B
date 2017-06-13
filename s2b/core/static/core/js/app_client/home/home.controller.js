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
        vm.sidebar = {
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        };
        vm.data = {
            recorridos: [{
                id: 1,
                name: 'Horto - Gonnet',
                origin_address : 'Rua Alabastro, n 27',
                destination_address: 'Rua Pepe, n 745',
                caracteristicas: ['Puntual', 'Honda Civic', '2015'],
                username: 'Ramiro Alvaro'
            },{
                id: 2,
                name: 'Pepe - Gonnet',
                origin_address : 'Rua Alabastro, n 27',
                destination_address: 'Rua Pepe, n 745',
                caracteristicas: ['Diario', 'Honda City', '2014'],
                username: 'Ramiro Alvaro'
            }]
        };
    }

})();