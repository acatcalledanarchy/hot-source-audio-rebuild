/* jshint latedef: false */
/* global FB */

(function() {

	'use strict';

	angular
		.module('app')
		.directive('fbPage', fbPage);

	fbPage.$inject = ['WEBSITE_SETTINGS'];

	function fbPage(WEBSITE_SETTINGS) {

		var directive = {
			restrict: 'C',
			link: link
		};

		return directive;

		///////////////////////////////


		function link(scope, element) { 
      		element[0].dataset.href = WEBSITE_SETTINGS.FACEBOOK_URL;
      		return typeof FB !== 'undefined' && FB !== null ? FB.XFBML.parse(element.parent()[0]) : void 0;
    	}
	}

})();