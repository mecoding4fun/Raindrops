// HI THIS IS MY RAINDROP 


class baseClass{
  constructor(x,y,width,height){
      this.body = rect(x,y,width,height);
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
      var rand = random(1,4);
      this.image = loadImage("sprites/dollar1.png");

  }

  display(){
      push();
      rectMode(CENTER);
      rect(this.x, this.y, this.width,this.height);
      imageMode(CENTER);
      image(this.image, this.x, this.y, this.width, this.height);
      pop();
  }
}
