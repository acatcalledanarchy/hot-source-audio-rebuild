/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('AboutUsCtrl', AboutUsCtrl);

	AboutUsCtrl.$inject = ['WEBSITE_SETTINGS'];

	function AboutUsCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.banner = WEBSITE_SETTINGS.PAGES.ABOUT_US.BANNER;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}
	
})();