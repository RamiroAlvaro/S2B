(function () {
    'use strict';

    angular.module('s2bApp', ['ngRoute', 'ngResource', 'ngStorage', 'ngMessages', 'ui.bootstrap']);

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
                templateUrl: '/static/core/js/app_client/auth/register.view.html',
                controller: 'AuthController',
                controllerAs: 'vm'
            })
            .when('/login', {
                templateUrl: '/static/core/js/app_client/auth/login.view.html',
                controller: 'AuthController',
                controllerAs: 'vm'
            })
            .when('/contact', {
                templateUrl: '/static/core/js/app_client/contact/contact.view.html',
                controller: 'contactCtrl',
                controllerAs: 'vm'
            })
            .when('/detail', {
                templateUrl: '/static/core/js/app_client/tripDetail/tripDetail.view.html',
                controller: 'tripDetailCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});

    }

    angular
        .module('s2bApp')
        .config(['$routeProvider', '$httpProvider', '$resourceProvider', config]);

})();