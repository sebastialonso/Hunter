'use strict';

angular.module("app").controller('AuthCtrl', ['$scope', '$rootScope', '$location', '$cookieStore', 'AuthService', function($scope, $rootScope, $location, $cookieStore, AuthService){
  
  var data = null;
  $scope.getAccessToken = function(){
    if ($cookieStore.get('token') == undefined){
      AuthService.GetClientToken().then( 
        function(response){
          AuthService.SetToken(response);
          $location.path('/feed');
        }, function(response){
          alert("Algo no funciono");
      });
    };
  };

  $scope.getAccessToken();
}]);