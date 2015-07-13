'use strict';
angular.module("app").factory("CommentService", [ 'BASE', '$http', function(BASE, $http){
  var services = {};

  services.FetchComments = function(id){
    return $http.get(BASE + '/posts/' + id + '/comments').then(function(response){
      return {
        data: response.data,
        status: response.status
      };
    });
  };
  
  return services;
}]);