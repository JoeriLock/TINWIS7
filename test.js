/*
https://www.youtube.com/watch?v=0sbzWZhOG10
fv1x = fv1*cos(fa1)
fv1y = fv1*sin(fa1)
fv2x = fv2*cos(fa2)
fv2y = fv2*sin(fa2)

//
iv1 + iv2 = fv1x + fv2x
iv1 + iv2 = fv1*cos(fa1) + fv2*cos(fa2)
fv2*cos(fa2) = iv1 + iv2 - fv1*cos(fa1)

//y of ball 2 is going down
iv1y + iv2y = fv1y - fv2y
iv1y + iv2y = fv1*sin(fa1) - fv2*sin(fa2)




*/

/*
m=m1=m2
fa1 = 30
fa2 = 45
iv1 = 10
iv2 = 0

//defination of fv over acces
fv1x = fv1*cos(30)
fv1y = fv1*sin(30)
fv2x = fv2*cos(45)
fv2y = fv2*sin(45)

//velocity over x
m1*iv1x + m2*iv2x = m1*fv1x + m2*fv2x
m1*10 = m1*(fv1*cos(30)) + m2*(fv2*cos(45))
10 = fv1*cos(30) + fv2*cos(45)
10 = fv1*0.866 + fv2*0.707
10 = (fv2*1.414)*0.866 + fv2*0.707
10 = 1,224524*fv2 + 0.707*fv2
10 = 1.931524*fv2
10/1.931524 = fv2
fv2 = 5.18ms


//velocity over y
m1*iv1y + m2*iv2y = m1*fv1y - m2*fv2y
0 = m1*(fv1*sin(30)) - m2*(fv2*sin(45))
0 = fv1*sin(30) - fv2*sin(45)
0 = fv1*0.5 - fv2*0.707
0 = fv1 - fv2*1.414
fv1 = fv2*1.414
fv1 = 5.18*1.414
fv1 = 7,32452


*/

/*
Both disk end up going in the same direction
https://www.youtube.com/watch?v=Bq2QHY4AFLE

m1=2
m2=4
iv1=6
iv2=5
ia1=30
ia2=45
iv1x=iv1*cos(ia1)
iv1y=iv1*sin(ia1)
iv2x=iv2*cos(ia2)
iv2y=iv2*sin(ia2)

m1*iv1x + m2*iv2x = (m1+m2)*fvx
2*6*cos(30) + 4*5*cos(45) = 6*fvx
2*6*0.866 + 4*5*0.707 = 6*fvx
10.392 + 14.14 = 6*fvx
24.532 = 6*fvx
fvx = 4.09


m1*iv1y + m2*iv2y = (m1+m2)*fvy
-2*6*sin(30) + 4*5*sin(45) = (m1+m2)*fvy
-12*0.5 + 20*0.707 = (m1+m2)*fvy
-6 + 14.14 = 6*fvy
8.14/6 = fvy
fvy = 1.36

fv1 = sqr(fvx**2 + fvy**2)
fv1 = srq(4.09**2 + 1.36**2)
fv1 = sqr(18.58)
fv1 = 4.310


//Same buts vars only

m1*iv1x + m2*iv2x = (m1+m2)*fvx
fvx = m1*iv1x + m2*iv2x / (m1+m2)

m1*iv1y + m2*iv2y = (m1+m2)*fvy
fvy = m1*iv1y + m2*iv2xy / (m1+m2)

 */

function calcFV1X(m1,m2,iv1x,iv2x){
  fv1x = (m1*iv1x + m2*iv2x) / (m1+m2)
  return fv1x
}
function calcFV1Y(m1,m2,iv1y,iv2y){
  fv1y = m1*iv1y + m2*iv2xy / (m1+m2)
  return fv1y
}
function calcFV2X(iv1x,iv2x,fv1x){
  fv2x = iv1x + iv2x - fv1x
}
function calcFV2X(iv1y,iv2y,fv1y){
  fv2y = iv1y + iv2y - fv1y
}

Math.cos(Math.PI/6)//30
Math.cos(Math.PI/4)//45
Math.sin(Math.PI/6)
Math.sin(Math.PI/4)
var m1 = 0.058
var m2 = 0.045
var iv1 = 40
var iv2 = 50
var fv2 = getFV2(m1,iv1,m2,iv2)
var fv1 = getFV1(iv1,iv2,fv2)
fv1
fv2
/*
iv1 + fv1 = iv2 + fv2
fv1 = fv2 + iv2 - iv1
*/
function getFV1(iv1,iv2,fv2){
  var fv1  = iv2 + fv2 - iv1
  return fv1;
}


/*
iv1 + fv1 = iv2 + fv2
fv1 = fv2 + iv2 - iv1

m1*iv1 + m2*iv2 = m1*fv1 + m2*fv2
m1*iv1 + m2*iv2 - m2*fv2 = m1*fv1
m1*iv1 + m2*iv2 - m2*fv2 = m1*(fv2 + iv2 - iv1)
m1*iv1 + m2*iv2 - m2*fv2 = m1*fv2 + m1*iv2 - m1*iv1
m1*iv1 + m2*iv2 - m2*fv2 - m1*iv2 + m1*iv1 = m1*fv2
m1*iv1 + m2*iv2 - m1*iv2 + m1*iv1 = m1*fv2 + m2*fv2
m1*iv1 + m2*iv2 - m1*iv2 + m1*iv1 = (m1+m2)*fv2
fv2 = (m1*iv1 + m2*iv2 - m1*iv2 + m1*iv1) /(m1+m2)
*/
function getFV2(m1,iv1,m2,iv2){
  fv2 = (m1*iv1 + m2*iv2 - m1*iv2 + m1*iv1) /(m1+m2)
  return fv2;
}


/*
MORAE MATH
https://en.wikipedia.org/wiki/Elastic_collision4
 */
