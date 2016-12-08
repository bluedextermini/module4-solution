(function() {
  'use strict';
    angular.module('MenuApp')
    .component('items', {
       templateUrl: "src/template/items.component.template.html",
       bindings:{
         category:'<',
         itemList: '<'
       }
    });
}());
