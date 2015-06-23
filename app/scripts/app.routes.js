/* jshint latedef: false */

(function() {

	'use strict';

	angular
		.module('app')
		.config(config)
		.run(runBlock);

	config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'WEBSITE_SETTINGS'];

	function config($stateProvider, $urlRouterProvider, $locationProvider, WEBSITE_SETTINGS) {

		var addressLine,
			client,
			contactUsKeywords = [],
			contactUsDescription = [],
			description,
			i,
			j,
			keywords,
			showreelKeywords = ['clients', 'showreel', 'audio', 'video'],
			showreelDescription = [],
			websiteTitle = ' | ' + WEBSITE_SETTINGS.TITLE;

		//////////////////////////////////////////////////////////////////////////////////

		for(i in WEBSITE_SETTINGS.CLIENTS) {
			client = WEBSITE_SETTINGS.CLIENTS[i].NAME;
			showreelKeywords.push(client);
		}

		for(i in WEBSITE_SETTINGS.SHOWREEL.VIDEOS) {
			description = WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].COPY;
			keywords = WEBSITE_SETTINGS.SHOWREEL.VIDEOS[i].TITLE.toLowerCase().split(' ');
			for(j in keywords) {
				if(showreelKeywords.indexOf(keywords[j]) < 0) {
					showreelKeywords.push(keywords[j]);		
				}
			}
			showreelDescription.push(description);
		}

		for(i in WEBSITE_SETTINGS.SHOWREEL.MP3S) {
			description = WEBSITE_SETTINGS.SHOWREEL.MP3S[i].COPY;
			keywords = WEBSITE_SETTINGS.SHOWREEL.MP3S[i].TITLE.toLowerCase().split(' ');
			for(j in keywords) {
				if(showreelKeywords.indexOf(keywords[j]) < 0) {
					showreelKeywords.push(keywords[j]);	
				}
			}
			showreelDescription.push(description);
		}

		showreelDescription = showreelDescription.join(' ');
		showreelKeywords = showreelKeywords.join(', ');

		////////////////////////////////////////////////////////////////////////////////////

		for(i in WEBSITE_SETTINGS.ADDRESS) {
			addressLine = WEBSITE_SETTINGS.ADDRESS[i];
			contactUsDescription.push(addressLine);
			addressLine = addressLine.split(' ');
			for(j in addressLine) {
				if(contactUsKeywords.indexOf(addressLine[j]) < 0) {
					contactUsKeywords.push(addressLine[j]);
				}
			}
		}

		contactUsDescription = contactUsDescription.join(', ');
		contactUsKeywords = contactUsKeywords.join(', ');

		////////////////////////////////////////////////////////////

		$stateProvider
		.state('app', {
			abstract: true
			// Resolve here to preload banner images and background image?
			// Preloaders for employee and services images?
			// Double check poster background image is as it should be?
		})
		.state('app.home', {
			url: '/',
			cache: false,
			views: {
				'banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'HomeCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/home/home.html',
					controller:  'HomeCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'Home' + websiteTitle,
					bodyClass: 'home',
					autoScroll: true
				},
				meta: {
					description: WEBSITE_SETTINGS.PAGES.HOME.META.DESCRIPTION,
					keywords: WEBSITE_SETTINGS.PAGES.HOME.META.KEYWORDS
				}
			}
		})
		.state('app.studio', {
			url: '/studio',
			views: {
				'banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'StudioCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/studio/studio.html',
					controller:  'StudioCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'Studio' + websiteTitle,
					bodyClass: 'studio',
					autoScroll: true
				},
				meta: {
					description: WEBSITE_SETTINGS.PAGES.STUDIO.META.DESCRIPTION,
					keywords: WEBSITE_SETTINGS.PAGES.STUDIO.META.KEYWORDS
				}
			}
		})
		.state('app.about-us', {
			url: '/about-us', 	
			views: {
				'banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'AboutUsCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/about-us/about-us.html',
					controller:  'AboutUsCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'About us' + websiteTitle,
					bodyClass: 'about-us',
					autoScroll: true
				},
				meta: {
					description: WEBSITE_SETTINGS.PAGES.ABOUT_US.META.DESCRIPTION,
					keywords: WEBSITE_SETTINGS.PAGES.ABOUT_US.META.KEYWORDS
				}
			}
		})
		.state('app.our-work', {
			url: '/our-work', 	
			views: {
				'banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'OurWorkCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/our-work/our-work.html',
					controller:  'OurWorkCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'Our work' + websiteTitle,
					bodyClass: 'our-work',
					autoScroll: true
				},
				meta: {
					description: showreelDescription,
					keywords: showreelKeywords
				}
			}
		})	
		.state('app.our-work.page-anchor', {
			url: '/', 
			params: {
				pageAnchor: {}
			},
			views: {
				'banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'OurWorkCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl:  'scripts/our-work/our-work.html',
					controller:  'OurWorkCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}
			},
			data: {
				page: {
					title: 'Our work' + websiteTitle,
					bodyClass: 'our-work',
					autoScroll: false
				},
				meta: {
					description: showreelDescription,
					keywords: showreelKeywords
				}
			}
		})	
		.state('app.contact-us', {
			url: '/contact-us',	
			views: {
				'banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'ContactUsCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl: 'scripts/contact-us/contact-us.html',
					controller: 'ContactUsCtrl',
					controllerAs: 'vm'
				},
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}        
			},
			data: {
				page: {
					title: 'Contact us' + websiteTitle,
					bodyClass: 'contact-us',
					autoScroll: true
				},
				meta: {
					description: contactUsDescription,
					keywords: contactUsKeywords
				}
			}
		})
		.state('app.404', {
			url: '/404',	
			views: {
				'banner@': {
					templateUrl: 'scripts/layout/banner.html',
					controller: 'ErrorCtrl',
					controllerAs: 'vm'
				},
				'page-content@': {
					templateUrl: 'scripts/error/error.html',
					controller: 'ErrorCtrl',
					controllerAs: 'vm'
				},	
				'footer@': {
					templateUrl: 'scripts/layout/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'vm'
				}        
			},
			data: {
				page: {
					title: '404 error' + websiteTitle,
					bodyClass: 'error',
					autoScroll: true
				},
				meta: {
					description: '',
					keywords: ''
				}
			}
		});

		$locationProvider.hashPrefix('!');
		$urlRouterProvider
			.when('', '/')
			.otherwise('/404');
	}

	runBlock.$inject = ['$rootScope', '$state', '$stateParams', '$location', '$window'];

	function runBlock($rootScope, $state, $stateParams, $location, $window) {
		$rootScope.$on('$stateChangeSuccess', function() {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
			if ($window.ga) {
		        $window.ga('send', 'pageview', {
		        	page: $location.path()
		        });		
			}
        });
	} 

})();