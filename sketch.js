var collisionHandler;

var horSpeed = 0;
var verSpeed = 0;
var pause = false;
var disk1,disk2;
var selectedDisk = null;

function updateGame(){
  collideDebug(true);
  horSpeed = parseInt(document.getElementById("horSpeed").value,10);
  verSpeed = parseInt(document.getElementById("verSpeed").value,10);

  disk1.horSpeed = horSpeed;
  disk1.verSpeed = verSpeed;
}

function displayText(){
  if(selectedDisk == disk1){
    var text = "Disk1";
  }else{
    var text = "Disk2";
  }
  document.getElementById("infoText").innerHTML = "selectedDisk: "+text
}

function setup(){
  createCanvas(CANVASWIDTH,CANVASHEIGHT);
  disk1 = new Disk(randomPosV(),randomPosH(),50,horSpeed,verSpeed);
  disk2 = new Disk(randomPosV(),randomPosH(),50,0,0);
  selectedDisk = disk1;
  collisionHandler = new CollisionHandler(disk1,disk2);
}
//pause with space
function keyPressed(){
  pause = (key == ' ' ? !pause : pause);
  if(key == '1'){
    console.log("x:" + disk1.hor + " y:" + disk1.ver
    + " xSpeed:" + disk1.horSpeed + " ySpeed: " + disk1.verSpeed)
  }
  if(key == '2'){
    console.log(" x:" + disk2.hor + " y:" + disk2.ver
    + " xSpeed:" + disk2.horSpeed + " ySpeed:" + disk2.verSpeed)
  }
  if(key == 'a'){
    selectedDisk = selectedDisk==disk1 ? disk2 : disk1;
    displayText();
  }
}
function mouseClicked(){

    if(mouseX < CANVASWIDTH && mouseY < CANVASHEIGHT){
      console.log("mouse " + mouseX +","+mouseY)
      selectedDisk.changePosition(mouseX,mouseY);
      selectedDisk.changeSpeed(horSpeed,verSpeed);
    }
}

function draw(){
  if(pause){return}
  background(135,206,235)
  collisionHandler.calc()
  disk1.draw();
  disk2.draw();
}

/**
 * returns two random positions within canvas size (Height only, im lazy)
 */
function randomPosH(){
  return Math.floor(Math.random() * (CANVASHEIGHT - 50)) + 26;
}
function randomPosV(){
  return Math.floor(Math.random() * (CANVASWIDTH - 50)) + 26;
}


function randomSpeed(){
  return Math.floor(Math.random() * 10);
}
