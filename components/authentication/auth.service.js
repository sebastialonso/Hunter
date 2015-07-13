'use strict';

angular.module("app").factory('AuthService', ['$http', '$cookieStore', 'BASE', function($http, $cookieStore, BASE){

  var services = {}
  var data = {
    client_id: "4c8c83480136269dfd5c0bc78b1acf8c1d226e1891389fb5bdf85f2d60a74053",
    client_secret: "f5ad2ad957252ac285567c88d24723047f493e0b51776cfa6447339b84c249fe",
    grant_type: "client_credentials"
  };

  services.GetClientToken = function() {
    return $http.post(BASE + '/oauth/token', data).then(function(response){
      return {
        data: response.data,
        status: response.status
      };
    });
  };

  services.SetToken = function(response){
    Materialize.toast('Connection established', 2000);
    $cookieStore.put('token', response.data.access_token);
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
    console.log($http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token);
  };

  return services;
}]);