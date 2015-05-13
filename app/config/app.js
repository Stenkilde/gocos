(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name gocosApp
	 * @description
	 * # gocosApp
	 *
	 * Main module of the application.
	 */
	angular
		.module('gocosApp', [
		
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngRoute',
    'ui.router',
    'config',
    'core.exception',
    'core.logger',
    'angular-loading-bar',
    'cgBusy',
    'angulartics',
    'angulartics.google.analytics',
    'hj.gsapifyRouter',
    'mm.foundation'
  
	]);
})();
