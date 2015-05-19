(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gocosApp.factory:Auth
	 * @description
	 * # Auth
	 * Factory of the gocosApp
	 */
	angular
		.module('gocosApp')
		.factory('Auth', Auth);

	/* @ngInject */
	function Auth($firebaseAuth) {
		var ref = new Firebase('https://gocos.firebaseio.com/');
		return $firebaseAuth(ref);
	}

})();
