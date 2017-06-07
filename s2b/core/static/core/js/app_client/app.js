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
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: '/static/core/js/app_client/about/about.view.html',
                controller: 'aboutCtrl',
                controllerAs: 'vm'
            })
            .when('/register', {
                templateUrl: '/static/core/js/app_client/auth/register/register.view.html',
                controller: 'registerCtrl',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/static/core/js/app_client/auth/login/login.view.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            });

    }

    angular
        .module('s2bApp')
        .config(['$routeProvider', '$httpProvider', '$resourceProvider', config]);

})();