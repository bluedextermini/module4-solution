(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject=['$http', '$q'];
  function MenuDataService($http, $q) {
      console.log('defining MenuDataService');
      var service=this;
      service.getAllCategories=function () {
        console.log('service initialized');
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/categories.json'
        }).then(function(result){
            console.log('result::',result);
            console.log('categories::',result.data);
            deferred.resolve(result.data);
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
