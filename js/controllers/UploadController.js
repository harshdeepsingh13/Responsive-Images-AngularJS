app.controller('UploadController',['$scope',function($scope){
  // var colorThief = new ColorThief();
  $scope.imageSrc="images/1.jpg";
  
  $scope.$on("fileProgress",function(e, progress){
    $scope.progress=progress.loaded/progress.total;
  });
  // var img = document.getElementById('myImage');
  // colorThief.getColor(img);
  // console.log("color thief" + colorThief);

}]);
