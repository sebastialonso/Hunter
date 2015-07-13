'use strict';
angular.module("app").filter('trusted', [
  '$sce', function($sce) {
    return function(url) {
      return $sce.trustAsHtml(url);
    };
  }
])
.directive('children', [function(){
  return {
    restrict: 'E',
    scope: {
      src: '@'
    },
    replace: true,
    link: function(scope, element, attrs){
      var json = JSON.parse(attrs.src);
      var value = "";
      for (var index in json.child_comments) {
        var child = json.child_comments[index];
        console.log(child);
        value += "<ul class='collection'><li class='collection-item'><div class='valign-wrapper'><img src='" + child.user.image_url['100px'] + "' alt='' class='circle responsive-img' width='50'><span style='margin-left:3%;' class='title'><b>" + child.user.name + "</b><br/><span style='color:#b2b1b1;''>" + child.user.username + "</span></span></div><p>" +  child.body + "</p></li></ul>";
        value += "<children ng-if='" + child.child_comments_count + " > 0' ng-src='{{" + child + "}}'></children>";
      };
      return element.replaceWith(value);
    }
  };
}]);