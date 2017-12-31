app.controller('MainController',['$scope',function($scope) {
  $scope.image="https://d15dxe0kapai5v.cloudfront.net/articles/27_angular_spa_ci/angular_js.jpg";
  // $scope.image='images/1.jpg';
    $scope.zoomIn = function()
    {
      console.log("zoom in");
    }
}]);
