(function () {

  angular
    .module('s2bApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: '/static/core/js/app_client/common/directives/navigation/navigation.template.html',
      controller: 'navigationCtrl as navvm'
    };
  }

})();