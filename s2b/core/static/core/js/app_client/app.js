(function () {

    angular.module('s2bApp', ['ngRoute']);

    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/static/core/js/app_client/home/home.view.html',
                controller: 'homeCtrl'
            });
}

    angular
        .module('s2bApp')
        .config(['$routeProvider', config]);

})();