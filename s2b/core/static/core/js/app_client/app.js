(function () {
    'use strict';

    angular.module('s2bApp', ['ngRoute', 'ngResource']);

    function config ($routeProvider, $httpProvider, $resourceProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

        $resourceProvider.defaults.stripTrailingSlashes = false;
        
        $routeProvider
            .when('/', {
                templateUrl: '/static/core/js/app_client/home/home.view.html',
                controller: 'homeCtrl'
            });
}

    angular
        .module('s2bApp')
        .config(['$routeProvider', '$httpProvider', '$resourceProvider', config]);

})();