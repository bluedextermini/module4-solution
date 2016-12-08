(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);


  // categoriesController.$inject=['MenuDataService','categoryList'];
  // function categoriesController(MenuDataService, categoryList) {
  //   console.log('at controller::',categoryList);
  //   this.categories=categoryList;
  // }

  CategoriesController.$inject=['MenuDataService','categoryList'];
  function CategoriesController(MenuDataService, categoryList) {
    var categories=this;
    console.log('controller:category list::'+ categoryList);
    categories.categories=categoryList;
    // MenuDataService.getAllCategories().then(function(categoryList){
    //   console.log('at controller::',categoryList);
    //   categoriesCtrl.categories=categoryList;
    // });

  }


  // function categoriesController() {
  //   //console.log('at controller::',categoryList);
  //   var categoryList=[];
  //   categoryList.push(
  //     {"id":81,"short_name":"L","name":"Lunch","special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.","url":"https://davids-restaurant.herokuapp.com/categories/81.json"}
  //   );
  //   categoryList.push(
  //     {"id":81,"short_name":"M","name":"Lunch","special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.","url":"https://davids-restaurant.herokuapp.com/categories/81.json"}
  //   );
  //   this.categories=categoryList;
  // }

}());
