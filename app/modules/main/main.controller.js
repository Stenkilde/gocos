(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gocosApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the gocosApp
	 */
	angular
		.module('gocosApp')
		.controller('Main', Main);

	/* @ngInject */
	function Main(UserService, $state) {
		/*jshint validthis: true */
		var vm 			= this;

		vm.userSignup 	= userSignup;
		vm.userLogin	= userLogin;

		function userSignup() {
			UserService.createUser(vm.username, vm.userpassword);
		}

		function userLogin() {
			UserService.loginUser(vm.username, vm.userpassword);
		}

	};

})();
