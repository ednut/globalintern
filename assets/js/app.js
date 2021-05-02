angular.module('myApp.controllers', []);
angular.module('myApp.models', []);
var myApp = angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.models'
]);

// myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) { // use this in production
myApp.config(function ($stateProvider, $urlRouterProvider) {
  // $locationProvider.html5Mode(true);
  // $urlRouterProvider.otherwise(function($injector) {
  // 	$injector.invoke(function($state) {
  // 			$state.transitionTo("404", {}, false);
  // 	});
  // }); // use in production

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
    })

    .state('services', {
      url: '/services',
      templateUrl: 'partials/services.html'
    })

    .state('see-how-it-works', {
      url: '/see-how-it-works',
      templateUrl: 'partials/see-how-it-works.html'
    })

    .state('be-a-partner', {
      url: '/be-a-partner',
      templateUrl: 'partials/be-a-partner.html'
    })

    .state('prep-to-vitual-work', {
      url: '/prep-to-vitual-work',
      templateUrl: 'partials/prep-to-vitual-work.html'
    })

    .state('internships', {
      url: '/internships',
      templateUrl: 'partials/internships.html'
    })

    .state('404', {
      templateUrl: 'partials/404.html'
    });
});
