(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name gocosApp.service:User
	 * @description
	 * # User
	 * Service of the gocosApp
	 */
	angular
		.module('gocosApp')
		.service('UserService', UserService);

	/* @ngInject */
	function UserService($state) {
		var vm = this;
		var ref = new Firebase('https://gocos.firebaseio.com/');


		vm.createUser = function(username, password){
			ref.createUser({
				email: username,
				password: password,
			}, function(error, userData) {
				if(error) {
					console.log('Error', error);
				} else {
					console.log('Complete', userData.uId);
					$state.go('user');
				}
			});
		};

		vm.loginUser = function(username, password) {
			ref.authWithPassword({
				email: username,
				password: password
			}, function(error, authData) {
				if(error) {
					console.log('Login FAILED:', error);
				} else {
					console.log('Login succeeded:', authData);
					$state.go('user');
				}
			});
		};


	};

})();
