(function () {

  angular
    .module('s2bApp')
    .directive('footerGeneric', footerGeneric);

  function footerGeneric () {
    return {
      restrict: 'EA',
      templateUrl: '/static/core/js/app_client/common/directives/footerGeneric/footerGeneric.template.html'
    };
  }

})();