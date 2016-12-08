(function() {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  console.log('RoutConfig called...');
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home',{
    url:'/',
    templateUrl:'src/template/home.template.html'
  })
  .state('categories',{
    url:'/categories',
    templateUrl:'src/template/categories.template.html',
    controller: 'categoriesController as categories',
    resolve:{
        categoryList: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }

  });



  // .state('categories',{
  //   url:'/categories',
  //   templateUrl:'src/template/categories.template.html',
  //   controller: 'categoriesController as categories',

    // resolve:{
    //   categoryList: ['MenuDataService', function(MenuDataService){
    //     return MenuDataService.getAllCategories();
    //   }]
    // }
  // });

}

}());
