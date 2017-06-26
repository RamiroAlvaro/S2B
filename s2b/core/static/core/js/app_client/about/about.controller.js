(function () {
    'use strict';

    angular
        .module('s2bApp')
        .controller('aboutCtrl', aboutCtrl);
    
    function aboutCtrl() {
        var vm = this;

        vm.pageHeader = {
            title: 'SOBRE NÓS'
        };
        vm.main = {
            content: 'Está pensando em sair de casa e com aquela preguiça de esperar o ônibus? \n\n Existe um meio rápido e fácil para se locomover. O projeto S2B-P@@L vem com a praticidade e a rapidez afim de ser um diferencial na rotina diária das pessoas. Seja motorista ou caroneiro, interaja, avalie os usuários e tenha uma boa viagem!'
        };
    }

})();