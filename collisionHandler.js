var disks = []
var bounceTime = 0;
var phi = 0;
var disk1;
var disk2;

class CollisionHandler{
  constructor(_disk1,_disk2){
    disk1 = _disk1
    disk2 = _disk2
    bounceTime = Date.now()
  }

  //keep checking if the circles hit
  calc(){
    var hit = collideCircleCircle(disk1.hor,disk1.ver,disk1.dia,disk2.hor,disk2.ver,disk2.dia)
    if(hit){
      this.bounce(disk1,disk2)
    }
  }

  bounce(disk1,disk2){
    if(Date.now() - bounceTime < 200){
      return;
    }
    bounceTime = Date.now();
    phi = getCollisionAngel(disk1,disk2);
    var m1 = disk1.weight;
    var m2 = disk2.weight;
    var v1 = disk1.getTotSpeed();
    var v2 = disk2.getTotSpeed();
    var v1a = calcAngle(disk1.hor,disk1.ver)
    var v2a = calcAngle(disk2.hor,disk2.ver)
    //rotate to collisionAngle
    var v1xr = v1*Math.cos(v1a - phi)
    var v1yr = v1*Math.sin(v1a - phi)
    var v2yr = v2*Math.sin(v2a - phi)
    var v2xr = v2*Math.cos(v2a - phi)
    //calculate
    var v1fxr = (v1xr*(m1-m2)+2*m2*v2xr) / (m1+m2)
    var v2fxr = (v2xr*(m2-m1)+2*m1*v1xr) / (m1+m2)
    //Rotate back
    var v1fx = v1fxr*Math.cos(phi)+v1yr*Math.cos(phi+(Math.PI/2))
    var v1fy = v1fxr*Math.sin(phi)+v1yr*Math.sin(phi+(Math.PI/2))
    var v2fx = v2fxr*Math.cos(phi)+v2yr*Math.cos(phi+(Math.PI/2))
    var v2fy = v2fxr*Math.sin(phi)+v2yr*Math.sin(phi+(Math.PI/2))

    disk1.changeSpeed(v1fx,v1fy);
    disk2.changeSpeed(v2fx,v2fy);
    console.log("Disk1 :" + v1fx + " : " + v1fy)
    console.log("Disk2 :" +v2fx+" : "+v2fy)

  }
}

function getCollisionAngel(disk1,disk2){
  var x = disk2.hor - disk1.hor;
  var y = disk2.ver - disk1.ver;
  return calcAngle(x,y);
}
function calcAngle(x,y){
  var result = 0;
  if(x < 0){
   result = 180+ Math.atan(y/x)
  }
  else if (x > 0 && y >= 0){
   result = Math.atan(y/x)
 }
 else if(x > 0 && y < 0){
   result = 360+Math.atan(y/x)
 }
 else if (x == 0 && y == 0){
   result=90
 }
 else{
   result = 270
 }
 return result
}

// function getRotatedCor(x,y,rot){
//   var x = x*Math.cos(rot) + y*Math.sin(rot);
//   var y = y*Math.cos(rot) + x*Math.sin(rot);
//   console.log("x: " + x + " y: " + y)
// }
function calcFV1X(m1,m2,iv1x,iv2x){
  fv1x = (m1*iv1x + m2*iv2x) / (m1+m2)
  return fv1x
}
function calcFV1Y(m1,m2,iv1y,iv2y){
  fv1y = (m1*iv1y + m2*iv2y) / (m1+m2)
  return fv1y
}
function calcFV2X(iv1x,iv2x,fv1x){
  fv2x = (iv1x + iv2x) - fv1x
  return fv2x
}
function calcFV2Y(iv1y,iv2y,fv1y){
  fv2y = (iv1y + iv2y) - fv1y
  return fv2y*-1
}
