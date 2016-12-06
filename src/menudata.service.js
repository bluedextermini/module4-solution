(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService ', MenuDataService);

  MenuDataService.$inject=['$http', '$q'];
  function MenuDataService($http, $q) {
      console.log('defining MenuDataService');
      var service=this;
      service.getAllCategories=function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/categories.json'
        }).then(function(categories){
            console.log('getAllCategories::',categories);
            deferred.resolve(categories);
        });
        return deferred.promise;
      }

      service.getItemsForCategory=function (categoryShortName) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
        }).then(function(items){
            console.log('getItemsForCategory::',items);
            deferred.resolve(items);

        });
         return deferred.promise;
      }
  }

}());
