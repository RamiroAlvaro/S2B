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
            trips: [{
                id: 1,
                origin: 'Funcionários',
                destination: 'Santa Tereza',
                origin_address : 'Av. Getúlio Vargas, 471',
                destination_address: 'Rua Hermilo Alves, 85',
                items: ['Diario', 'Homen', 'Honda Civic', 'Preto', 'HAO-1462'],
                username: 'Ramiro Alvaro'
            },{
                id: 2,
                origin: 'Prado',
                destination: 'Coração Eucarístico',
                origin_address : 'Rua Erê, 236',
                destination_address: 'Av. Dom José Gaspar, 725',
                items: ['Diario', 'Mulher', 'Fiat Punto', 'Branco', 'HKJ-5407'],
                username: 'Ana Paula Coda'
            },{
                id: 3,
                origin: 'Floresta',
                destination: 'Havaí',
                origin_address : 'Rua Curvelo, 95',
                destination_address: 'Rua Maria Beatriz, 288',
                items: ['Puntual', 'Homen', 'Nissan Livina', 'Vermelho', 'HEX-0049'],
                username: 'Pedro Paulo Gonçalves'
            },{
                id: 4,
                origin: 'Santa Tereza',
                destination: 'Funcionários',
                origin_address : 'Rua Hermilo Alves, 85',
                destination_address: 'Av. Getúlio Vargas, 471',
                items: ['Puntual', 'Homen', 'Fiat Siena', 'Preto', 'AAA-4444'],
                username: 'Mateus Hedegaard'
            },{
                id: 5,
                origin: 'Coração Eucarístico',
                destination: 'Prado',
                origin_address : 'Av. Dom José Gaspar, 725',
                destination_address: 'Rua Erê, 236',
                items: ['Diario', 'Mulher', 'Audi A3', 'Cinza', 'HNP-3131'],
                username: 'Elsa Susana Poulsen'
            }]
        };
    }

})();