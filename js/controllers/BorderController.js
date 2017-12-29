app.controller('BorderController',['$scope',function($scope){
    var colorThief = new ColorThief();
    var img = document.getElementById('myImage').src;
    colorThief.getColor(img);
    // console.log("color thief" + colorThief);
    console.log(img);
}]);
