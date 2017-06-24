(function () {
    'use strict';

    angular
       .module('s2bApp')
       .controller('tripDetailCtrl', tripDetailCtrl);

    tripDetailCtrl.$inject = ['authService', '$uibModal'];
    function tripDetailCtrl(authService, $uibModal) {

        var vm = this;
        vm.isLoggedIn = isLoggedIn;
        vm.pageHeader = {
            title: 'Funcionários --> Santa Tereza ',
            strapline: ''
        };

        vm.trip = {
                id: 1,
                origin: 'Funcionários',
                destination: 'Santa Tereza',
                origin_address: 'Av. Getúlio Vargas, 471',
                destination_address: 'Rua Hermilo Alves, 85',
                items: ['Vagas: 3', 'Homem', 'Honda Civic', 'HAO-1462'],
                days: ['Segunda: 14:00 hs', 'Terça: 14:30 hs', 'Quarta: 14:00 hs','Quinta: 14:30 hs', 'Sexta: 14:00 hs'],
                username: 'Ramiro Alvaro',
                messages: [{
                    author: 'Ana Paula Coda',
                    createdOn: '26/06/2017',
                    text:'Ramiro me confirma? Se puder, me chame no whatsapp 31 99138 7178 pros detalhes.'
                },{
                    author: 'Pedro Paulo Gonçalves',
                    createdOn: '24/06/2017',
                    text:'Galera não conseguirei ir hoje.'
                },{
                    author: 'Mateus Hedegaard',
                    createdOn: '15/06/2017',
                    text:'Já estou chegando :-)'
                }]
        };

        function isLoggedIn() {
            return authService.isLoggedIn();
        };


        vm.popupReviewForm = function () {
            var uibModalInstance = $uibModal.open({
                templateUrl: '/static/core/js/app_client/messageModal/messageModal.view.html',
                controller: 'messageModalCtrl as vm',

            });

        };

    }

})();