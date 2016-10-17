angular.module('myApp', ['ui.router', 'lazyModule'])
  .config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider ) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('app', {
        url: '/', 
        component: 'appComp',
      });
    }
  ]
);