class Disk{

  constructor(_hor,_ver,_dia,_horSpeed,_verSpeed){
    this.dia = _dia;
    this.hor = _hor;
    this.ver = _ver;
    this.horSpeed = _horSpeed;
    this.verSpeed = _verSpeed;
    this.r = Math.floor(Math.random()*255);
    this.g = Math.floor(Math.random()*255);
    this.b = Math.floor(Math.random()*255);
    this.weight = DISKWEIGHT;
    this.bounced = false;
  }

  boucing(){
     console.log("test");
   }

  draw(){
    this.hor += this.horSpeed;
    this.ver += this.verSpeed;
    this.wallCollision();
    fill(this.r,this.g,this.b)
    return ellipse(this.hor,this.ver,this.dia,this.dia);
  }

  changeSpeed(x,y){
    this.horSpeed = x;
    this.verSpeed = y;
  }

  changePosition(x,y){
    this.hor = x;
    this.ver = y;
  }


//in progress
  getTotSpeed(){
    return (this.horSpeed**2 + this.verSpeed**2)**(1/2)
  }

  getEnergy(){
    0.5*this.weight*(this.getTotSpeed()**(0.5))
  }
//out progress
  getVelocity(){
    this.weight*this.getTotSpeed()
  }

  wallCollision(){
    if( (this.hor >= CANVASWIDTH - this.dia/2 && this.horSpeed > 0)  || (this.hor <= 0 + this.dia/2 && this.horSpeed < 0)){
      this.horSpeed *= -0.9
    }
    if( (this.ver >= CANVASHEIGHT - this.dia/2 && this.verSpeed > 0) || (this.ver <= 0 + this.dia/2 && this.verSpeed < 0)){
      this.verSpeed *= -0.9
    }
  }

}
