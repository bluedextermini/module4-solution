(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject=['MenuDataService','categoryList'];
  function CategoriesController(MenuDataService, categoryList) {
    var categories=this;
    console.log('controller:category list::'+ categoryList);
    categories.categories=categoryList;

  }

}());
