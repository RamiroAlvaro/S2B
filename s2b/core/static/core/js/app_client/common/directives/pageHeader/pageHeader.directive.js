(function () {

  angular
    .module('s2bApp')
    .directive('pageHeader', pageHeader);

  function pageHeader () {
    return {
      restrict: 'EA',
      scope: {
        content : '=content'
      },
      templateUrl: '/static/core/js/app_client/common/directives/pageHeader/pageHeader.template.html'
    };
  }

})();