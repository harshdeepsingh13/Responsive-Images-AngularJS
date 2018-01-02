app.controller('MainController',['$scope',function($scope) {
  $scope.image="https://d15dxe0kapai5v.cloudfront.net/articles/27_angular_spa_ci/angular_js.jpg";
  // $scope.image='images/1.jpg';
    $scope.zoomIn = function() {
        console.log("zoom in");
        var sourceImage = document.getElementById("myImage");
        console.log(sourceImage.clientWidth);
        if(sourceImage.clientWidth >= 3000){
            alert("maximum zoom level");
            document.getElementById("myZoomInButton").disabled=true;
        }
        else
        {
            if(document.getElementById("myZoomOutButton").disabled) document.getElementById("myZoomOutButton").disabled=false;
            sourceImage.style.width = (sourceImage.clientWidth + 50) + "px";
        }

    }
    $scope.resetImageWidth = function () {
        document.getElementById("myImage").style.width="60%";

    }
    $scope.zoomOut = function() {
        console.log("zoom out");
        var sourceImage = document.getElementById("myImage");
        console.log(sourceImage.clientWidth);
        if(sourceImage.clientWidth <= 200){
            alert("minimum zoom level");
            document.getElementById("myZoomOutButton").disabled=true;
        }
        else
        {
            if(document.getElementById("myZoomInButton").disabled) document.getElementById("myZoomInButton").disabled=false;
            sourceImage.style.width = (sourceImage.clientWidth - 50) + "px";
        }
        document.getElementById("myZoomInButton").blur();
    }
}]);
