var app = angular.module("myApp",[]);
function getDominantColor()
{
  console.log("hey onload");
  setTimeout(function(){
    var sourceImage = document.getElementById("myImage");
    var colorThief = new ColorThief();
    var color = colorThief.getColor(sourceImage);
    console.log("hey");
    console.log(color);
    // document.getElementById("myImage").style.border="10px solid";
    document.getElementById("myBody").style.background=rgbToHex(color[0],color[1],color[2],50.00);
    


    console.log(document.getElementById("myBody").style.background);
    // document.getElementById('para').innerHTML=color;
  },1000);

  function rgbToHex(r, g, b, percent) {
    // return "#" + ((1 << 24) + (r << 16) + (g << 8) +   b).toString(16).slice(1);
    var amt = Math.round(2.55*percent);
    var R=r+amt, G=g+amt, B=b+amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }
}

