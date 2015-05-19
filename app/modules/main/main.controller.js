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
	function Main(Auth, $state, $scope) {
		/*jshint validthis: true */
		var vm 			= this;
		vm.userSignup 	= userSignup;
		//vm.userLogin	= userLogin;
		vm.username		= null;
		vm.userpassword	= null;
		vm.message		= null;
		vm.error		= null;


		function userSignup(username, password) {
			Auth.createUser({
				email: username,
				password: password
			}).then(function(userData) {
				vm.message = 'User created with uId' + userData.uId;
				$state.go('user');
			}).catch(function(error) {
				vm.error = error;
			});
		}

		//
		//function userSignup() {
		//	UserService.createUser(vm.username, vm.userpassword);
		//}
		//
		//function userLogin() {
		//	UserService.loginUser(vm.username, vm.userpassword);
		//}

	}

})();
