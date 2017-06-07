(function () {
    'use strict';

    angular
       .module('s2bApp')
       .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope'];
    function homeCtrl($scope) {
        $scope.pageHeader = {
            title: 'S2B AngularJS'
        };
    }

})();