app.controller('BorderController',['$scope',function($scope){
  document.getElementById('uploadFile').onchange=function(){
    var sourceImage = document.getElementById("myImage");
    var colorThief = new ColorThief();
    var color = colorThief.getColor(sourceImage);
    console.log(color);
  };
}]);
