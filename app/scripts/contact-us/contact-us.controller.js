/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.controller('ContactUsCtrl', ContactUsCtrl);

	ContactUsCtrl.$inject = ['WEBSITE_SETTINGS'];

	function ContactUsCtrl(WEBSITE_SETTINGS) {

		var vm = this;
		vm.banner = WEBSITE_SETTINGS.PAGES.CONTACT_US.BANNER;
		vm.WEBSITE_SETTINGS = WEBSITE_SETTINGS;
	}

})();