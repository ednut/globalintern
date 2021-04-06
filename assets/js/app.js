angular.module('myApp.controllers', []);
angular.module('myApp.models', []);
var myApp = angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.models',
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
      templateUrl: 'partials/home.html',
    })

    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html',
    })

    .state('services', {
      url: '/services',
      templateUrl: 'partials/services.html',
    })

    .state('gallery', {
      url: '/gallery',
      templateUrl: 'partials/gallery.html',
    })

    .state('newsroom', {
      url: '/newsroom',
      templateUrl: 'partials/newsroom.html',
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact.html',
    })

    .state('404', {
      templateUrl: 'partials/404.html',
    });
});
