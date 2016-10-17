angular.module('myApp', ['ui.router', 'oc.lazyLoad'])
  .config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider ) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('app', {
        url: '/', 
        //component: 'appComp',                //this is the difference 
        template: '<app-comp></app-comp>',     //this is the difference 
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load(
              {
                name: "lazyModule",
                files: ["./lazy-module.js"]
              }
            );
          }]
        }
      });
    }
  ]
);