(function () {
    angular
        .module('s2bApp')
        .controller('messageModalCtrl', messageModalCtrl);

    messageModalCtrl.$inject = ['$uibModalInstance'];
    function messageModalCtrl($uibModalInstance) {
        var vm = this;
        vm.username = 'Ramiro';
        vm.modal = {
            cancel : function () {
                $uibModalInstance.dismiss('cancel');
            }
        };
    }
})();