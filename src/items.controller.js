(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject=['MenuDataService', '$stateParams','itemList'];
  function ItemsController(MenuDataService, $stateParams,itemList) {
    var itemCtrl=this;
    itemCtrl.itemList=itemList;
    itemCtrl.category=$stateParams.category;
    console.log('controller :: itemList::',itemCtrl.itemList );
  }
}());
