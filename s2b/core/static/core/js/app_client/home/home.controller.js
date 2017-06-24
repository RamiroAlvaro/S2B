(function () {
    'use strict';

    angular
       .module('s2bApp')
       .controller('homeCtrl', homeCtrl);


    function homeCtrl() {

        var vm = this;

        vm.pageHeader = {
            title: 'S2B-POOL ',
            strapline: 'Procurando uma carona?'
        };
        vm.sidebar = {
            content: "Junte-se a motoristas no seu trajeto habitual para o trabalho, faculdade e de volta para casa ou apenas em um passeio eventual. Não há necessidade de esperar por um ônibus ou gastar uma fortuna em táxis e Uber! Viaje junto com pessoas como você em um carro regular. É mais barato, mais rápido e mais agradável do que usar o transporte público. Você quer ir a algum lugar e precisa de uma carona? Encontre motoristas relevantes no S2B-POOL e contacte-os para marcar uma carona. Você viaja sozinho para o trabalho, faculdade ou outra cidade? Ofereça carona e receba por ela! Compartilhe os detalhes da sua carona no S2B-POOL e passageiros entrarão em contato com você. Pegue passageiros e economize dinheiro, conheça pessoas interessantes e desfrute de boa companhia."
        };
        vm.data = {
            trips: [{
                id: 1,
                origin: 'Funcionários',
                destination: 'Santa Tereza',
                origin_address : 'Av. Getúlio Vargas, 471',
                destination_address: 'Rua Hermilo Alves, 85',
                items: ['Habitual', 'Vagas: 3', 'Homem', 'Honda Civic', 'HAO-1462'],
                username: 'Ramiro Alvaro'
            },{
                id: 2,
                origin: 'Prado',
                destination: 'Coração Eucarístico',
                origin_address : 'Rua Erê, 236',
                destination_address: 'Av. Dom José Gaspar, 725',
                items: ['Habitual', 'Vagas: 1', 'Mulher', 'Fiat Punto', 'HKJ-5407'],
                username: 'Ana Paula Coda'
            },{
                id: 3,
                origin: 'Floresta',
                destination: 'Havaí',
                origin_address : 'Rua Curvelo, 95',
                destination_address: 'Rua Maria Beatriz, 288',
                items: ['Eventual', 'Vagas: 3', 'Homem', 'Nissan Livina', 'HEX-0049'],
                username: 'Pedro Paulo Gonçalves'
            },{
                id: 4,
                origin: 'Santa Tereza',
                destination: 'Funcionários',
                origin_address : 'Rua Hermilo Alves, 85',
                destination_address: 'Av. Getúlio Vargas, 471',
                items: ['Eventual', 'Vagas: 1', 'Homem', 'Fiat Siena','OAL-3741'],
                username: 'Mateus Hedegaard'
            },{
                id: 5,
                origin: 'Coração Eucarístico',
                destination: 'Prado',
                origin_address : 'Av. Dom José Gaspar, 725',
                destination_address: 'Rua Erê, 236',
                items: ['Habitual', 'Vagas: 2', 'Mulher', 'Audi A3', 'HNP-3131'],
                username: 'Elsa Susana Poulsen'
            }]
        };
    }

})();