(function() {
  'use strict';

  /**
   * @ngdoc route
   * @name gocosApp.route:user
   * @function
   * @description
   * # user
   * Route in the gocosApp.
   */
  angular.module('gocosApp')
    /* @ngInject */
    .config(function ($stateProvider) {

      var User = {
        name: 'user',
        url: '/user',
        templateUrl: 'modules/user/user.template.html',
        controller: 'User',
		resolve: {
			"currentAuth": ["Auth", function(Auth) {
				return Auth.$requireAuth();
			}]
		}
      };

      $stateProvider.state(User);
    });
})();
