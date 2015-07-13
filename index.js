var endpoint = "https://api.producthunt.com/v1";

var app = angular.module("app", [
  'ngCookies',
  'ngRoute'
]);
app.config([ '$routeProvider', function($routeProvider){
  return $routeProvider
    .when( "/", {
      templateUrl: "components/authentication/login.html"
    })
    .when("/feed", {
      templateUrl: "components/feed/feed.html"
    });
}]);
// app.run(['$rootScope','$cookieStore', '$http', function($rootScope, $cookieStore, $http){
//   $rootScope.token = $cookieStore.get('token') || '';
//   if ($rootScope.token != undefined && $rootScope.token != null) {
//     console.log("setando header");
//     $http.defaults.headers.common['Authorization'] = 'Bearer' + $rootScope.token;
//   };
// }]);
app.constant('BASE', endpoint);