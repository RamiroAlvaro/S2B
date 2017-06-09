(function() {
    'use strict';

    angular
        .module('s2bApp')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$location', '$localStorage', 'authService'];

    function AuthController($location, $localStorage, authService) {
        var vm = this;

        vm.pageHeader = {
            title: 'LOGIN'
        };

        vm.login = login;
        vm.logout = logout;
        vm.register = register;
        vm.isLoggedIn = isLoggedIn;
        // TODO: Save all these in $localStorage
        vm.$storage = $localStorage;
        vm.user = {
            username: '',
            email: '',
            password: '',
            error: ''
        };

        function login(user) {
            var resource = authService.login(user);
            resource.$promise
                .then(function(response) {
                    $localStorage.token = response.token;
                    $localStorage.username = user.username;
                    $location.path('/');
                })
                .catch(function(error) {
                    vm.user.error = error.data;
                });
        }

        function logout() {
            $localStorage.token = '';
            $localStorage.username = '';
            $location.path('/');
        }

        function register(user) {
            var resource = authService.register(user);
            resource.$promise
                .then(function(response) {
                    $localStorage.token = response.token;
                    $localStorage.username = user.username;
                    $location.path('/');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function isLoggedIn() {
            return authService.isLoggedIn();
        }


    }
})();