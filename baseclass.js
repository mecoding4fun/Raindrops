// HI THIS IS MY RAINDROP 

class baseClass{
  constructor(x,y,width,height){
      this.body = rect(x,y,width,height);
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
  }

  display(){
      push();
      fill("yellow");
      rectMode(CENTER);
      rect(this.x, this.y, this.width,this.height);
      pop();
  }
}