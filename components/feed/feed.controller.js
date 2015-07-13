'use strict';
angular.module("app").controller('FeedCtrl', [ '$scope', 'FeedService', 'CommentService', function($scope, FeedService, CommentService){
  $scope.posts = [];
  $scope.comments = [];
  $scope.ready = false;
  $scope.commentsReady = false;

  $scope.fetchPosts = function(){
    FeedService.FetchPosts().then(
      function(response){
        $scope.posts = response.data.posts;
        $scope.ready = true;
      },
      function(response){
        console.log("Error");
    });
  };

  $scope.fetchPosts();

  $scope.showComments= function(id){
    $("#comments").openModal();
    CommentService.FetchComments(id).then(
      function(response){
        $scope.comments = response.data.comments;
        $scope.commentsReady = true;
      },
      function(response){
        alert("Error");
      });
  };

  $scope.done = function(){
    $("#comments").closeModal();
  }

}]);