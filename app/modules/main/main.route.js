(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name gocosApp.route:main
   * @function
   * @description
   * # main
   * Route in the gocosApp.
   */
  angular.module('gocosApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var Main = {
        name: 'main',
        url: '/',
        templateUrl: 'modules/main/main.template.html',
        controller: 'Main',
        controllerAs: 'main'
      };

      $stateProvider.state(Main);
    });
})();
