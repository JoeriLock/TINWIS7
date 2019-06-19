
function calcAngle2(x,y){
  return Math.atan(y/x)
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
function getRotatedCor(x,y,rot){
  var x = x*Math.cos(rot) + y*Math.sin(rot);
  var y = y*Math.cos(rot) + x*Math.sin(rot);
  console.log("x: " + x + " y: " + y)
}

var m1 = 10;
var m2 = 10;

var collisionAngle = calcAngle(2,-1);// getCollisionAngel();
var v1a = calcAngle(3,-1)
var v1 = (3**2 + 1**2)**(1/2);
var v2a = calcAngle(-2,3)
var v2 = (2**2 + 3**2)**(1/2);

var v1xr = v1*Math.cos(v1a - collisionAngle)
var v1yr = v1*Math.sin(v1a - collisionAngle)
var v2yr = v2*Math.sin(v2a - collisionAngle)
var v2xr = v2*Math.cos(v2a - collisionAngle)

var v1f = (v1*(m1-m2)+2*m2*v2) / (m1+m2)
var v2f = (v2*(m2-m1)+2*m1*v1) / (m1+m2)

var v1fxr = (v1xr*(m1-m2)+2*m2*v2xr) / (m1+m2)
var v2fxr = (v2xr*(m2-m1)+2*m1*v1xr) / (m1+m2)

var v1fx = v1fxr*Math.cos(collisionAngle)+v1yr*Math.cos(collisionAngle+(Math.PI/2))
var v1fy = v1fxr*Math.sin(collisionAngle)+v1yr*Math.sin(collisionAngle+(Math.PI/2))
var v2fx = v2fxr*Math.cos(collisionAngle)+v2yr*Math.cos(collisionAngle+(Math.PI/2))
var v2fy = v2fxr*Math.sin(collisionAngle)+v2yr*Math.sin(collisionAngle+(Math.PI/2))

v1 + v2
v1fx + v1fy + v2fx + v2fy
