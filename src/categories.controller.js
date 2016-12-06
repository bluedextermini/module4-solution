(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('categoriesController', categoriesController);


  categoriesController.$inject=['MenuDataService','categoryList'];
  function categoriesController(MenuDataService, categoryList) {
    console.log('at controller::',categoryList);
    this.categories=categoryList;
  }

}());
