(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gocosApp.controller:UserCtrl
	 * @description
	 * # UserCtrl
	 * Controller of the gocosApp
	 */
	angular
		.module('gocosApp')
		.controller('User', User);

	/* @ngInject */
	function User(UserService) {
		/*jshint validthis: true */
		var vm = this;

		vm.auth = UserService;



		activate();
		function activate() {
		}
	};

})();
