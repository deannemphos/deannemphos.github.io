var backColor = 130;
var hexString = "00ffff"

var colChange = false; // go up

function setup() {
  createCanvas(940, 760);
  frameRate(60);
}

function draw() {

  // oscillate();
  background("#" + hexString);
  hexShift();
}

function hexShift() {
  var ab = hexString.substring(0, 2);
  var cd = hexString.substring(2, 4);
  var ef = hexString.substring(4, 6);

  if (parseInt(ab, 16) > 254) colChange = false;
  if (parseInt(ab, 16) < 1) colChange = true;

  print(hexString);
  
  if (colChange) {
    /*
    ab = (parseInt(ab, 16)+ 1).toString(16) ;
    cd = (parseInt(cd, 16) - 1).toString(16);
    */
    ab = ((parseInt(ab, 16) + 1).toString(16)).length == 1 ? "0" + (parseInt(ab, 16) + 1).toString(16) : (parseInt(ab, 16) + 1).toString(16);
    cd = ((parseInt(cd, 16) - 1).toString(16)).length == 1 ? "0" + (parseInt(cd, 16) - 1).toString(16) : (parseInt(cd, 16) - 1).toString(16);
    
  } else {
    /*
    ab = (parseInt(ab, 16) - 1).toString(16);
    cd = (parseInt(cd, 16) + 1).toString(16);
    */
    ab = ((parseInt(ab, 16) - 1).toString(16)).length == 1 ? "0" + (parseInt(ab, 16) - 1).toString(16) : (parseInt(ab, 16) - 1).toString(16);
    cd = ((parseInt(cd, 16) + 1).toString(16)).length == 1 ? "0" + (parseInt(cd, 16) + 1).toString(16) : (parseInt(cd, 16) + 1).toString(16);
  }

  hexString = ab + cd + "ff";

}

/*
function oscillate() {
  if(backColor > 254) colChange = false;
  if(backColor < 1) colChange = true;
  
  if(colChange) backColor++;
  else backColor--;
  
  print(backColor);
  
}
*/