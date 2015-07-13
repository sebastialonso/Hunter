'use strict';
angular.module("app").factory('FeedService', [ 'BASE', '$http', function(BASE, $http){
  
  var services = {};
  services.FetchPosts = function() {
    return $http.get(BASE + '/posts').then(function(response){
      return {
        data: response.data,
        status: response.status
      }
    });
  };

  return services;
}]);